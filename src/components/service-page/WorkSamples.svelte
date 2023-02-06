<script>
	import Btn from '../elements/Btn.svelte';
	import { renderRichText } from '@storyblok/svelte';

	export let cmsData;

	const samples = cmsData.samples;
	const itemsToLoad = 2;

	let loadCount = itemsToLoad;

	const handleLoad = () => {
		loadCount += itemsToLoad;
	};

	const closeSamples = () => {
		loadCount = itemsToLoad;
	};

	const getDisplayOrder = (index) => {
		return index % 2 ? [1, 2] : [2, 1];
	};
</script>

<section class=" md:mt-12">
	<div class="mb-6 flex justify-center">
		<div class="inline-block border-b-8 border-viking-yellow pl-10 leading-none">
			<h2 class="uppercase">{cmsData.title}</h2>
		</div>
	</div>
	<div class="mx-auto max-w-screen-xl p-3 md:p-0 md:px-10 md:pb-32">
		{#each samples.slice(0, loadCount) as sample, index}
			<div class="grid auto-cols-fr sm:gap-2 md:grid-flow-col md:gap-10 lg:gap-32">
				<div class="order-{getDisplayOrder(index)[0]} mt-5 md:space-y-5">
					{@html renderRichText(sample.sample_description)}
				</div>
				<div class="order-{getDisplayOrder(index)[1]} md:pt-6">
					<img class="rounded-sm" src="{sample.sample_img[0].filename}/m/filters:quality(50)" alt="" />
				</div>
			</div>
		{/each}

		{#if loadCount < samples.length}
			<div class="mt-10 flex justify-center">
				<button
					on:click={handleLoad}
					class="inline-block rounded border-2 border-viking-yellow py-2 px-4 font-medium hover:bg-viking-yellow hover:no-underline sm:mt-8 md:mt-16"
					>{cmsData.btn_text}</button
				>
			</div>
		{:else if samples.length > itemsToLoad && loadCount >= samples.length}
			<div class="mt-10 flex justify-center">
				<button
					on:click={closeSamples}
					class="inline-block rounded border-2 border-viking-yellow py-2 px-8 font-medium hover:bg-viking-yellow hover:no-underline sm:mt-8 md:mt-16"
				>
					<img src="img/close.svg" alt="" /></button
				>
			</div>
		{/if}
	</div>
</section>
