import Vue from 'vue'

const state = Vue.observable({
	books: [],
	products: [],
	fetched: false,
})

export default ({ $axios }) => {
	return {
		books() {
			return state.books
		},

		products() {
			return state.products
		},

		async fetch() {
			if(state.fetched) {
				return
			}

			state.books = await $axios.$get('/api/books')
			state.products = await $axios.$get('/api/products')
			state.fetched = true
		},
	}
}
