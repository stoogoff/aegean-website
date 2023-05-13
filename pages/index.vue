<template>
	<div>
		<section id="logo" class="parallax">
			<img src="/img/home/aegean-logo.png" alt="Aegean" />
		</section>
		<section id="blurb" class="buffer">
			<img :src="books[0].image" :alt="books[0].alt" class="mb-4 md:mb-0" />
			<p><strong class="aegean">Aegean</strong> is a tabletop role-playing game about a group of mythic heroes building a new, free city on the shores of the Aegean Sea. There are neighbouring cities to trade or war with, monsters to kill, gods to appease, deceptions, negotiations and bloody skirmishes.</p>
		</section>
		<section id="figure" class="parallax"></section>
		<section id="system" class="buffer">
			<img src="/img/home/warriors.png" alt="Two warriors facing the enemy" />
			<div>
				<h3>The System</h3>
				<ul>
					<li>Features a simple d10 dice pool system for task resolution.</li>
					<li>Success is always available but there may be a price to pay.</li>
					<li>Characteristics and skills define your character, while talents provide special abilities.</li>
					<li>Glory and Hubris mechanics to measure your character's place in society and value to the gods.</li>
					<li>Downtime events for healing, gathering wealth and influence, and pacifying the gods.</li>
					<li><strong>Coming Soon:</strong> City management rules to govern and guide your home <em>polis</em>.</li>
				</ul>
			</div>
		</section>
		<section id="map" class="parallax"></section>
		<section id="setting" class="buffer">
			<img src="/img/home/kerberos.png" alt="Kerberos resting on a rock" />
			<div>
				<h3>The Setting</h3>
				<ul>
					<li>A combination of Greek myth and archaic history centred around the Aegean Sea.</li>
					<li>The gods are ever present and take an interest in mortal lives.</li>
					<li>Neighbouring city-states vie for power through politics, trade or conflict.</li>
				</ul>
			</div>
		</section>
		<section id="books" class="buffer">
			<div>
				<h3>{{ selectedProduct.title }}</h3>
				<p>{{ selectedProduct.description }}</p>
			</div>
			<div>
				<img :src="selectedProduct.image" :alt="selectedProduct.alt" />

				<div :class="`grid grid-cols-${books.length} gap-2`">
					<img v-for="(book, idx) in books" :key="`book_${idx}`" :src="book.image" :alt="book.alt" @click="selectedBook = idx" />
				</div>
			</div>
		</section>
		<section id="purchase" class="buffer">
			<a href="https://www.drivethrurpg.com/product/359987/WILD-Dream-Dive-Training-Simulation">
				<img src="/img/drivethrurpg.png" alt="DriveThruRPG" />
			</a>
			<a href="https://gamefound.com/projects/stoo/aegean-rpg-mythic-roleplaying-across-the-aegean-sea">
				<img src="/img/gamefound.svg" alt="GameFound" />
			</a>
		</section>
	</div>
</template>
<script>

export default {
	name: 'IndexPage',
	layout: 'home',

	data() {
		return {
			selectedBook: 0,
		}
	},

	computed: {
		books() {
			return [
				{
					title: 'Aegean Core',
					image: '/img/products/aegean-core-cover.jpg',
					alt: 'Aegean Core Cover',
					description: '',
					link: ''
				},
				{
					title: 'Book of Heroes',
					image: '/img/products/book-of-heroes-cover.jpg',
					alt: 'Book of Heroes Cover',
					description: '',
					link: ''
				},
				{
					title: 'Book of Empires',
					image: '/img/products/book-of-empires-cover.jpg',
					alt: 'Book of Empires Cover',
					description: '',
					link: ''
				},
				{
					title: 'Aegean Adventures',
					image: '/img/products/aegean-adventures-cover.jpg',
					alt: 'Aegean Adventures Cover',
					description: '',
					link: ''
				},
			]
		},

		selectedProduct() {
			return this.books[this.selectedBook]
		}
	},
}

</script>
<style scoped>
/* TODO use tailwind */

h3 {
	@apply uppercase text-center mb-2 font-bold;
}

p. li {
	@apply md:text-2xl;
}
li {
	@apply relative pl-4;
}
li:after {
	content: '';
	height: .4em;
	width: .4em;
	background: black;
	display: block;
	position: absolute;
	transform: rotate(45deg);
	top: .4em;
	left: 0;
}

section {
	background-color: rgb(220,220,220);
	@apply p-4 md:p-16;
/*	min-height:  400px;*/
}
.buffer {
	@apply md:grid grid-cols-2 gap-2 md:gap-8;
}
.parallax {
	background-attachment: fixed;
	background-position: center;
	background-size: cover;
	min-height: 100vh;
}
#logo {
	background-color: white;
	display: flex;
	justify-content: center;
}
#logo img {
	display: block;
	width: 90vw;
	margin: auto;
}
#figure {
	background-image: url(/img/home/dice-tray.jpg);
}
#map {
	background-image: url(/img/home/map.jpg);
}
#purchase {
	background-color: blue;
	justify-content: center;
	align-items: center;
}
#purchase img {
	width: 40vw;
	margin: auto;
}

</style>