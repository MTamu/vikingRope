<script>
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
	import './styles.css';

	export let data;
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<div />
	<Footer cmsData={data.footerData} />
</div>
