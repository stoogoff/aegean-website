<template>
	<article>
		<header>
			<h1>The System</h1>
		</header>
		<section class="hero">
			<p>The core philosophy of <strong class="aegean">Aegean</strong> is the characters are capable heroes who can always succeed at the task at hand. Sometimes there may be a cost involved and it's up to the player to decide how much they're willing to pay for success.</p>
		</section>
		<section>
			<p>The resolution mechanic uses a familiar D10 dice pool. Each die which rolls an <strong>8+</strong> is a success and the more successes you roll the better your achievement. <strong>10's</strong> can add a success or be saved for later and failure can be mitigated by gaining <strong>Risk</strong>.</p>
			<h2 class="meander"><span>Risk, Glory, and Hubris</span></h2>
			<p>Risk measures the danger a character is in. It's a combination of small scrapes and stresses which build up during an adventure. It is gained when a character suffers harm, either physically or emotionally, but can be taken voluntarily to gain successes on a skill check.</p>
			<p>A character's fame throughout the world is represented by <strong>Glory</strong>. It is gained by performing heroic deeds and completing epic quests and can be used to purchase powerful talents. Spending Glory needs to be balanced with the character's Hubris.</p>
			<p><strong>Hubris</strong> is a measure of a character's contempt or disdain for the gods and their place in society. Characters gain Hubris by acting in ways which displease the gods, challenge the gods, or by acting above their station.</p>
			<p>If a character’s Hubris is greater than their Glory then they have angered the gods and are Cursed. The form the gods’ anger takes depends on how much greater their Hubris is but, importantly, the gods are prepared to let a Cursed character die, if such is their fate.</p>
			<p>![Aegean Pages](/media/img/aegean-pages.png)</p>
			<h2 class="meander"><span>Favour and Disfavour</span></h2>
			<p>In <strong class="aegean">Aegean</strong> the gods play an important role beyond the Hubris mechanics. Dieties readily grant their favour and disfavour depending on the PCs actions towards them and their servants. If a PC gains the favour of a diety they can invoke that deity once per session. This allows them to reroll the failed dice on a skill check—as long as the skill is within the domain of the deity. So Artemis could be invoked on a Accuracy skill check but not for Diplomacy.</p>
			<p>A disfavour can be invoked once per session by the player or by the GM. This forces the player to reroll the successful dice on a skill check for a skill within the deity's domain. If the GM invokes the disfavour the player can refuse, but their character immediately gains 1 Hubris for defying the gods.</p>
		</section>
	</article>
</template>
<script>
import { title, meta, url } from '~/utils/meta'

export default {
	name: 'SystemPage',

	head() {
		const metadata = {
			title: 'The System',
			url: '/system',
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