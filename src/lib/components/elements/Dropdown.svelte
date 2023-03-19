<script>
	import { onMount } from 'svelte';
	export let navData;
	export let componentName;
	export let bgColor;

	bgColor = bgColor ?? 'bg-white';

	const openCloseDropDown = () => {
		document.querySelector(`#serviceDropdown${componentName}`).classList.toggle('hidden');
		document.querySelector(`#dropdownName${componentName}`).classList.toggle('hover:underline');
	};

	onMount(async () => {
		window.addEventListener('click', handleOutsideClick);
		window.addEventListener('scroll', handleScroll);
	});

	const handleOutsideClick = (event) => {
		const dropdown = document.querySelector(`#serviceDropdown${componentName}`);
		const dropdownName = document.querySelector(`#dropdownName${componentName}`);

		if (!event.target.closest('.dropdown')) {
			if (!dropdown.classList.contains('hidden')) {
				dropdown.classList.add('hidden');
				dropdownName.classList.add('hover:underline');
			}
		}
	};

	const handleScroll = (event) => {
		const dropdown = document.querySelector(`#serviceDropdown${componentName}`);
		const dropdownName = document.querySelector(`#dropdownName${componentName}`);

		if (!dropdown.classList.contains('hidden')) {
			dropdown.classList.add('hidden');
			dropdownName.classList.add('hover:underline');
		}
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="dropdown relative inline-block" on:click={openCloseDropDown}>
	<button class="dropbtn flex items-center gap-1">
		<span
			id="dropdownName{componentName}"
			class="decoration-viking-yellow decoration-4 underline-offset-8 hover:underline">{navData.services}</span
		>
		<div class="sm:pt-1">
			<img src="img/arrowDown.svg" alt="" />
		</div>
	</button>

	<div
		id="serviceDropdown{componentName}"
		class="dropdown-content absolute z-10 hidden whitespace-nowrap border-l-8 border-viking-yellow  {bgColor} px-3 pb-2"
	>
		<a
			href="/rope-access-service"
			class="mt-3 block leading-relaxed decoration-viking-yellow decoration-4 underline-offset-8 hover:underline"
			>{navData.rope_access}</a
		>
		<a
			href="/arborist-service"
			class="mt-3 block leading-relaxed decoration-viking-yellow decoration-4 underline-offset-8 hover:underline"
			>{navData.arborism}</a
		>
	</div>
</div>
