<template>
	<main-nav :menu-items="menuItems" title="Aegean" />
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
