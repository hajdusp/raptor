<script>
  import Card from "./lib/Card.svelte";
  import Footer from "./lib/Footer.svelte";
  import Header from "./lib/Header.svelte";
</script>

<Header />
<main>
  <div class="container p-1">
    <h2>Main</h2>
    <div class="grid-1-1-1">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</main>
<Footer />
