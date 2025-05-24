<script>
	import { Header } from '$lib';
	import { page } from '$app/stores'; // Import the page store to access the current route
    import { Squareorbit } from '$lib'; // Import the square-orbit component

</script>

<!-- <Squareorbit /> -->

{#if !$page.url.pathname.includes('/square-orbit')}
<header>
    <Header />
</header>
{/if}

<main class="wrapper">
	<slot />
</main>

<!-- <Footer /> -->

<style>

	header{
		height: 5%;
		margin: 0 10em;

	@media (min-width: 1024px) {
		
		border-bottom: solid var(--primary-color);
	}
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
