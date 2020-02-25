export default {
  path: '/',
  component: () => import('./App'),
  children: [
    {
      name: 'login',
      path: '/login',
      component: () => import('./pages/Login')
    }
  ]
}
