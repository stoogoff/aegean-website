<template>
	<article>
		<header>
			<h1>Resources</h1>
		</header>
		<div class="container">
			<section class="hero">
				<p>Below are downloads for the resources you need for running the game, including the old pre-generated characters for the original <strong class="aegean">Aegean</strong> <em>Quick Start</em>.</p>
			</section>
			<section>
				<div
					v-for="(download, idx) in downloads"
					:key="`download_${idx}`"
					class="card"
				>
					<h3 class="md:hidden text-center"><a :href="cdn(download.href)">{{ download.title }}</a></h3>
					<div class="w-full md:w-1/4 p-2">
						<a :href="cdn(download.href)">
							<cdn-image
								:source="download.image"
								:alt="download.title"
								class="p-1 border border-black"
							/>
						</a>
					</div>
					<div class="w-full md:w-3/4 p-2">
						<h3 class="hidden md:block"><a :href="cdn(download.href)">{{ download.title }}</a></h3>
						<p><a :href="cdn(download.href)">{{ download.description }}</a></p>
						<dl class="text-sm flex flex-wrap">
							<dd class="uppercase font-bold w-1/4 md:w-1/6">Size:</dd><dt class="w-3/4 md:w-5/6">{{ download.size }}</dt>
							<dd class="uppercase font-bold w-1/4 md:w-1/6">Format:</dd><dt class="w-3/4 md:w-5/6">{{ download.format }}</dt>
						</dl>
					</div>
				</div>
			</section>
		</div>
	</article>
</template>
<script>
import { title, meta, url } from '~/utils/meta'
//import { downloads } from '~/utils/config'

export default {
	name: 'ResourcesPage',

	async fetch() {
		await this.$products.fetch()

		this.downloads = this.$products.downloads()
	},

	data() {
		return {
			downloads: [],
		}
	},

	methods: {
		cdn(path) {
			const cdn = new URL(process.env.cdn)

			cdn.pathname = path

			return cdn.toString()
		},
	},

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
