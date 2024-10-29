<script>
	export let person;
	import ProfileImg from './ProfileImg.svelte';
</script>

<section>
	<div>
		<h1>Jesse Leeuwerink</h1>
		<h3>Portfolio</h3>
	</div>

	<div>
		{#if person && person.length > 0}
			<img src={person[0].avatar} alt="Avatar of {person[0].name}" />
		{:else}
			<p>No person data available</p>
		{/if}
	</div>
</section>

<style>
	section {
		display: flex;
		border: 5px solid var(--primary-color);
		border-radius: 20px;
		margin: auto;
		width: 100%;
		height: 100%;
		padding: 1.5em;
		height: 600px;
		margin-bottom: 6em;
	}
	div {
		width: 50%;
	}

	div h1 {
		margin-bottom: 0.6em;
	}

	div:nth-child(2) {
		display: flex;
		justify-content: center;
		align-items: center;
		
	}

	div:nth-child(2) img {
		height: 50%;
		border: 5px solid var(--primary-color);
		border-radius: 20px;
	}
</style>
