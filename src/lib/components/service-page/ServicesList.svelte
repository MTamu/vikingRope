<script>
	import { AccordionItem, Accordion } from 'flowbite-svelte';

	export let cmsData;
</script>

<section>
	<div class="mt-12 grid grid-cols-2">
		<div>
			<div class="inline-block border-b-8 border-viking-yellow pl-6 uppercase leading-none">
				<h2>{cmsData.title}</h2>
			</div>
			<Accordion multiple flush>
				{#each cmsData.services as service}
					<AccordionItem>
						<span slot="header" class="text-lg font-normal text-black">{service.service_name}</span>
						<p class="mb-2 border-b-2 p-2 text-gray-500">
							{service.service_description}
						</p>
					</AccordionItem>
				{/each}
			</Accordion>
		</div>
		<div />
	</div>
</section>
