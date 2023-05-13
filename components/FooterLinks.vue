<template>
	<div class="px-4 ml-auto">
		<h5 class="block uppercase text-sm font-semibold mb-2">{{ title }}</h5>
		<ul>
			<li
				:key="`footer_menu_${idx}`"
				v-for="(item, idx) in links"
			>
				<nuxt-link
					class="hover:text-gray-600 inline-block pb-2 text-sm"
					:to="item.href"
					>
						{{ item.title }}
				</nuxt-link>
			</li>
		</ul>
	</div>
</template>
<script>
import Vue from 'vue'

export default Vue.component('FooterLinks', {
	props: {
		links: {
			type: Array,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
	},
})

</script>