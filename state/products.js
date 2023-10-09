import Vue from 'vue'

const state = Vue.observable({
	books: [],
	products: [],
	downloads: [],
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

		downloads() {
			return state.downloads
		},

		async fetch() {
			if(state.fetched) {
				return
			}

			state.books = await $axios.$get('/api/books')
			state.products = await $axios.$get('/api/products')
			state.downloads = await $axios.$get('/api/downloads')
			state.fetched = true
		},
	}
}
