<script>
	import { AccordionItem, Accordion } from 'flowbite-svelte';
</script>

<section>
	<div class="mt-12 grid grid-cols-2">
		<div>
			<div class="inline-block border-b-8 border-viking-yellow pl-6 uppercase leading-none">
				<h2 class="uppercase">Atliekamos paslaugos:</h2>
			</div>
			<Accordion flush>
				<AccordionItem>
					<span slot="header" class="text-lg font-normal text-black">Lorem ipsum dolor</span>
					<p class="mb-2 p-2 text-black">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...
					</p>
				</AccordionItem>
				<AccordionItem>
					<span slot="header" class="text-lg font-normal text-black">Lorem ipsum dolor</span>
					<p class="mb-2 p-2 text-black">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...
					</p>
				</AccordionItem>
				<AccordionItem>
					<span slot="header" class="text-lg font-normal text-black">Lorem ipsum dolor</span>
					<p class="mb-2 p-2 text-black">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...
					</p>
				</AccordionItem>
				<AccordionItem>
					<span slot="header" class="text-lg font-normal text-black">Lorem ipsum dolor</span>
					<p class="mb-2 p-2 text-black">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...
					</p>
				</AccordionItem>
				<AccordionItem>
					<span slot="header" class="text-lg font-normal text-black">Lorem ipsum dolor</span>
					<p class="mb-2 p-2 text-black">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...
					</p>
				</AccordionItem>
			</Accordion>
		</div>
		<div />
	</div>
</section>
