export default {
  path: '/',
  component: () => import('./App'),
  children: [
    {
      name: 'index.login',
      path: '/',
      meta: { auth: true },
      component: () => import('./pages/MainLayout')
    }
  ]
}
