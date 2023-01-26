<script>
	import { each } from 'svelte/internal';
	import Btn from '../elements/Btn.svelte';

	export let cmsData;
</script>

<section class="bg-viking-grey-background md:mt-32">
	<div class="mx-auto max-w-screen-xl p-3 md:p-0 md:px-10 md:pb-32">
		{#each cmsData.service as service}
			<div class="grid auto-cols-fr sm:gap-2 md:grid-flow-col md:gap-10 lg:gap-32">
				<div class="mt-5 order-{Math.abs(+service.order)} md:space-y-5">
					<div class="inline-block border-b-8 border-viking-yellow pl-10 uppercase leading-none">
						<h2>{service.title}</h2>
					</div>
					<p>
						{service.description}
					</p>
					<Btn text={service.btn[0].text} href={service.btn[0].href} />
				</div>
				<div class="md:pt-6 order-{Math.abs(+service.order - 1)}">
					<img class="rounded-sm" src={service.img.filename} alt="" />
				</div>
			</div>
		{/each}
	</div>
</section>
