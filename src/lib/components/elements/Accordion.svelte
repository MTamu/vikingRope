<script>
	import { renderRichText } from '@storyblok/svelte';

	export let primaryText, secondaryText;

	const handleDropdown = (event) => {
		const details = event.target.closest('details');
		const summary = details.querySelector('summary');
		const span = details.querySelector('span');
		const svg = details.querySelector('svg');

		switch (details.open) {
			case true:
				summary.classList.remove('hover:bg-gray-200');
				span.classList.remove('group-hover:translate-x-6');
				svg.classList.remove('group-hover:-translate-x-6');
				span.classList.add('translate-x-6');
				svg.classList.add('-translate-x-6');
				break;
			case false:
				summary.classList.add('hover:bg-gray-200');
				span.classList.add('group-hover:translate-x-6');
				svg.classList.add('group-hover:-translate-x-6');
				span.classList.remove('translate-x-6');
				svg.classList.remove('-translate-x-6');
				break;
		}
	};
</script>

<details on:toggle={handleDropdown}>
	<summary class="group flex items-center justify-between py-5 hover:bg-gray-200 focus:outline-none"
		><span class="pr-20 text-xl font-medium transition duration-100 ease-in-out group-hover:translate-x-6"
			>{@html renderRichText(primaryText)}</span
		>
		<svg
			class="down h-6 w-6 fill-current transition duration-100 ease-in-out group-hover:-translate-x-6"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				fill-rule="evenodd"
				d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
				clip-rule="evenodd"
			/>
		</svg>
	</summary>
	<div class="text -mt-3 max-w-screen-lg px-6 pb-6 leading-relaxed tracking-wide text-black text-opacity-60">
		<p>
			{@html renderRichText(secondaryText)}
		</p>
	</div>
</details>
