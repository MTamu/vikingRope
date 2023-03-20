<script>
	import Contacts from '$components/Contacts.svelte';
	import ServicesList from '$components/service-page/ServicesList.svelte';
	import WorkSamples from '$components/service-page/WorkSamples.svelte';
	import { renderRichText } from '@storyblok/svelte';

	export let data;

	$: descriptionText = renderRichText(data.story.hero_section.service_description);
</script>

<section class="pt-20">
	<div class="mx-auto max-w-screen-xl p-3 sm:px-10 md:pb-20 lg:pt-10">
		<div class="mb-6">
			<div class="inline-block border-b-8 border-viking-yellow pl-2 leading-none md:pl-10">
				<h1 class="uppercase">{data.story.hero_section.title}</h1>
			</div>
		</div>
		<div class="grid auto-cols-fr sm:gap-2 md:grid-flow-col md:gap-10 lg:gap-32">
			<div>
				<div class="mt-10 md:mt-0">
					{@html descriptionText}
				</div>
			</div>
			<div>
				<img
					class="h-auto w-full rounded-sm"
					src="{data.story.hero_section.img.filename}/m/filters:quality(50)"
					alt="Arborist"
				/>
			</div>
		</div>

		<ServicesList cmsData={data.story.services_list} />
	</div>
	<Contacts cmsData={data.contactsData} bgColor={'bg-viking-grey-background'} />
	{#if data.story.sample_list.samples.length !== 0}
		<WorkSamples cmsData={data.story.sample_list} />
	{/if}
</section>
