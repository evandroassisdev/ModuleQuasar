import Vue from 'vue'
import axios from 'axios'
import server from '@server'

axios.defaults.baseURL = server.api.Host()

Vue.prototype.$axios = axios
