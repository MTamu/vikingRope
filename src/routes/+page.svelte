<script>
	import Hero from '$components/main-page/Hero.svelte';
	import Services from '$components/main-page/Services.svelte';
	import About from '$components/main-page/About.svelte';
	import Faq from '$components/main-page/Faq.svelte';
	import Contacts from '$components/Contacts.svelte';
	import { language } from '$stores/language';
	import { invalidateAll } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;
</script>

<svelte:head>
	<title>Pagrindinis</title>
	<meta name="description" content="Svelte demo app" />
	<!-- To do -->
</svelte:head>

<h1>The language is {$language}</h1>

<Hero cmsData={data.story.hero} />
<Services cmsData={data.story.services} />
<About cmsData={data.story.about} />
<Faq cmsData={data.story.faq} />
<Contacts cmsData={data.contactsData} />
