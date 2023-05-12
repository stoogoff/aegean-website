<template>
	<footer>
		<div>
			<ul>
				<li><nuxt-link to="/">Home</nuxt-link></li>
				<li><nuxt-link to="/setting/">Setting</nuxt-link></li>
				<li><nuxt-link to="/system/">System</nuxt-link></li>
				<li><nuxt-link to="/downloads/">Resources</nuxt-link></li>
			</ul>
			<ul>
				<li><nuxt-link to="/contact/form/">Contact</nuxt-link></li>
				<li><nuxt-link to="/contact/subscribe/">Subscribe</nuxt-link></li>
			</ul>
			<a href="https://twitter.com/stoogoff"><icon-view icon="twitter" /></a>
			<figure>
				<img src="/img/we-evolve-transparent.png" alt="we evolve logo" />
			</figure>
			<p>&copy; Copyright 2018&ndash;{{ (new Date()).getFullYear() }} we evolve</p>
			<ul>
				<li><a href="https://www.drivethrurpg.com/browse/pub/14996/we-evolve/subcategory/32895_40116/Aegean">DriveThruRPG</a></li>
				<li><a href="https://we-evolve.itch.io/">itch.io</a></li>
				<li><a href="https://gamefound.com/projects/stoo/aegean-rpg-mythic-roleplaying-across-the-aegean-sea">GameFound</a></li>
			</ul>
		</div>
	</footer>
</template>
