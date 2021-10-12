// not authenticated customer are redirected to login page
export default function ({ app, route, redirect }) {
  var cookieName = 'auth'

  if (route.query.jwt && route.query.jwt != '') {
    // set auth cookie
    app.$cookies.set(cookieName, 'Bearer ' + route.query.jwt, {
      path: '/',
      maxAge: 60 * 60 * 2,
      secure: true,
    })

    // remove query parameters from url
    redirect(route.path)

    return
  }

  if (app.$cookies.get(cookieName)) {
    return
  }

  return redirect('/login')
}
