import { CInput, CMenu } from 'assistme.component'

export default ({ Vue }) => {
  // Vue.prototype.$message = CAlert
  // Vue.prototype.$functions = Functions
  Vue.component('CInput', CInput)
  Vue.component('CMenu', CMenu)
}
