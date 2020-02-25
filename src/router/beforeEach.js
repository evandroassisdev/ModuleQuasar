// import store from '@root/store'

export default (to, from, next) => {
  var auth = true
  if (to.matched.some(record => record.meta.auth)) {
    if (!auth) {
      next('/login')
    } else {
      next()
    }
  } else if (!auth) {
    next()
  } else {
    next('/')
  }
}
