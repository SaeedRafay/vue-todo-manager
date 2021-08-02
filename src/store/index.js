// entry point for VueJS and where combine all modules

import Vuex from 'vuex'
import Vue from 'vue'
import todos from './modules/todos'

// load Vuex
Vue.use(Vuex)

// Create store
export default new Vuex.Store({
	modules: {
		todos
	}
})
