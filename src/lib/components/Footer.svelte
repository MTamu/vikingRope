<script>
	export let cmsData;
</script>

<footer class="border-t-8 border-viking-yellow bg-viking-grey-background">
	<div
		class="mx-auto grid auto-cols-auto text-center sm:max-w-screen-xl sm:grid-flow-col sm:justify-between sm:gap-5 sm:px-10 sm:py-10 sm:text-left"
	>
		<div class="order-last flex flex-col items-center gap-5 sm:order-first">
			<img src="/img/logo.png" alt="" class="w-32" />
			<div class="text-xs">© 2023. Visos teisės saugomos</div>
		</div>
		<div>
			<ul class="sm:mt-8 sm:space-y-3">
				<li class="mt-7">
					<a href="" class="border-viking-yellow hover:border-b-4">Pagrindinis</a>
				</li>
				<li class="mt-7">
					<a href="" class="border-viking-yellow hover:border-b-4">Paslaugos</a>
				</li>
			</ul>
		</div>
		<div>
			<ul class="sm:mt-8 sm:space-y-3">
				<li class="mt-7">
					<a href="" class="border-viking-yellow hover:border-b-4">Apie mus</a>
				</li>
				<li class="mt-7">
					<a href="" class="border-viking-yellow hover:border-b-4">DUK</a>
				</li>
			</ul>
		</div>
		<div>
			<ul class="sm:mt-8 sm:space-y-3">
				<li class="mt-7">
					<a href="tel:+37065482654">
						<span><img src="/img/phone-icon.svg" alt="" class="mr-2 inline" /></span>
						<span class="border-viking-yellow hover:border-b-4">{cmsData.phone}</span>
					</a>
				</li>
				<li class="mt-7">
					<a href="mailto:vikingropeaccess@gmail.com">
						<span><img src="/img/mail-icon.svg" alt="" class="mr-2 inline" /></span>
						<span class="border-viking-yellow hover:border-b-4">{cmsData.email}</span>
					</a>
				</li>
			</ul>
		</div>
		<div>
			<ul class="sm:mt-8 sm:space-y-3">
				<li class="mt-7">
					<a href={cmsData.facebook.url} target="_blank" rel="noopener noreferrer"
						><img src="/img/fb-icon.svg" alt="" /></a
					>
				</li>
				<li class="mt-7">
					<a href={cmsData.instagram.url} target="_blank" rel="noopener noreferrer"
						><img src="/img/insta-icon.svg" alt="" /></a
					>
				</li>
			</ul>
		</div>
	</div>
</footer>
