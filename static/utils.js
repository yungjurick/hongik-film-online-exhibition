const UTILS = {
  getArtistImageEndpoint (id) {
    return (id === '58' || id === '52' || id === '61')
      ? 'empty.png'
      : `${id}.jpg`
  },
  getCdnUrl (directory, endpoint) {
    console.log(location.hostname)
    return location.hostname === 'localhost' || location.hostname === '127.0.0.1'
      ? `https://raw.githubusercontent.com/yungjurick/hongik-film-online-exhibition-cdn/master/${directory}/${endpoint}`
      : `https://rawcdn.githack.com/yungjurick/hongik-film-online-exhibition-cdn/106a30db94d5e8cad69ac77e483dfbe7243b5c62/${directory}/${endpoint}`
  }
}

export default UTILS
