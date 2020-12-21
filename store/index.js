import UTILS from 'static/utils.js'

export const state = () => ({
  artistList: [],
  artistWorkList: [],
  worksList: [],
  guestPostList: [],
  // Modal Display State
  isModalConfirmOpen: false
})

export const getters = {
  getArtistProfile ({ artistList, artistWorkList, worksList }) {
    return artistList.map((artist) => {
      const artistImageEndpoint = UTILS.getArtistImageEndpoint(artist.id)
      const imgUrl = UTILS.getCdnUrl('profile', artistImageEndpoint)

      const worksWithRoles = artistWorkList
        .filter(artistWork => artistWork.artistId === artist.id)
        .map((filteredWork) => {
          const work = worksList.find(work => work.workId === filteredWork.workId)
          return {
            role: filteredWork.role,
            title: `<${work.title}>`,
            genre: work.genre
          }
        })
      return {
        ...artist,
        imgUrl,
        works: [...worksWithRoles]
      }
    })
  },
  getPostReceiverList ({ artistList }) {
    const receiverList = artistList.map(({ name, id }) => {
      return {
        name,
        id: Number(id)
      }
    })
    return [
      {
        id: 100,
        name: '모두에게'
      },
      ...receiverList
    ]
  },
  getPostList: ({ guestPostList }) => (id = 100) => {
    if (id === 100) {
      return guestPostList
    } else {
      return guestPostList
        .filter(post => (post.artistId === id || post.artistId === 100))
    }
  }
}

export const mutations = {
  setArtistList (state, payload) {
    state.artistList = payload.sort((a, b) => {
      return Number(a.id) - Number(b.id) || a.name.localeCompare(b.name)
    })
  },
  setArtistWorkList (state, payload) {
    state.artistWorkList = payload
  },
  setWorksList (state, payload) {
    state.worksList = payload
  },
  setGuestPostList (state, payload) {
    console.log(payload)
    state.guestPostList = payload.sort((a, b) => {
      return Number(b.createdTime) - Number(a.createdTime)
    })
  },
  setModalConfirmOpen (state, payload) {
    state.isModalConfirmOpen = payload
  },
  addNewGuestPost (state, payload) {
    state.guestPostList = [
      payload,
      ...state.guestPostList
    ]
  },
  deleteGuestPost (state, firebasePostId) {
    state.guestPostList = state.guestPostList
      .filter(post => post.firebasePostId !== firebasePostId)
  }
}

export const actions = {
  async fetchInitialArtistData (context, payload) {
    const { storageName, collectionName, mutationName } = payload
    const localData = localStorage.getItem(storageName)

    if (localData === 'undefined' || localData === null) {
      await this.$fire.firestore.collection(collectionName)
        .get()
        .then((snapshot) => {
          const list = []
          snapshot.forEach((doc) => {
            list.push(doc.data())
          })
          localStorage.setItem(storageName, JSON.stringify(list))
          context.commit(mutationName, list)
        })
    } else {
      context.commit(mutationName, JSON.parse(localData))
    }
  },
  async fetchGuestPostData (context) {
    const localPostCount = Number(localStorage.getItem('guest-post-count'))
    const storagePostCount = await new Promise((resolve) => {
      this.$fire.firestore.collection('guestCount')
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            resolve(doc.data().num)
          })
        })
    })

    console.log('Local Storage Post Count: ', localPostCount)
    console.log('Firebase Storage Post Count: ', storagePostCount)

    if (localPostCount !== storagePostCount) {
      console.log('Grab Post Data from Firebase')
      const storagePost = await new Promise((resolve) => {
        this.$fire.firestore.collection('guestPost')
          .get()
          .then((snapshot) => {
            const list = []
            snapshot.forEach((doc) => {
              const postData = doc.data()
              list.push({
                firebasePostId: doc.id,
                ...postData
              })
            })
            resolve(list)
          })
      })
      if (storagePostCount !== storagePost.length) {
        context.dispatch('putGuestPostCount', storagePost.length)
      }
      localStorage.setItem('guest-post-count', storagePost.length)
      localStorage.setItem('guest-post', JSON.stringify(storagePost))
      context.commit('setGuestPostList', storagePost)
    } else {
      console.log('Grab Post Data from Local Storage')
      context.commit('setGuestPostList', JSON.parse(localStorage.getItem('guest-post')))
    }
  },
  putGuestPostCount (context, payload) {
    const guestCountRef = this.$fire.firestore.collection('guestCount').doc('count')
    guestCountRef.update('num', payload)
  },
  async putNewGuestPost (context, payload) {
    console.log('New Guest Post Payload: ', payload)
    const batch = this.$fire.firestore.batch()
    const guestPostRef = this.$fire.firestore.collection('guestPost').doc()
    const guestCountRef = this.$fire.firestore.collection('guestCount').doc('count')
    const guestCount = await new Promise((resolve) => {
      guestCountRef.get().then((doc) => {
        resolve(doc.data().num)
      })
    })

    batch.set(guestPostRef, payload)
    batch.update(guestCountRef, { num: Number(guestCount + 1) })

    batch.commit()
      .then(() => {
        const localPostCount = Number(localStorage.getItem('guest-post-count'))
        const localPostList = JSON.parse(localStorage.getItem('guest-post'))
        localStorage.setItem('guest-post-count', (localPostCount + 1))
        localStorage.setItem('guest-post', JSON.stringify([
          payload,
          ...localPostList
        ]))
        context.commit('addNewGuestPost', payload)
      })
      .catch(err => console.error(err))
  },
  async deleteGuestPost (context, firebasePostId) {
    const batch = this.$fire.firestore.batch()
    const guestPostRef = this.$fire.firestore.collection('guestPost').doc(firebasePostId)
    const guestCountRef = this.$fire.firestore.collection('guestCount').doc('count')
    const guestCount = await new Promise((resolve) => {
      guestCountRef.get().then((doc) => {
        resolve(doc.data().num)
      })
    })

    batch.delete(guestPostRef)
    batch.update(guestCountRef, { num: Number(guestCount - 1) })

    batch.commit()
      .then(() => {
        const localPostCount = Number(localStorage.getItem('guest-post-count'))
        const localPostList = JSON.parse(localStorage.getItem('guest-post'))
        localStorage.setItem('guest-post-count', (localPostCount - 1))
        localStorage.setItem('guest-post', JSON.stringify([
          ...localPostList.filter(post => post.firebasePostId !== firebasePostId)
        ]))
        context.commit('deleteGuestPost', firebasePostId)
      })
      .catch(err => console.error(err))
  }
}
