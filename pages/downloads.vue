<template>
	<article>
		<header>
			<h1>Resources</h1>
		</header>
		<section class="hero">

		</section>
			Character sheet, city sheet, map(s)
			Pre-gen characters - these will need redoing in the new sheet
		</section>
	</article>
</template>
<script>
import { title, meta, url } from '~/utils/meta'

export default {
	name: 'SystemPage',

	head() {
		const metadata = {
			title: 'Resources',
			url: '/downloads',
		}

		return {
			title: title(metadata),
			meta: meta(metadata),
			link: [
				{ hid: 'canonical', rel: 'canonical', href: url(metadata) },
			]
		}
	},
}

</script>