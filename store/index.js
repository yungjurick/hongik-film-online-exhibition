import UTILS from 'static/utils.js'

export const state = () => ({
  artistList: [],
  artistWorkList: [],
  worksList: [],
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
  }
}

export const mutations = {
  setArtistList (state, payload) {
    state.artistList = payload
  },
  setArtistWorkList (state, payload) {
    state.artistWorkList = payload
  },
  setWorksList (state, payload) {
    state.worksList = payload
  },
  setModalConfirmOpen (state, payload) {
    state.isModalConfirmOpen = payload
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
  }
}
