import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import * as state from './state'
import * as actions from './actions'
import * as mutations from './mutations'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules,
    state,
    actions,
    mutations,
    strict: process.env.DEV
  })

  return Store
}
