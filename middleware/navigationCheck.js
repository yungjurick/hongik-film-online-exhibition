import data from 'static/data'

export default function ({ store }) {
  store.app.router.beforeEach((to, from, next) => {
    if (to.name === 'flashback') {
      // const now = this.$moment(new Date(), timeFormat)
      const timeFormat = 'YYYYMMDD HH:mm:ss'
      const now = store.app.$moment(new Date('2021-01-08T20:00:00'), timeFormat)
      const nowDate = now.format('YYYYMMDD')
      const nowTime = now.format('HH:mm:ss')

      const [after, before] = data.flashbackOpenTime[nowDate]
      const isAvailable = nowTime >= after && nowTime <= before

      if (isAvailable) {
        next()
      } else {
        store.commit('setOverlayStatus', true)
        store.app.router.push('/2020')
      }
    } else {
      next()
    }
  })
}
