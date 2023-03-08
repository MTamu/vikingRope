<script>
	import { renderRichText } from '@storyblok/svelte';
	export let cmsData;

	let quote = cmsData.quote[0];
</script>

<section id="about-us">
	<div class="mx-auto max-w-screen-xl p-3 py-10 md:p-0 md:px-10 md:pb-32">
		<div class="inline-block border-b-8 border-viking-yellow pl-10 uppercase leading-none md:mt-5">
			<h2 class="uppercase">{cmsData.title}</h2>
		</div>
		<div class="flex md:mt-10">
			<div class="mt-5 flex flex-col gap-12 md:mt-0 md:w-2/3">
				<div class=" rounded bg-viking-grey-textBox px-6 py-8 md:px-10 md:py-8">
					{@html renderRichText(cmsData.description)}
				</div>

				{#if quote !== undefined}
					<div class="hidden border-l-xl border-viking-yellow text-center text-xl font-medium md:block ">
						<div class=" ty-5 flex flex-col gap-6 px-10 py-5 pr-20">
							<p>
								{@html renderRichText(quote.description)}
							</p>
							<div class="text-right">{quote.author}</div>
						</div>
					</div>
				{/if}
			</div>
			<div class="hidden md:block">
				<img src="img/human.svg" alt="" />
			</div>
		</div>

		{#if cmsData.feedback.length !== 0}
			<div class=" mt-20 mb-10">
				<div class="mb-10 inline-block border-b-8 border-viking-yellow pl-10 uppercase leading-none">
					<h2>{cmsData.feedback_title}</h2>
				</div>
				<div class="grid auto-cols-fr gap-5 md:grid-flow-col [&>*]:rounded [&>*]:p-5">
					{#each cmsData.feedback as feedback}
						<div class="bg-viking-grey-textBox">
							{@html renderRichText(feedback.feedback_text)}
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</section>

<!-- <style>
	.about-text {
		flex-grow: 2;
	}

	.logo {
		flex-grow: 4;
	}
</style> -->
