<template>
	<we-main-nav :menu-items="menuItems">Aegean</we-main-nav>
</template>
<script>
import Vue from 'vue'
import { menu } from '~/utils/config'

export default Vue.component('HeaderSection', {
	computed: {
		menuItems() {
			return menu
		},
	},
})

</script>
