<script>
	import Accordion from '../elements/Accordion.svelte';

	export let cmsData;

	const qAndA = cmsData.question.map((item) => {
		return { question: item.question, answer: item.answer };
	});
</script>

<section id="faq" class="bg-viking-grey-background">
	<div class="mx-auto max-w-screen-xl p-3 py-10 md:px-10 md:py-20">
		<div class="mb-6 flex">
			<div class="border-b-8 border-viking-yellow pl-10 text-center uppercase leading-none">
				<h2 class="uppercase">{cmsData.title}</h2>
			</div>
		</div>
		<div class="divide-y-2 divide-black">
			{#each qAndA as item}
				<Accordion primaryText={item.question} secondaryText={item.answer} />
			{/each}
		</div>
	</div>
</section>
