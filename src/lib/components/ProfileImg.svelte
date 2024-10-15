<script>
	export let person;
</script>

<section>
	{#if person && person.length > 0}
		<img src={person[0].avatar} width="400" height="400" alt="Avatar of {person[0].name}" />
	{/if}
</section>

<style>
	img {
		/* width: 400px;
		height: 400px; */
		border-radius: 100%;
		object-fit: cover;
		border: solid var(--tertiary-color);
		padding: 20px;
		background-color: var(--body-color);
	}

	section {
		z-index: 1;
		margin: auto;
		grid-area: 2 / 2 / 4 / 4;
	}
</style>
