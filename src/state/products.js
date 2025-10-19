import Vue from 'vue'
import { sortByProperty } from 'we-ui/utils/list'
import { getAllDocsByType } from '~/utils/couch'

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

			state.books = await getAllDocsByType($axios, 'book')
			state.products = await getAllDocsByType($axios, 'product')
			state.downloads = await getAllDocsByType($axios, 'download')
			state.fetched = true
		},
	}
}
