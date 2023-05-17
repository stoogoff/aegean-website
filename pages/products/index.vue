<template>
	<article>
		<header>
			<h1>Products</h1>
		</header>
		<div class="container">
			<section>
				<h2 class="meander"><span>Books</span></h2>
				<div
					v-for="(book, idx) in books"
					:key="`book_${idx}`"
					class="card"
				>
					<div class="w-full md:w-1/3 p-2">
						<cdn-image
							:source="book.image"
							:alt="book.alt"
							class="p-1 border border-black mb-2"
						/>
						<we-link-action
							v-for="(url, text) in book.links"
							:to="url"
							:key="`book_${idx}_link_${text}`"
							block
						>
							{{ text }}
						</we-link-action>
					</div>
					<div class="w-full md:w-2/3 p-2">
						<h3>{{ book.title }}</a></h3>
						<render-markdown :content="book.description" />
					</div>
				</div>
			</section>
			<section>
				<h2 class="meander"><span>Products</span></h2>
				<div class="md:grid grid-cols-3 gap-4">
					<div
						v-for="(product, idx) in products"
						:key="`product_${idx}`"
						class="flex flex-col mb-8 md:mb-0"
					>
						<cdn-image :source="product.image" :alt="product.alt" class="border border-gray-800 mb-4" />
						<h3 class="text-center text-base">{{ product.title }}</h3>
						<render-markdown class="flex-grow" :content="product.description" />
						<we-link-action
							v-for="(url, text) in product.links"
							:to="url"
							:key="`product_${idx}_link_${text}`"
							block
						>
							{{ text }}
						</we-link-action>
					</div>
				</div>
			</section>
		</div>
	</article>
</template>
<script>
import { title, meta, url } from '~/utils/meta'

export default {
	name: 'ProductsIndexPage',

	async fetch() {
		await this.$products.fetch()

		this.books = this.$products.books()
		this.products = this.$products.products()
	},

	data() {
		return {
			books: [],
			products: [],
		}
	},

	head() {
		const metadata = {
			title: 'Products',
			url: '/system',
		}

		return {
			title: title(metadata),
			meta: meta(metadata),
			link: [
				{ hid: 'canonical', rel: 'canonical', href: url(metadata) },
			]
		}
	},
}

</script>