<template>
	<footer class="relative pt-8 pb-6 bg-gray-200">
		<div class="container mx-auto px-4 max-w-screen-lg">
			<div class="flex flex-wrap">
				<div class="w-full lg:w-6/12 px-4 mb-6 lg:mb-0">
					<div class="mt-6">
						<span :key="`elsewhere_${idx}`" v-for="(item, idx) in elsewhere">
							<a
								v-if="item.icon"
								class="bg-white shadow-lg rounded-full outline-none focus:outline-none mr-2 p-3 inline-block hover:bg-gray-800 hover:text-white transition-all duration-500"
								:class="item.colour"
								:href="item.href"
								target="_blank"
							>
								<we-icon-view :icon="item.icon" />
							</a>
							<div v-else>
								<a
									class="hover:text-gray-100 block pb-2"
									:href="item.href"
									target="_blank"
								>
									<img :src="item.image" :alt="item.alt" class="block w-full max-w-xs mt-2" />
								</a>
							</div>
						</span>
					</div>
				</div>
				<div class="w-1/2 lg:w-3/12 px-4">
					<footer-links title="Menu" :links="menu" />
				</div>
			</div>
			<div class="text-sm mt-8">
				<a href="https://we-evolve.co.uk/" class="block">
					<img src="/img/we-evolve-transparent.png" alt="we evolve" class="mb-2 max-w-xs mx-auto" />
				</a>
				<p class="text-center">Copyright &copy; 2018&ndash;{{ (new Date()).getFullYear() }} we-evolve</p>
			</div>
		</div>
	</footer>
</template>
<script>
import Vue from 'vue'
import { menu, sales } from '~/utils/config'

export default Vue.component('FooterSection', {
	computed: {
		elsewhere() {
			return [
				{ icon: 'twitter', href: 'https://twitter.com/stoogoff', colour: 'text-blue-400' },
				{ icon: 'facebook', href: 'https://www.facebook.com/weevolvegames/', colour: 'text-blue-600' },
				{ icon: 'itch', href: 'https://we-evolve.itch.io/', colour: 'text-red-400' },
				...sales,
			]
		},

		menu() {
			return menu
		},
	},
})

</script>