<script>
	import Btn from '../elements/Btn.svelte';

	export let data;
</script>

<section class="bg-viking-grey-background md:mt-32">
	<div class="mx-auto max-w-screen-xl p-3 md:p-0 md:px-10 md:pb-32">
		<div class="grid auto-cols-fr sm:gap-2 md:grid-flow-col md:gap-10 lg:gap-32">
			<div class="mt-5 md:space-y-5">
				<div class="inline-block border-b-8 border-viking-yellow pl-10 uppercase leading-none">
					<h2 class="uppercase">Aukštuminiai darbai</h2>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nobis deleniti. Provident exercitationem
					saepe mollitia debitis voluptatum rerum, nesciunt ducimus. <br /><br />

					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam impedit aliquam laudantium cumque vitae
					ipsum modi eaque eos necessitatibus obcaecati.
				</p>
				<Btn text={'Daugiau'} href="/rope-access-service" />
			</div>
			<div class="md:pt-6">
				<img class="rounded-sm" src="/img/minde.jpg" alt="" />
			</div>
		</div>
		<div class="grid auto-cols-fr sm:gap-2 md:mt-32 md:grid-flow-col md:gap-10 lg:gap-32">
			<div class="order-2 md:space-y-5">
				<div class="inline-block border-b-8 border-viking-yellow pl-10 uppercase leading-none">
					<h2 class="uppercase">Arboristiniai darbai</h2>
				</div>
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, voluptatem.</p>
				<Btn text={'Daugiau'} href={'/arborist-service'} />
			</div>
			<div class="order-1 md:pt-5">
				<img class="rounded-sm" src="/img/mauris.jpg" alt="" />
			</div>
		</div>
	</div>
</section>
