<script>
	import { onDestroy, onMount } from 'svelte';
	import Contacts from '../../components/Contacts.svelte';
	import ServicesList from '../../components/service-page/ServicesList.svelte';
	import WorkExamples from '../../components/service-page/WorkSamples.svelte';

	import { page } from '$app/stores';
	console.log($page.data.story);

	export let data;

	// console.log(window);
	console.log(document.getElementById('contacts'));
</script>

<section>
	<div class="mx-auto max-w-screen-xl p-3 sm:px-10 sm:pt-10">
		<div class="mb-6 flex justify-center">
			<div class="inline-block border-b-8 border-viking-yellow pl-10 leading-none">
				<h1 class="uppercase">Arboristiniai darbai</h1>
			</div>
		</div>

		<div>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis consequatur, corrupti facere excepturi ex
			perspiciatis nisi dolore fuga quaerat, optio minus adipisci possimus nostrum atque aliquam reprehenderit obcaecati
			quas? Nesciunt officiis sed quos beatae, magni nisi omnis at repellat accusamus!<br /><br />
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error animi est ipsam quaerat impedit amet deserunt,
			optio alias, minima saepe quia fugiat esse? Nobis repellendus vel tempora perferendis exercitationem, est quasi ex
			suscipit labore dignissimos consequuntur veritatis corrupti ipsam.
		</div>
		<ServicesList />
	</div>
	<Contacts cmsData={data.story.contacts} bgColor={'bg-viking-grey-background'} />
	<WorkExamples />
</section>
