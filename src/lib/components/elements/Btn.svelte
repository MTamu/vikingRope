<script>
	export let text = '';
	export let href = '';
	export let customStyle = '';
</script>

<a
	class="{customStyle} inline-block rounded border-2 border-viking-yellow py-2 px-4 font-medium hover:bg-viking-yellow hover:no-underline sm:mt-8 md:mt-16"
	{href}>{text}</a
>
