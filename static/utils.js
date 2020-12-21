const UTILS = {
  getArtistImageEndpoint (id) {
    return (id === '58' || id === '52' || id === '61')
      ? 'empty.png'
      : `${id}.jpg`
  },
  getCdnUrl (directory, endpoint) {
    return location.hostname === 'localhost' || location.hostname === '127.0.0.1'
      ? `https://raw.githubusercontent.com/yungjurick/hongik-film-online-exhibition-cdn/master/${directory}/${endpoint}`
      : ''
  }
}

export default UTILS
