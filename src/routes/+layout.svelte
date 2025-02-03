<script>
	import { Header, Doubleclick } from '$lib';
	//   import Footer from '../lib/Footer.svelte';

</script>

<!-- <Header /> -->

<header>
	<Header />
</header>

<main class="wrapper">
	<slot />
</main>

<!-- <Footer /> -->

<style>

	header{
		height: 5%;
		margin: 0 10em;
		border-bottom: solid var(--primary-color);
	}

	main {
		display: block;
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
