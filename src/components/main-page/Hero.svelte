<script>
	import Btn from '../elements/Btn.svelte';
	import { renderRichText } from '@storyblok/svelte';

	export let cmsData;

	console.log(cmsData);

	$: resolvedTitleHtml = renderRichText(cmsData.main_title);
</script>

<section>
	<div class="mx-auto max-w-screen-xl p-3 sm:px-10 sm:pt-10">
		<div class="grid auto-cols-fr sm:gap-2 md:grid-flow-col md:gap-10 lg:gap-32">
			<div class="">
				<div class="border-l-8 border-viking-yellow pl-4 sm:font-medium">
					<div>{cmsData.before_title}</div>
					<h1 class="mt-1 text-left uppercase leading-snug lg:whitespace-nowrap">
						{@html resolvedTitleHtml}
					</h1>
				</div>
				<p class="mt-5 ml-6 hidden font-medium md:block">
					{cmsData.short_description}
				</p>
				<Btn text={'Kontaktai'} href={'/#contacts'} customStyle={'ml-6'} />
			</div>
			<div class="p-10 sm:basis-0 sm:p-10 md:p-0">
				<img src="img/tree.svg" alt="" />
			</div>
		</div>
		<div class="grid auto-cols-fr gap-4 md:mt-20 md:grid-flow-col">
			{#each cmsData.advantages_blocks as block}
				<div class="flex">
					<div class="mr-8 flex-shrink-0">
						{@html block.logo}
					</div>
					<div class="space-y-3">
						<h2>{block.title}</h2>
						<p>{block.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	@media (max-width: 400px) {
		h1 {
			font-size: 1.8em;
		}
	}
</style>
