import Vue from 'vue'

const state = Vue.observable({
	books: [],
	fetched: false,
})

export default ({ $axios }) => {
	return {
		books() {
			return state.books
		},

		async fetch() {
			if(state.fetched) {
				return
			}

			state.books = await $axios.$get('/api/books')
			state.fetched = true
		},
	}
}
