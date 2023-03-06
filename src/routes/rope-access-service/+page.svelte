<script>
	import Contacts from '$components/Contacts.svelte';
	import ServicesList from '$components/service-page/ServicesList.svelte';
	import WorkSamples from '$components/service-page/WorkSamples.svelte';
	import { renderRichText } from '@storyblok/svelte';

	export let data;

	$: descriptionText = renderRichText(data.story.hero_section.service_description);
</script>

<section class=" pt-28">
	<div class="mx-auto max-w-screen-xl p-3 sm:px-10 sm:pt-10">
		<div class="mb-6 flex justify-center">
			<div class="inline-block border-b-8 border-viking-yellow pl-10 leading-none">
				<h1 class="uppercase">{data.story.hero_section.title}</h1>
			</div>
		</div>

		<div>
			{@html descriptionText}
		</div>
		<ServicesList cmsData={data.story.services_list} />
	</div>
	<Contacts cmsData={data.contactsData} bgColor={'bg-viking-grey-background'} />
	{#if data.story.sample_list.samples.length !== 0}
		<WorkSamples cmsData={data.story.sample_list} />
	{/if}
</section>
