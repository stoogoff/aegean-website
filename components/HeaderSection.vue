<template>
	<main-nav :menu-items="menuItems" title="Aegean" />
</template>
<script>
import Vue from 'vue'

export default Vue.component('HeaderSection', {
	computed: {
		menuItems() {
			return [
				{ title: 'Home', href: '/' },
				{ title: 'Setting', href: '/setting' },
				{ title: 'System', href: '/system' },
				{ title: 'Gameplay', href: '/example' },
				{ title: 'Resources', href: '/downloads' },
				{ title: 'Contact', href: '/contact' },


				/*{
					title: 'Form',
					href: '/form',
					icon: 'eye',
					menuItems: [
						{ title: 'Control', href: '/tarot/control' },
						{ title: 'Focus', href: '/tarot/focus' },
						{ title: 'Passion', href: '/tarot/passion' },
						{ title: 'Strength', href: '/tarot/strength' },
						{ title: 'Major Arcana', href: '/tarot/major-arcana' },
					]
				},*/
			]
		},
	},
})

</script>
