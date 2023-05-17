<template>
	<img :src="absoluteSource" :alt="alt" />
</template>
<script>
import Vue from 'vue'

export default Vue.component('CdnImage', {
	props: {
		source: {
			type: String,
			required: true,
		},
		alt: {
			type: String,
			required: true,
		},
	},

	computed: {
		absoluteSource() {
			const cdn = process.env.cdn.replace(/\/$/, '')

			return cdn + this.source
		},
	},
})
</script>