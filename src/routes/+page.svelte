<script>
	import Hero from '$components/main-page/Hero.svelte';
	import Services from '$components/main-page/Services.svelte';
	import About from '$components/main-page/About.svelte';
	import Faq from '$components/main-page/Faq.svelte';
	import Contacts from '$components/Contacts.svelte';

	export let data;
</script>

<Hero cmsData={data.story.hero} contactsData={data.contactsData} />
<Services cmsData={data.story.services} />
<About cmsData={data.story.about} />
<Faq cmsData={data.story.faq} />
<Contacts cmsData={data.contactsData} />
