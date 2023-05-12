<template>
	<article>
		<header>
			<h1>The Setting</h1>
		</header>
		<section class="hero">
			<p>Hellas is the Greece of ancient mythology and classical history. The gods visit the earth and converse with mortals, granting gifts of magic and life to some and fear and terror to others. Fearsome monsters roam the lands and seas making every journey an adventure. Strange creatures, some mortal, others half-divine, can be found in the wilderness. These centaurs, nymphs and tritons teach, harass or ignore humans as their whim takes them.</p>
		</section>
		<section>
			<p>The polis—the city and its surrounding lands—is your home and where your loyalties lie. Your polis is a recently founded colony on the coasts of the Aegean Sea. The leader is called an <em>arkhon</em>, a democratically elected ruler after the Athenian fashion, rather than the hereditary king that many cities still use. The polis sits in a precarious position, between many similar neighbouring states who may wish to trade, ally or make war.</p>
			<p>Your character fits somewhere in this world, between the capricious force of the gods, the wilderness and the structure of the polis and its ambitions.</p>
			<h2>When in Tartarus is this?</h2>
			<p><strong class="aegean">Aegean</strong> is set in a mythological Greece after the time of Perseus, Kadmus and Bellerophon. Stheno and Euryale mourn the loss of their sister, the dragon is dead and Thebes is founded,  while all fear the might of Zeus. Herakles is a young man performing labours to appease Hera. Troy is a power in the east, Kreta in the south, Atalanta has yet to kill the boar of Kalydon while Jason is thinking of taking a voyage. This puts <strong class="aegean">Aegean</strong> in the region of 1,500–1,000BC, before the fall of Troy and the Greek dark age.</p>
			<p><strong class="aegean">Aegean</strong> is also set in Classical Greece where Sparta is a military power and Athens a beacon of democracy. The different tribes and regions of Hellas are beginning to unify while sending forth colonists to found new cities and spread their culture and religion amongst their neighbours. Philosophy, sculpture, art and democracy are at their height. This puts <strong class="aegean">Aegean</strong> in the region of 500–400BC, the time of the reforms of Kleisthenes, the Delian League and the Persian Wars.</p>
			<p><strong class="aegean">Aegean</strong> is a combination of the interesting parts of both those periods.</p>
		</section>
	</article>
</template>
<script>
import { title, meta, url } from '~/utils/meta'

export default {
	name: 'SettingPage',

	head() {
		const metadata = {
			title: 'The Setting',
			url: '/setting',
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