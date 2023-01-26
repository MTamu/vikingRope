<script>
	export let cmsData;

	console.log(cmsData);
</script>

<footer class="border-t-8 border-viking-yellow bg-viking-grey-background">
	<div
		class="mx-auto grid auto-cols-auto text-center sm:max-w-screen-xl sm:grid-flow-col sm:justify-between sm:gap-5 sm:px-10 sm:py-10 sm:text-left"
	>
		<div class="order-last sm:order-first">
			<img src="/img/logo.png" alt="" class="w-32" />
		</div>
		<div>
			<ul class="sm:mt-8 sm:space-y-3">
				<li class="mt-7">
					<a href="">Pagrindinis</a>
				</li>
				<li class="mt-7">
					<a href="">Paslaugos</a>
				</li>
			</ul>
		</div>
		<div>
			<ul class="sm:mt-8 sm:space-y-3">
				<li class="mt-7">
					<a href="">Apie mus</a>
				</li>
				<li class="mt-7">
					<a href="">DUK</a>
				</li>
			</ul>
		</div>
		<div>
			<ul class="sm:mt-8 sm:space-y-3">
				<li class="mt-7">
					<a href="tel:+37065482654">{cmsData.phone}</a>
				</li>
				<li class="mt-7">
					<a href="mailto:vikingropeaccess@gmail.com">{cmsData.email}</a>
				</li>
			</ul>
		</div>
		<div>
			<ul class="sm:mt-8 sm:space-y-3">
				<li class="mt-7">
					<a href={cmsData.facebook.url} target="_blank" rel="noopener noreferrer">facebook</a>
				</li>
				<li class="mt-7">
					<a href={cmsData.instagram.url} target="_blank" rel="noopener noreferrer">Instagram</a>
				</li>
			</ul>
		</div>
	</div>
</footer>
