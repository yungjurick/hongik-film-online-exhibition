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
      : `https://rawcdn.githack.com/yungjurick/hongik-film-online-exhibition-cdn/4200eeab98195daf55d2add43e345d48278395e7/${directory}/${endpoint}`
  }
}

export default UTILS
