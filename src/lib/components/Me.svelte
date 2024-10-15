<script>
	export let person;
	import ProfileImg from './ProfileImg.svelte';
</script>

<section>
	{#if person && person.length > 0}
    <img src={person[0].avatar} alt="Avatar of {person[0].name}" />
{:else}
    <p>No person data available</p>
{/if}
</section>

<style>
	

	section {
		border: solid var(--primary-color);
		margin: auto;
		grid-area: 1 / 1 / 3 / 3;
		width: 100%;
		height: 100%;
	}
</style>
