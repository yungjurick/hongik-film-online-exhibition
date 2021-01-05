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
      : `https://rawcdn.githack.com/yungjurick/hongik-film-online-exhibition-cdn/551306bcf81670bcee48be7ffe59843361fbdbc1/${directory}/${endpoint}`
  }
}

export default UTILS
