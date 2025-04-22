import Vue from 'vue'
import { sortByProperty } from 'we-ui/utils/list'

const state = Vue.observable({
	books: [],
	products: [],
	downloads: [],
	fetched: false,
})

export default ({ $axios }) => {
	return {
		books() {
			return state.books.sort(sortByProperty('order'))
		},

		products() {
			return state.products.sort(sortByProperty('order'))
		},

		downloads() {
			return state.downloads.sort(sortByProperty('order'))
		},

		async fetch() {
			if(state.fetched && !process.server) {
				return
			}

			state.books = await $axios.$get('/api/books')
			state.products = await $axios.$get('/api/products')
			state.downloads = await $axios.$get('/api/downloads')
			state.fetched = true
		},
	}
}
