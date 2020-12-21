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
    state.guestPostList = payload
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

    if (localPostCount !== storagePostCount) {
      console.log('Grab Post Data from Firebase')
      localStorage.setItem('guest-post-count', storagePostCount)
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
      localStorage.setItem('guest-post', JSON.stringify(storagePost))
      context.commit('setGuestPostList', storagePost)
    } else {
      console.log('Grab Post Data from Local Storage')
      context.commit('setGuestPostList', JSON.parse(localStorage.getItem('guest-post')))
    }
  },
  putNewGuestPost (context, payload) {
    const batch = this.$fire.firestore.batch()
    const guestPostRef = this.$fire.firestore.collection('guestPost').doc()
    const guestCountRef = this.$fire.firestore.collection('guestCount').doc('count')
    const increment = this.$fire.firestore.FieldValue.increment(1)

    batch.set(guestPostRef, payload)
    batch.update(guestCountRef, { num: increment })

    batch.commit()
      .then(() => {
        const localPostCount = Number(localStorage.getItem('guest-post-count'))
        const localPostList = JSON.parse(localStorage.getItem('guest-post'))
        localStorage.setItem(localPostCount + 1)
        localStorage.setItem(JSON.stringify([
          payload,
          ...localPostList
        ]))
        context.commit('addNewGuestPost', payload)
      })
      .catch(err => console.error(err))
  },
  deleteGuestPost (context, firebasePostId) {
    const batch = this.$fire.firestore.batch()
    const guestPostRef = this.$fire.firestore.collection('guestPost').doc(firebasePostId)
    const guestCountRef = this.$fire.firestore.collection('guestCount').doc('count')
    const decrement = this.$fire.firestore.FieldValue.increment(-11)

    batch.delete(guestPostRef)
    batch.update(guestCountRef, { num: decrement })

    batch.commit()
      .then(() => {
        const localPostCount = Number(localStorage.getItem('guest-post-count'))
        const localPostList = JSON.parse(localStorage.getItem('guest-post'))
        localStorage.setItem(localPostCount - 1)
        localStorage.setItem(JSON.stringify([
          ...localPostList.filter(post => post.firebasePostId !== firebasePostId)
        ]))
        context.commit('deleteGuestPost', firebasePostId)
      })
      .catch(err => console.error(err))
  }
}
