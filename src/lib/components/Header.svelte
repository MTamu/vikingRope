<script>
	import { Dropdown, DropdownItem } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import { language } from '$stores/language';
	import { invalidateAll } from '$app/navigation';

	// let pageLanguage = 'en';

	// onMount(() => {
	// 	const userLocation = Intl.DateTimeFormat().resolvedOptions().timeZone;

	// 	if (!userLocation.includes('Vilnius')) {
	// 		pageLanguage = 'EN';
	// 	}
	// });
	// Set language based on user location

	let lanSelect = $language;

	function changeLanguage() {
		language.set(lanSelect);
		invalidateAll();
		console.log(lanSelect);
	}
</script>

<header>
	<nav class="mx-auto hidden max-w-screen-xl lg:flex lg:justify-end lg:gap-10 lg:p-10 lg:text-lg lg:leading-none">
		<select bind:value={lanSelect} on:change={changeLanguage}>
			<option value="en">EN</option>
			<option value="lt">LT</option>
		</select>

		<a href="/">Pagrindinis</a>
		<div class="relative">
			<button id="services-btn" class="relative flex items-center gap-1">
				<span>Paslaugos</span>
				<div class="sm:pt-1">
					<svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10 1L5.5 6L1 1" stroke="black" stroke-width="1.5" />
					</svg>
				</div>
			</button>
		</div>
		<!-- <a class="flex items-center gap-1 relative" href="/arborist-service">Paslaugos   -->
		<a href="/#about-us">Apie mus</a>
		<a href="/#faq">DUK</a>
		<a href="/#contacts">Kontaktai</a>

		<Dropdown triggeredBy="#services-btn" class="z-20 w-44">
			<DropdownItem href="/rope-access-service">Aukštuminiai darbai</DropdownItem>
			<DropdownItem href="/arborist-service">Arboristiniai darbai</DropdownItem>
		</Dropdown>
	</nav>
</header>
