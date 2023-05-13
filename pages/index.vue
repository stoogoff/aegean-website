<template>
	<div>
		<section id="logo" class="parallax flex justify-center items-center">
			<img src="/img/home/aegean-logo.png" alt="Aegean" class="block mx-auto" />
		</section>
		<section id="blurb" class="buffer inverse">
			<img src="/img/products/aegean-core-cover.jpg" alt="Aegean Core Cover" class="bordered mb-4 md:mb-0" />
			<p><strong class="aegean">Aegean</strong> is a tabletop role-playing game about a group of mythic heroes building a new, free city on the shores of the Aegean Sea. There are neighbouring cities to trade or war with, monsters to kill, gods to appease, deceptions, negotiations and bloody skirmishes.</p>
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
			<img src="/img/home/kerberos.png" alt="Kerberos resting on a rock" />
		</section>
		<section id="books" class="buffer inverse" v-if="selectedProduct">
			<div>
				<div class="grid gap-2 mb-4" :class="`grid-cols-${books.length}`">
					<div v-for="(book, idx) in books" :key="`book_${idx}`" class="bordered overflow-hidden relative" style="padding-top:100%">
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
		<section id="purchase" class="buffer justify-center items-center">
			<a v-for="(sale, idx) in sales" :key="`sale_${idx}`" :href="sale.link">
				<img :src="sale.image" :alt="sale.alt" class="mx-auto" />
			</a>
		</section>
		<footer class="mt-8 p-8 bg-gray-100 text-base">
			<ul class="uppercase text-sm grid grid-cols-4 mb-8">
				<li class="text-center"><nuxt-link to="/setting">Setting</nuxt-link></li>
				<li class="text-center"><nuxt-link to="/system">System</nuxt-link></li>
				<li class="text-center"><nuxt-link to="/products">Products</nuxt-link></li>
				<li class="text-center"><nuxt-link to="/downloads">Resources</nuxt-link></li>
			</ul>
			<a class="block mx-auto w-56" href="https://we-evolve.co.uk/">
				<img src="/img/we-evolve-transparent.png" alt="we evolve" />
			</a>
			<p class="text-center my-8">&copy; Copyright 2018&ndash;{{ currentYear }} Stoo Goff</p>
		</footer>
	</div>
</template>
<script>

export default {
	name: 'IndexPage',
	layout: 'home',

	async fetch() {
		this.books = await this.$axios.$get('/api/books')
	},

	data() {
		return {
			books: [],
			selectedBook: 0,
		}
	},

	computed: {
		currentYear() {
			return (new Date()).getFullYear()
		},

		sales() {
			return [
				{
					image: '/img/drivethrurpg.png',
					link: 'https://www.drivethrurpg.com/browse/pub/14996/we-evolve/subcategory/32895_40116/Aegean',
					alt: 'DriveThruRPG',
				},
				{
					image: '/img/gamefound.svg',
					link: 'https://gamefound.com/projects/stoo/aegean-rpg-mythic-roleplaying-across-the-aegean-sea',
					alt: 'GameFound',
				},
			]
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
.buffer p, .buffer li, .prose p, .prose li {
	@apply md:text-2xl;
}
.prose ul {
	@apply mb-4;
}
ul.list li, .prose ul li {
	@apply relative pl-4 md:mb-2;
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

section {
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
#purchase img {
	width: 40vw;
}

</style>