<script>
	import Dropdown from './elements/Dropdown.svelte';

	export let cmsData;
	export let navData;
</script>

<footer class="border-t-8 border-viking-yellow bg-viking-grey-background">
	<div
		class="mx-auto grid auto-cols-auto pt-10 pb-14 text-center lg:max-w-screen-xl lg:grid-flow-col lg:justify-between lg:gap-5 lg:p-10 lg:pb-0 lg:text-left"
	>
		<div class="order-last flex flex-col items-center gap-5 lg:order-first">
			<img src="/img/logo.png" alt="" width="144" height="160" />
			<div class="text-xs">{cmsData.rights}</div>
		</div>
		<div>
			<ul class="lg:mt-8 lg:space-y-3">
				<li class="mt-7 hidden lg:block">
					<a href="/" class="border-viking-yellow hover:border-b-4">{navData.home}</a>
				</li>
				<li class="mt-7 flex justify-center lg:block">
					<Dropdown {navData} componentName={'-footer'} bgColor={'bg-viking-grey-background'} />
				</li>
			</ul>
		</div>
		<div>
			<ul class="lg:mt-8 lg:space-y-3">
				<li class="mt-7">
					<a href="/#about-us" class="border-viking-yellow hover:border-b-4">{navData.about}</a>
				</li>
				<li class="mt-7">
					<a href="/#faq" class="border-viking-yellow hover:border-b-4">{navData.faq}</a>
				</li>
			</ul>
		</div>
		<div>
			<ul class="lg:mt-8 lg:space-y-3">
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
			<ul class="mb-7 flex justify-center gap-5 lg:my-0 lg:block lg:space-y-3">
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
