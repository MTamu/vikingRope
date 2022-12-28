<script>
	import { AccordionItem, Accordion } from 'flowbite-svelte';
</script>

<section id="faq" class="bg-viking-grey-background">
	<div class="mx-auto max-w-screen-xl p-3 md:px-10 md:pt-20 md:pb-20">
		<div class="mb-6 flex justify-center">
			<div class="mt-5 border-b-8 border-viking-yellow pl-10 text-center uppercase leading-none">
				<h2 class="uppercase">DUK</h2>
			</div>
		</div>
		<Accordion flush>
			<AccordionItem>
				<span slot="header" class="text-lg font-normal"
					>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, possimus!</span
				>
				<p class="mb-2 border-4 border-viking-yellow p-2 text-black">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...
				</p>
			</AccordionItem>
			<AccordionItem>
				<span slot="header" class="text-base font-normal"
					>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, et.</span
				>
				<p class="mb-2 border-4 border-viking-yellow p-2 text-black">
					Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque officiis dolore
					quis sunt est nihil molestiae in suscipit totam rem! consectetur adipisicing elit. Illo ab necessitatibus sint
					explicabo ...
				</p>
			</AccordionItem>
			<AccordionItem>
				<span slot="header" class="text-lg font-normal"
					>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, possimus!</span
				>
				<p class="mb-2 border-4 border-viking-yellow p-2 text-black">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...
				</p>
			</AccordionItem>
			<AccordionItem>
				<span slot="header" class="text-lg font-normal"
					>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, possimus!</span
				>
				<p class="mb-2 border-4 border-viking-yellow p-2 text-black">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...
				</p>
			</AccordionItem>
			<AccordionItem>
				<span slot="header" class="text-lg font-normal"
					>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, possimus!</span
				>
				<p class="mb-2 border-4 border-viking-yellow p-2 text-black">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...
				</p>
			</AccordionItem>
		</Accordion>
	</div>
</section>
