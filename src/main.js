import Vue from 'vue'
import App from './App'
import store from './store'
import bootstrap from '@/core/bootstrap.js'
import '@/router'

// 引入全局uView
import uView from '@/uview-ui'
Vue.use(uView)

import cmRoute from '@/utils/cmRoute.js'
import getVlidate from '@/utils/http.js'


Vue.prototype.$cmRoute = cmRoute
Vue.prototype.$getVlidate = getVlidate

import {
	storeApi,
	mpApi,
	shopApi
} from '@/api'

Vue.prototype.$storeApi = storeApi
Vue.prototype.$mpApi = mpApi
Vue.prototype.$shopApi = shopApi


Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$adpid = "11111111112222"
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}
App.mpType = 'app'



const app = new Vue({
	store,
	...App,
	created: bootstrap
})
app.$mount()

