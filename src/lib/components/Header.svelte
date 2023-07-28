<script>
	import { language } from '$stores/language';
	import { invalidateAll } from '$app/navigation';
	import Dropdown from './elements/Dropdown.svelte';
	import { navigating } from '$app/stores';

	export let contactsData;
	export let navData;

	let lanSelect = $language; //gets initial value from store
	let mobileNavOpen = false;

	let slowLoadTime;

	$: if ($navigating) {
		slowLoadTime = false;

		setTimeout(() => {
			slowLoadTime = true;
		}, 200);
	} else {
		slowLoadTime = false;
	}

	const languages = [
		{ value: 'lt', name: 'LT' },
		{ value: 'en', name: 'EN' }
	];

	function changeLanguage() {
		language.set(lanSelect);
		invalidateAll();
	}

	const handleMobileMenu = (event) => {
		const { nodeName } = event.target;
		switch (nodeName) {
			case 'A':
			case 'svg':
			case 'path':
				mobileNavOpen = !mobileNavOpen;
				break;
			default:
				break;
		}
	};
</script>

<header class="overflow-y-scroll lg:overflow-y-visible">
	{#if $navigating}
		{#if slowLoadTime}
			<div class="load-bar-container">
				<div class="load-bar">
					<div class="bar" />
					<div class="bar" />
					<div class="bar" />
				</div>
			</div>
		{/if}
	{/if}

	<nav class="mx-auto hidden max-w-screen-xl justify-end lg:mr-auto lg:flex">
		<div class="lg:flex lg:gap-10 lg:p-6 lg:text-lg">
			<a href="/" class="decoration-viking-yellow decoration-4 underline-offset-8 hover:underline">{navData.home}</a>

			<!-- svelte-ignore a11y-click-events-have-key-events -->

			<Dropdown {navData} componentName={'-header'} />
			<a href="/#about-us" class="decoration-viking-yellow decoration-4 underline-offset-8 hover:underline"
				>{navData.about}</a
			>
			<a href="/#faq" class="decoration-viking-yellow decoration-4 underline-offset-8 hover:underline">{navData.faq}</a>
			<a href="/#contacts" class="decoration-viking-yellow decoration-4 underline-offset-8 hover:underline"
				>{navData.contacts}</a
			>

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
			<div on:click={handleMobileMenu} class="mobileMenu flex h-screen flex-col items-center gap-14 pt-12">
				<a href="/">{navData.home}</a>
				<a href="/rope-access-service">{navData.rope_access}</a>
				<a href="/arborist-service">{navData.arborism}</a>
				<a href="/#about-us">{navData.about}</a>
				<a href="/#faq">{navData.faq}</a>

				<div class="">
					<a class="rounded bg-viking-yellow p-2 font-medium tracking-wider" href="tel:+37065482654"
						>{contactsData.phone}</a
					>
				</div>
				<div>
					<a class="rounded bg-viking-yellow p-2 font-medium tracking-wider" href="mailto:vikingropeaccess@gmail.com"
						>{contactsData.email}</a
					>
				</div>
			</div>
		{/if}
	</div>
</header>

<style>
	select {
		appearance: none;
		background-image: url('/img/arrowDown.svg');
		background-position: 1.5rem 0.8rem;
		background-repeat: no-repeat;
		padding-right: 0.8rem;
		background-size: 0.63rem;
		padding-top: 0.2rem;
	}

	header {
		-webkit-overflow-scrolling: touch;
		position: fixed;
		top: 0;
		width: 100%;
		background-color: #fff;
		z-index: 100010;
	}

	.mobileMenu {
		height: calc(100vh - 65px);
	}

	.load-bar-container {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 200010;
	}

	.load-bar {
		position: relative;
		width: 100%;
		height: 6px;
		background-color: #fdba2c;
	}

	.bar {
		content: '';
		display: inline;
		position: absolute;
		width: 0;
		height: 100%;
		left: 50%;
		text-align: center;
	}
	.bar:nth-child(1) {
		background-color: #fdba2c;
		animation: loading 3s linear infinite;
	}
	.bar:nth-child(2) {
		background-color: #005248;
		animation: loading 3s linear 1s infinite;
	}
	.bar:nth-child(3) {
		background-color: #da4733;
		animation: loading 3s linear 2s infinite;
	}
	@keyframes loading {
		from {
			left: 0;
			width: 0;
			z-index: 100;
		}
		33.3333% {
			left: 0;
			width: 100%;
			z-index: 10;
		}
		to {
			left: 0;
			width: 100%;
		}
	}
</style>
