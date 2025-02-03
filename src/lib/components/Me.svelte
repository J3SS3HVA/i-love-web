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
		border-left: 5px solid var(--primary-color);
		border-right: 5px solid var(--primary-color);
		margin: auto;
		height: 100%;
		padding: 20px;
		height: 600px;
		margin: 60px 10em;
	}
	div {
		width: 50%;
	}

	div h1 {
		margin-bottom: 10px;
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
