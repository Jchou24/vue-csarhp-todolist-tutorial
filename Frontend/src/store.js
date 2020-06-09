import Vue from 'vue'
import Vuex from 'vuex'

import localBoard from './store/localBoard.js'
import remoteBoard from './store/remoteBoard.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        localBoard,
        remoteBoard,
    }
})
