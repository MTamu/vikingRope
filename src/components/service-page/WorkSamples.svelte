<script>
	import Btn from '../elements/Btn.svelte';

	export let cmsData;
	console.log('🚀 ~ file: WorkSamples.svelte:5 ~ cmsData', cmsData);
</script>

<section class=" md:mt-12">
	<div class="mb-6 flex justify-center">
		<div class="inline-block border-b-8 border-viking-yellow pl-10 leading-none">
			<h2 class="uppercase">Darbų pavyzdžiai</h2>
		</div>
	</div>
	<div class="mx-auto max-w-screen-xl p-3 md:p-0 md:px-10 md:pb-32">
		<div class="grid auto-cols-fr sm:gap-2 md:grid-flow-col md:gap-10 lg:gap-32">
			<div class="order-2 mt-5 md:space-y-5">
				<div class="font-medium">
					<p>Ženklo kabinimas, Širvintų rajone</p>
				</div>
				<div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nobis deleniti. Provident exercitationem
						saepe mollitia debitis voluptatum rerum, nesciunt ducimus.
					</p>
				</div>
				<div class="font-medium">
					<p>Darbo atlikimo laikas: neatliktas</p>
					<p>Darbu kaina: neišsimokėjo</p>
				</div>
			</div>
			<div class="order-1 md:pt-6">
				<img class="rounded-sm" src="/img/minde.jpg" alt="" />
			</div>
		</div>
		<div class="grid auto-cols-fr sm:gap-2 md:mt-32 md:grid-flow-col md:gap-10 lg:gap-32">
			<div class="order-1 md:space-y-5">
				<div class="font-medium">
					<p>Ženklo kabinimas, Širvintų rajone</p>
				</div>
				<div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nobis deleniti. Provident exercitationem
						saepe mollitia debitis voluptatum rerum, nesciunt ducimus.
					</p>
				</div>
				<div class="font-medium">
					<p>Darbo atlikimo laikas: neatliktas</p>
					<p>Darbu kaina: neišsimokėjo</p>
				</div>
			</div>
			<div class="order-2 md:pt-5">
				<img class="rounded-sm" src="/img/mauris.jpg" alt="" />
			</div>
		</div>
		<div class="mt-10 flex justify-center">
			<Btn text={'Daugiau'} />
		</div>
	</div>
</section>
