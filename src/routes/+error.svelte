<script>
	import Btn from '$components/elements/Btn.svelte';
	import { page } from '$app/stores';

	export let data;
	export let form;

	const errList = [404, 500];
	let err = 'error';

	if (errList.includes($page.status)) {
		err = $page.status;
	}
</script>

<section class=" pt-28">
	<div class="mx-auto max-w-screen-xl p-3 text-center md:p-0 md:px-10 md:pb-72">
		<div class="grid auto-cols-fr md:grid-flow-col">
			<div class="md:mt-16 md:text-left">
				<p class=" text-2xl font-medium">Ooops!</p>
				<div class="mt-5 inline-block border-b-4 border-viking-yellow pb-1 leading-none">
					<h2>{$page.status} - {$page.error.message}</h2>
				</div>
				<p class="mt-3 text-gray-500">This page doesn't exist or was removed!<br />We suggest you back to home</p>
				<Btn text={'Home'} href={'/'} />
			</div>
			<div class="flex flex-col md:justify-end">
				<img src="/img/{err}.svg" alt="" />
				<a class=" text-right text-xs text-gray-200" href="https://storyset.com/online"
					>Online illustrations by Storyset</a
				>
			</div>
		</div>
	</div>
</section>
