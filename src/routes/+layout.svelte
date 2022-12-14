<script>
  import Header from '$components/Header.svelte';
  import Footer from '$components/Footer.svelte';
  import './styles.css'
</script>

<div class="app">
  <div class="">
    <Header />

    <main>
      <slot />
    </main>
  
    <Footer />
  </div>
</div>