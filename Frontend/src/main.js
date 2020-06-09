import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import 第三方套件
import VModal from 'vue-js-modal'

Vue.config.productionTip = false
// 使用'vue-js-modal'這個第三方套件
Vue.use(VModal)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
