<script>
	import { Dropdown, DropdownItem } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import { language } from '$stores/language';
	import { invalidateAll } from '$app/navigation';

	// onMount(() => {
	// 	const userLocation = Intl.DateTimeFormat().resolvedOptions().timeZone;

	// 	if (!userLocation.includes('Vilnius')) {
	// 		pageLanguage = 'EN';
	// 	}
	// });
	// Set language based on user location

	let lanSelect = $language; //gets initial value from store

	const languages = [
		{
			value: 'lt',
			name: 'LT'
		},
		{ value: 'en', name: 'EN' }
	];

	function changeLanguage() {
		language.set(lanSelect);
		invalidateAll();
	}
</script>

<header>
	<nav class="mx-auto hidden max-w-screen-xl justify-end lg:mr-auto lg:flex">
		<div class="lg:flex lg:gap-10 lg:p-6 lg:text-lg">
			<a href="/">Pagrindinis</a>
			<div class="relative">
				<button id="services-btn" class="relative flex items-center gap-1">
					<span>Paslaugos</span>
					<div class="sm:pt-1">
						<img src="img/arrowDown.svg" alt="" />
					</div>
				</button>
			</div>

			<a href="/#about-us">Apie mus</a>
			<a href="/#faq">DUK</a>
			<a href="/#contacts">Kontaktai</a>

			<Dropdown triggeredBy="#services-btn" class="dropdownMenu z-20 w-44">
				<DropdownItem href="/rope-access-service">Aukštuminiai darbai</DropdownItem>
				<DropdownItem href="/arborist-service">Arboristiniai darbai</DropdownItem>
			</Dropdown>

			<div class="lan-select flex items-start gap-2 hover:border-b">
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
		z-index: 100;
	}

	a:hover,
	#services-btn:hover,
	.lan-select:hover {
		border-bottom: 3px solid #e5aa33;
	}
</style>
