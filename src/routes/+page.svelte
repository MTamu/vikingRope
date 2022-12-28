<script>
	import Hero from '$components/main-page/Hero.svelte';
	import Services from '../components/main-page/Services.svelte';
	import About from '../components/main-page/About.svelte';
	import Faq from '../components/main-page/Faq.svelte';
	import Contacts from '../components/Contacts.svelte';
</script>

<svelte:head>
	<title>Pagrindinis</title>
	<meta name="description" content="Svelte demo app" />
	<!-- To do -->
</svelte:head>

<Hero />
<Services />
<About />
<Faq />
<Contacts />
