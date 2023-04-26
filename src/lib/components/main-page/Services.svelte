<script>
	import Btn from '../elements/Btn.svelte';

	export let cmsData;
</script>

<section class="bg-viking-grey-background">
	<div class="mx-auto max-w-screen-xl flex-col p-3 py-10 md:flex md:gap-16 md:p-0 md:px-10 md:py-20">
		{#each cmsData.service as service}
			<div class="grid auto-cols-fr sm:gap-2 md:grid-flow-col md:gap-10 lg:gap-32">
				<div class=" md:order-2 md:space-y-5">
					<div class="inline-block border-b-8 border-viking-yellow pl-10 uppercase leading-none">
						<h2>{service.title}</h2>
					</div>
					<p class="mt-6">
						{service.description}
					</p>
					<div class="hidden md:block">
						<Btn text={service.btn[0].text} href={service.btn[0].href} />
					</div>
				</div>
				<div class="md:order-{Math.abs(service.order)} mt-10 md:mt-0">
					<img class="rounded-sm" src="{service.img.filename}/m/filters:quality(50)" alt="" loading="lazy" />
				</div>
				<div class="mt-10 mb-10 flex justify-center md:hidden">
					<Btn text={service.btn[0].text} href={service.btn[0].href} />
				</div>
			</div>
		{/each}
	</div>
</section>
