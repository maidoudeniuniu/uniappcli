import App from './App'
import store from './store'


import Vue from 'vue'


// 引入全局uView
import uView from '@/uview-ui'
Vue.use(uView)


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
	...App
})
app.$mount()

