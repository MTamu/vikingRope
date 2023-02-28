<script>
	export let increment;

	const incrementNumber = (increment) => {
		increment += 1;

		console.log(increment);
	};
</script>

<button on:click={incrementNumber(increment)}>+</button>
