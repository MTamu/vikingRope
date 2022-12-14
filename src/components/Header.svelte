<script>
	import { page } from '$app/stores';

	var a = 5;
	console.log(a);
</script>

<header>
	<nav class="hidden max-w-screen-xl mx-auto sm:flex sm:justify-end sm:gap-10 sm:p-10 sm:text-lg sm:leading-none">
	  <a href="/">Pagrindinis</a>
    <div class="relative">
      <button class="flex items-center gap-1 relative">
        <span>Paslaugos</span>
        <div class="sm:pt-1">
          <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 1L5.5 6L1 1" stroke="black" stroke-width="1.5"/>
          </svg> 
        </div>
      </button>
    </div> 
		<!-- <a class="flex items-center gap-1 relative" href="/arborist-service">Paslaugos   -->
    <a href="#">Apie mus</a>
    <a href="#">DUK</a>
    <a href="#">Kontaktai</a>
	</nav>
</header>
