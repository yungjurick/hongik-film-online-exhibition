const UTILS = {
  getArtistImageEndpoint (id) {
    return (id === '58' || id === '52' || id === '61')
      ? 'empty.png'
      : `${id}.jpg`
  },
  getCdnUrl (directory, endpoint) {
    return location.hostname === 'localhost' || location.hostname === '127.0.0.1'
      ? `https://raw.githubusercontent.com/yungjurick/hongik-film-online-exhibition-cdn/master/${directory}/${endpoint}`
      : `https://rawcdn.githack.com/yungjurick/hongik-film-online-exhibition-cdn/3ed0a0da4ebaebe0d67af89bbd2438c0f301aec8/${directory}/${endpoint}`
  }
}

export default UTILS
