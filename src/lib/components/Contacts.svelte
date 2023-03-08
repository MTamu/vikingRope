<script>
	export let bgColor = 'bg-white';
	export let cmsData;
</script>

<section id="contacts" class="{bgColor} mt-0">
	<div class="mx-auto flex max-w-screen-xl justify-center pt-24 pb-32 md:px-10">
		<div class="flex flex-col gap-14 border-l-small border-viking-yellow px-4 text-center md:border-l-medium md:px-10">
			<h3 class="font-medium tracking-wide">{cmsData.title}</h3>
			<div class="flex flex-col gap-10">
				<div class="">
					<a class="rounded bg-viking-yellow p-2 font-medium tracking-wider" href="tel:+37065482654">{cmsData.phone}</a>
				</div>
				<div>
					<a class="rounded bg-viking-yellow p-2 font-medium tracking-wider" href="mailto:vikingropeaccess@gmail.com"
						>{cmsData.email}</a
					>
				</div>
			</div>
		</div>
	</div>
</section>
