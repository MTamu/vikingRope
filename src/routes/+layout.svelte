<script>
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
	import './styles.css';
	import { onDestroy, onMount } from 'svelte';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import Analytics from '../analytics.svelte';
	import { register } from 'swiper/element/bundle';
	register();

	export let data;

	let root;

	onMount(() => {
		root = document.getElementsByTagName('html')[0];

		root?.classList.add('smoothscroll');
	});

	beforeNavigate(() => {
		root?.classList.remove('smoothscroll');
	});

	afterNavigate(() => {
		root?.classList.add('smoothscroll');
	});
</script>

<Analytics />

<div class="app">
	<Header contactsData={data.contactsData} navData={data.navData} />

	<main>
		<slot />
	</main>

	<div />
	<Footer cmsData={data.footerData} navData={data.navData} />
</div>
