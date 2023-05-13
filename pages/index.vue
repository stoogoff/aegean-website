<template>
	<div>
		<header-section transparent />
		<section id="logo" class="parallax flex justify-center items-center">
			<img src="/img/home/aegean-logo.png" alt="Aegean" class="block mx-auto" />
		</section>
		<section id="blurb" class="buffer inverse">
			<img src="/img/home/screen-owl.jpg" alt="Stylised owl" class="bordered mb-4 md:mb-0" />
			<div class="flex flex-row justify-center items-center">
				<p class="text-xl md:text-3xl"><strong class="aegean">Aegean</strong> is a tabletop role-playing game about a group of mythic heroes building a new, free city on the shores of the Aegean Sea. There are neighbouring cities to trade or war with, monsters to kill, gods to appease, deceptions, negotiations and bloody skirmishes.</p>
			</div>
		</section>
		<section id="figure" class="parallax"></section>
		<section id="system" class="buffer">
			<img src="/img/home/warriors.png" alt="Two warriors facing the enemy" />
			<div>
				<h2>The System</h2>
				<ul class="list mb-4">
					<li>Features a simple d10 dice pool system for task resolution.</li>
					<li>Success is always available but there may be a price to pay.</li>
					<li>Characteristics and skills define your character, while talents provide special abilities.</li>
					<li>Glory and Hubris mechanics to measure your character's place in society and value to the gods.</li>
					<li>Downtime events for healing, gathering wealth and influence, and pacifying the gods.</li>
					<li>City management rules to govern and guide your home <em>polis</em>.</li>
				</ul>
				<link-action to="/system" block>System</link-action>
			</div>
		</section>
		<section id="map" class="parallax"></section>
		<section id="setting" class="buffer">
			<div class="mb-4">
				<h2>The Setting</h2>
				<ul class="list mb-4">
					<li>A combination of Greek myth and archaic history centred around the Aegean Sea.</li>
					<li>The gods are ever present and take an interest in mortal lives.</li>
					<li>Neighbouring city-states vie for power through politics, trade or conflict.</li>
				</ul>
				<link-action to="/setting" block>Setting</link-action>
			</div>
			<img class="my-4" src="/img/home/kerberos.png" alt="Kerberos resting on a rock" />
		</section>
		<section id="books" class="buffer inverse" v-if="selectedProduct">
			<div>
				<div class="grid gap-2 mb-4 grid-cols-4">
					<div
						v-for="(book, idx) in books"
						:key="`book_${idx}`"
						class="border-2 overflow-hidden relative"
						:class="{
							'border-white': selectedBook === idx,
							'border-gray-700': selectedBook !== idx,
						}"
						style="padding-top:100%"
					>
						<img
							class="absolute inset-0"		
							:src="book.image"
							:alt="book.alt"
							@click="selectedBook = idx"
						/>
					</div>
				</div>
				<img :src="selectedProduct.image" :alt="selectedProduct.alt" class="bordered hidden md:block" />
			</div>
			<div>
				<h2>{{ selectedProduct.title }}</h2>
				<render-markdown :content="selectedProduct.description" />
			</div>
		</section>
		<section id="purchase" class="buffer">
			<a
				v-for="(sale, idx) in sales"
				:key="`sale_${idx}`"
				:href="sale.href"
				class="block text-center text-2xl md:text-3xl p-4 md:p-0 underline hover:no-underline text-blue-500"
			>
				{{ sale.title }}
			</a>
		</section>
		<footer-section />
	</div>
</template>
<script>
import { sales } from '~/utils/config'

export default {
	name: 'IndexPage',
	layout: 'home',

	async fetch() {
		await this.$products.fetch()

		this.books = this.$products.books()
	},

	data() {
		return {
			books: [],
			selectedBook: 0,
		}
	},

	computed: {
		sales() {
			return sales
		},

		selectedProduct() {
			return this.books[this.selectedBook] || false
		}
	},
}

</script>
<style>

.buffer h2 {
	@apply uppercase text-center mb-2 md:mb-4 font-bold md:text-3xl;
}
.buffer li, .prose p, .prose li {
	@apply md:text-2xl;
}
.prose ul {
	@apply mb-4;
}
ul.list li, .prose ul li {
	@apply relative pl-6 md:mb-2;
}
ul.list li:after, .prose ul li:after {
	@apply block absolute bg-black;
	content: '';
	height: .4em;
	width: .4em;
	transform: rotate(45deg);
	top: .4em;
	left: 0;
}
.inverse ul.list li:after, .inverse .prose ul li:after {
	@apply bg-gray-50;
}
.bordered {
	@apply border border-gray-100;
}

.buffer, .parallax {
	@apply p-4 md:p-16;
}
.buffer {
	@apply md:grid grid-cols-2 gap-2 md:gap-8;
}
.parallax {
	@apply bg-fixed bg-center bg-cover min-h-screen;
}
.inverse {
	@apply bg-black text-gray-50;
}
#logo img {
	width: 90vw;
}
#figure {
	background-image: url(/img/home/dice-tray.jpg);
}
#map {
	background-image: url(/img/home/map.jpg);
}

</style>