<template>
	<div>
		<section id="logo" class="parallax flex justify-center items-center">
			<cdn-image source="/img/home/aegean-logo.png" alt="Aegean" class="block mx-auto" />
		</section>
		<section id="pelops" class="buffer">
			<div>
				<h2>The Isle of Pelops</h2>
				<p class="text-xl md:text-3xl"><strong class="aegean">COMING SOON!</strong> A new setting guide for the <strong class="aegean">Aegean</strong> role-playing game. <em>The Isle of Pelops</em> will describe the mythology and history of the Peloponnese as well as provide details of important people and locations, including the citadel of Mykenai and Sparta. New options are provided for players and GMs alike, including new backgrounds, Mystery Cults, adversaries, and more!</p>
			</div>
			<cdn-image
				source="/img/products/isle-of-pelops-cover.jpg"
				alt="The Isle of Pelops Cover"
				class="bordered md:mx-8 mb-4 md:mb-0"
			/>
		</section>
		<section id="blurb" class="buffer inverse">
			<cdn-image source="/img/home/screen-owl.jpg" alt="Stylised owl" class="bordered mb-4 md:mb-0" />
			<div class="flex flex-row justify-center items-center">
				<p class="text-xl md:text-3xl"><strong class="aegean">Aegean</strong> is a tabletop role-playing game about a group of mythic heroes building a new, free city on the shores of the Aegean Sea. There are neighbouring cities to trade or war with, monsters to kill, gods to appease, deceptions, negotiations and bloody skirmishes.</p>
			</div>
		</section>
		<section id="figure" class="parallax" :style="`background-image: url(${backgroundImage('/img/home/dice-tray.jpg')})`"></section>
		<section id="system" class="buffer">
			<cdn-image source="/img/home/warriors.png" alt="Two warriors facing the enemy" />
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
				<we-link-action to="/system" block>System</we-link-action>
			</div>
		</section>
		<section id="map" class="parallax" :style="`background-image: url(${backgroundImage('/img/home/map.jpg')})`"></section>
		<section id="setting" class="buffer">
			<div class="mb-4">
				<h2>The Setting</h2>
				<ul class="list mb-4">
					<li>A combination of Greek myth and archaic history centred around the Aegean Sea.</li>
					<li>The gods are ever present and take an interest in mortal lives.</li>
					<li>Neighbouring city-states vie for power through politics, trade or conflict.</li>
				</ul>
				<we-link-action to="/setting" block>Setting</we-link-action>
			</div>
			<cdn-image class="my-4" source="/img/home/kerberos.png" alt="Kerberos resting on a rock" />
		</section>
		<section id="books" class="buffer inverse" v-if="selectedProduct">
			<div>
				<div class="grid gap-2 mb-4 grid-cols-4">
					<div
						v-for="(book, idx) in books"
						:key="`book_${idx}`"
						class="border-2 overflow-hidden relative cursor-pointer"
						:class="{
							'border-white': selectedBook === idx,
							'border-gray-700': selectedBook !== idx,
						}"
						style="padding-top:100%"
						@click="selectedBook = idx"
					>
						<cdn-image
							class="absolute inset-0"		
							:source="book.image"
							:alt="book.alt"
						/>
					</div>
				</div>
				<cdn-image :source="selectedProduct.image" :alt="selectedProduct.alt" class="bordered hidden md:block" />
			</div>
			<div>
				<h2>{{ selectedProduct.title }}</h2>
				<render-markdown :content="selectedProduct.description" />
			</div>
		</section>
		<section id="purchase">
			<a
				v-for="(sale, idx) in sales"
				:key="`sale_${idx}`"
				:href="sale.href"
				class="block text-center text-2xl md:text-3xl p-4 md:p-0 underline hover:no-underline text-blue-500"
			>
				{{ sale.title }}
			</a>
		</section>
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

	methods: {
		backgroundImage(image) {
			const cdn = new URL(process.env.cdn)

			cdn.pathname = image

			return cdn.toString()
		},
	},
}

</script>
<style scoped>

.buffer h2 {
	@apply uppercase text-center mb-2 md:mb-4 font-bold md:text-3xl;
}
.buffer li, .prose p, .prose li {
	@apply md:text-2xl;
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
#pelops {
	background-color: rgb(89,92,67);
	color: rgb(252,251,232);
}
#purchase {
	@apply text-center p-2 md:p-12;
}
</style>