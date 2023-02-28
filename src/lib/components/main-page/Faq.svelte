<script>
	import { AccordionItem, Accordion } from 'flowbite-svelte';
	import { renderRichText } from '@storyblok/svelte';

	export let cmsData;

	const qAndA = cmsData.question.map((item) => {
		return { question: item.question, answer: item.answer };
	});
</script>

<section id="faq" class="bg-viking-grey-background">
	<div class="mx-auto max-w-screen-xl p-3 md:px-10 md:pt-20 md:pb-20">
		<div class="mb-6 flex justify-center">
			<div class="mt-5 border-b-8 border-viking-yellow pl-10 text-center uppercase leading-none">
				<h2 class="uppercase">{cmsData.title}</h2>
			</div>
		</div>
		<Accordion flush>
			{#each qAndA as item}
				<AccordionItem>
					<span slot="header" class="text-lg font-normal text-black">
						{@html renderRichText(item.question)}
					</span>
					<p class="mb-2 border-4 border-viking-yellow p-2 text-black">
						{@html renderRichText(item.answer)}
					</p>
				</AccordionItem>
			{/each}
		</Accordion>
	</div>
</section>
