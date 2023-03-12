<script>
	import Btn from '../elements/Btn.svelte';
	import { renderRichText } from '@storyblok/svelte';

	export let cmsData;

	const btn = cmsData.button[0];

	$: resolvedTitleHtml = renderRichText(cmsData.main_title);
</script>

<section class=" pt-16 sm:pt-28">
	<div class="md mx-auto max-w-screen-xl p-3 pb-16 md:pb-28 lg:px-10 lg:pt-10">
		<div class="grid auto-cols-fr sm:gap-2 md:grid-flow-col md:gap-10 lg:gap-32">
			<div class="">
				<div class="border-l-8 border-viking-yellow pl-4 sm:font-medium">
					<div>{cmsData.before_title}</div>
					<h1 class="mt-1 text-left leading-snug lg:whitespace-nowrap">
						{@html resolvedTitleHtml}
					</h1>
				</div>
				<p class="mt-5 ml-6 hidden font-medium md:block">
					{cmsData.short_description}
				</p>
				<div class="hidden md:block">
					<Btn text={btn.text} href={'/#contacts'} customStyle={'ml-6'} />
				</div>
			</div>
			<div class="p-10 sm:basis-0 sm:p-10 md:p-0">
				<img src="img/tree.svg" alt="" />
			</div>
			<div class="flex justify-center md:hidden">
				<a class="rounded bg-viking-yellow p-2 font-medium tracking-wider" href="tel:+37065482654">+37065482654</a>
			</div>
		</div>
		<div class=" mt-32 grid auto-cols-fr gap-10 md:mt-20 md:grid-flow-col md:gap-4">
			{#each cmsData.advantages_blocks as block}
				<div class="flex">
					<div class="mr-3 mt-1 flex-shrink-0">
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
