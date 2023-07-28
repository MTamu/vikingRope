<script>
	import FaqList from '../elements/Accordion.svelte';

	export let cmsData;
</script>

<section>
	<div class="mt-16 grid sm:mt-24 md:mt-20 md:grid-cols-2">
		<div>
			<div class="inline-block border-b-8 border-viking-yellow pl-6 uppercase leading-none">
				<h2>{cmsData.title}</h2>
			</div>
			<div class="mt-10 divide-y-2 divide-black">
				{#each cmsData.services as service}
					<FaqList primaryText={service.service_name} secondaryText={service.service_description} />
				{/each}
			</div>
		</div>
		<div />
	</div>
</section>
