import { createStore } from 'vuex'
import Academ from '@/store/modules/academ'

export default createStore({
	state: { baseURL: `http://localhost:8001`, },
	getters: {
		BASEURL: state => {
			return state.baseURL;
		}
	},
	mutations: {
		SET_BASEURL(state, payload) {
			state.baseURL = payload;
		}
	},
	actions: {},
	modules: { academ: Academ, },
	plugins: [],
});