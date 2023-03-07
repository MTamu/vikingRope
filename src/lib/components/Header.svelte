<script>
	import { Dropdown, DropdownItem } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import { language } from '$stores/language';
	import { invalidateAll } from '$app/navigation';

	export let cmsData;

	console.log(cmsData);

	// onMount(() => {
	// 	const userLocation = Intl.DateTimeFormat().resolvedOptions().timeZone;

	// 	if (!userLocation.includes('Vilnius')) {
	// 		pageLanguage = 'EN';
	// 	}
	// });
	// Set language based on user location

	let lanSelect = $language; //gets initial value from store
	let mobileNavOpen = false;

	const languages = [
		{ value: 'lt', name: 'LT' },
		{ value: 'en', name: 'EN' }
	];

	function changeLanguage() {
		language.set(lanSelect);
		invalidateAll();
	}

	const handleMobileMenu = (event) => {
		const element = event.target.nodeName;

		if (element === 'A' || element === 'svg' || element === 'path') {
			mobileNavOpen = !mobileNavOpen;
		}
	};
</script>

<header>
	<nav class="mx-auto hidden max-w-screen-xl justify-end lg:mr-auto lg:flex">
		<div class="lg:flex lg:gap-10 lg:p-6 lg:text-lg">
			<a href="/" class="decoration-viking-yellow decoration-4 underline-offset-8 hover:underline">Pagrindinis</a>
			<div class="relative">
				<button id="services-btn" class="relative flex items-center gap-1">
					<span class="decoration-viking-yellow decoration-4 underline-offset-8 hover:underline">Paslaugos</span>
					<div class="sm:pt-1">
						<img src="img/arrowDown.svg" alt="" />
					</div>
				</button>
			</div>

			<a href="/#about-us" class="decoration-viking-yellow decoration-4 underline-offset-8 hover:underline">Apie mus</a>
			<a href="/#faq" class="decoration-viking-yellow decoration-4 underline-offset-8 hover:underline">DUK</a>
			<a href="/#contacts" class="decoration-viking-yellow decoration-4 underline-offset-8 hover:underline">Kontaktai</a
			>

			<Dropdown triggeredBy="#services-btn" class="dropdownMenu z-20 w-44">
				<DropdownItem
					href="/rope-access-service"
					class="decoration-viking-yellow decoration-4 underline-offset-8 hover:bg-inherit hover:underline"
					>Aukštuminiai darbai</DropdownItem
				>
				<DropdownItem
					href="/arborist-service"
					class="decoration-viking-yellow decoration-4 underline-offset-8 hover:bg-inherit hover:underline"
					>Arboristiniai darbai</DropdownItem
				>
			</Dropdown>

			<div class="lan-select flex items-start gap-2">
				<div class="pt-2">
					<img src="img/lang.svg" alt="" />
				</div>
				<select bind:value={lanSelect} on:change={changeLanguage} class="border-none py-0 pl-0 pr-7 focus:outline-none">
					{#each languages as language}
						<option value={language.value}>{language.name}</option>
					{/each}
				</select>
			</div>
		</div>
	</nav>

	<div class="p-3 lg:hidden ">
		<button on:click={handleMobileMenu}>
			{#if mobileNavOpen}
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
					<path
						d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
					/>
				</svg>
			{:else}
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20">
					<path
						d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm0 5A.75.75 0 0 1 2.75 9h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 9.75ZM2.75 14a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75Z"
					/>
				</svg>
			{/if}
		</button>
		{#if mobileNavOpen}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div on:click={handleMobileMenu} class="flex h-screen flex-col items-center gap-14 pt-12">
				<a href="/">Pagrindinis</a>
				<a href="/rope-access-service">Aukštuminiai darbai</a>
				<a href="/arborist-service">Arboristiniai darbai</a>
				<a href="/#about-us">Apie mus</a>
				<a href="/#faq">DUK</a>

				<div class="">
					<a class="rounded bg-viking-yellow p-2 font-medium tracking-wider" href="tel:+37065482654">{cmsData.phone}</a>
				</div>
				<div>
					<a class="rounded bg-viking-yellow p-2 font-medium tracking-wider" href="mailto:vikingropeaccess@gmail.com"
						>{cmsData.email}</a
					>
				</div>
			</div>
		{/if}
	</div>
</header>

<style>
	select {
		appearance: none;
		background-image: url('img/arrowDown.svg');
		background-position: 1.5rem 0.8rem;
		background-repeat: no-repeat;
		padding-right: 0.8rem;
		background-size: 0.63rem;
		padding-top: 0.2rem;
	}

	header {
		position: fixed;
		top: 0;
		width: 100%;
		background-color: #fff;
		z-index: 100010;
	}
</style>