<template>
	<footer class="mt-8 p-8 bg-gray-100">
		<ul class="uppercase text-sm grid grid-cols-4 mb-8">
			<li class="text-center"><nuxt-link to="/">Home</nuxt-link></li>
			<li class="text-center"><nuxt-link to="/setting/">Setting</nuxt-link></li>
			<li class="text-center"><nuxt-link to="/system/">System</nuxt-link></li>
			<li class="text-center"><nuxt-link to="/downloads/">Resources</nuxt-link></li>
		</ul>
		<div class="grid grid-cols-2 gap-4 mb-8">
			<a href="https://www.drivethrurpg.com/product/359987/WILD-Dream-Dive-Training-Simulation">
				<img src="/img/drivethrurpg.png" alt="DriveThruRPG" />
			</a>
			<a href="https://gamefound.com/projects/stoo/aegean-rpg-mythic-roleplaying-across-the-aegean-sea">
				<img src="/img/gamefound.svg" alt="GameFound" />
			</a>
		</div>
		<a class="block mx-auto w-56" href="https://we-evolve.co.uk/">
			<img src="/img/we-evolve-transparent.png" alt="we evolve" />
		</a>
		<p class="text-center my-8">&copy; Copyright 2018&ndash;{{ currentYear }} Stoo Goff</p>
		<div class="max-w-4xl">
			<text-input label="Subscribe" v-model="email" :error="error" :message="message">
				<template #append>
					<span @click="subscribe">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email-outline</title><path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" /></svg>
					</span>
				</template>
			</text-input>
		</div>
	</footer>
</template>
<script>
import Vue from 'vue'
import { validate, required, email } from 'we-ui/utils/validators'

export default Vue.component('FooterSection', {
	data() {
		return {
			email: '',
			error: false,
			message: '',
		}
	},

	computed: {
		rules() {
			return {
				email: [required(), email()],
			}
		},

		currentYear() {
			return (new Date()).getFullYear()
		},
	},

	methods: {
		subscribe() {
			const messages = validate(this.rules.email, this.email)

			if(messages.length > 0) {
				this.error = true
				this.message = messages[0]
			}
			else {
				this.error = false
				this.message = ''
			}

			// TODO send subscriber message
		}
	},
})
</script>