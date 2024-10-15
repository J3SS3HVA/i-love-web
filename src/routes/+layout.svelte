<script>
	// import { Header } from '$lib';
	//   import Footer from '../lib/Footer.svelte';
</script>

<!-- <Header /> -->

<main class="wrapper">
	<slot />
</main>

<!-- <Footer /> -->

<style>
	main {
		display: grid;
		grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
		grid-template-rows: 1.5fr 1fr 1fr 1.5fr;
		gap: 20px 20px;
        height: 100%;
	}


	/* @media only screen and (max-width: 1600px) {
      .wrapper{
        max-width: 900px;
        }
  
      main {
        display: flex;
        flex-direction: column;
      }
    } */
</style>
