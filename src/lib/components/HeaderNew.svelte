<script>
	// export let person;
	import ProfileImg from './ProfileImg.svelte';
	import { onMount } from 'svelte';

	let navi;
	let burger;

	onMount(() => {
		burger.addEventListener('click', () => {
			burger.classList.toggle('active');
			navi.classList.toggle('moved');
		});
	});
</script>

<button bind:this={burger}>
	{#each Array(3) as _}
		<span></span>
	{/each}
</button>

<div bind:this={navi} class="wrapper-nav {navi ? 'js' : ''}">
	<nav>
		<ul>
			<li><a href="/" class="active">Home</a></li>
			<li><a href="/We-Love-Web" class="active">We Love Web notes</a></li>
			<li><a href="/Learning-Journal" class="active">Learning Journal</a></li>
		</ul>
	</nav>
	<nav>
		<ul>
			<li><a href="/Sources" class="active">Sources</a></li>
		</ul>
	</nav>
</div>

<style>
	button {
		cursor: pointer;
		width: 50px;
		margin: 50px auto;
		background-color: transparent;
		border: none;

    @media (min-width: 1024px) {
      display: none;
    }
	}

	button span {
		display: block;
		width: 50px;
		height: 5px;
		margin-bottom: 10px;
		border-radius: 10px;
		background-color: #fff;
		position: relative;
		top: 0;
		transition: all 0.3s ease-in-out;
	}

  :global(.active) span:nth-child(1){
    transform: rotate(45deg);
    top: 15px;
  }

  :global(.active) span:nth-child(3){
    transform: rotate(-45deg);
    top: -15px;
  }

  :global(.active) span:nth-child(2){
	opacity: 0;
  }

	.wrapper-nav {
		position: fixed;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
    left: -20%;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.4s;
    background-color: var(--primary-color);
		@media (min-width: 1024px) {
      position: unset;
      transform: translateY(0);
			height: 100%;
			display: flex;
			justify-content: space-between;
			background-color: var(--primary-orange);
			padding: 0 1em;
		}
	}

 .wrapper-nav:global(.moved) {
		left: 10%;
	}

	.wrapper-nav nav {
		width: 50%;

		@media (mix-width: 1024px) {
			width: 100%;
		}
	}

	.wrapper-nav nav ul {
		@media (min-width: 1024px) {
			display: flex;
			width: 100%;
			justify-content: space-around;
		}
	}

	:global(.wrapper-nav a.active) {
		color: var(--secondary-color);
	}

	/* ====== 1ste nav ====== */

	.js .wrapper-nav nav:nth-child(1) {
		display: flex;
		width: 50%;
		justify-content: flex-start;
		align-items: center;
	}

	.wrapper-nav nav:nth-child(1) {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	/* .wrapper-nav nav:nth-child(1) img {
    height: 100%;
  } */

	.wrapper-nav nav:nth-child(1) a:hover {
		border-bottom: 2px solid var(--primary-white);
		transition: 0.2s;
	}

	/* .js .wrapper-nav nav:nth-child(1) .openbtn {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    display: block;
  } */

	/* .wrapper-nav nav:nth-child(1) .openbtn {
    display: none;
  } */

	/* .wrapper-nav nav:nth-child(1) .openbtn .openbtn-area {
    transition: all 0.4s;
  } */

	/* .wrapper-nav nav:nth-child(1) .openbtn span {
    position: absolute;
    background: var(--primary-white);
    display: inline-block;
    border-radius: 3px;
    left: 13px;
    height: 3px;
    transition: all 0.4s;
    width: 50%;
    &:nth-of-type(1) {
      top: 16px;
    }
    &:nth-of-type(2) {
      top: 24px;
    }
    &:nth-of-type(3) {
      top: 32px;
      &::after {
        content: "menu";
        position: absolute;
        left: -8px;
        color: var(--primary-white);
      }
    }
  } */

	/* .wrapper-nav nav:nth-child(1) .openbtn.active .openbtn-area {
    transform: rotatex(360deg);
  } */

	/* .wrapper-nav nav:nth-child(1) .openbtn.active span {
    &:nth-of-type(1) {
      width: 45%;
      top: 18px;
      left: 14px;
      transform: translateY(6px) rotate(-135deg);
    }
    &:nth-of-type(2) {
      opacity: 0;
    }
    &:nth-of-type(3) {
      width: 45%;
      top: 30px;
      left: 14px;
      transform: translateY(-6px) rotate(135deg);
      &::after {
        content: "";
      }
    }
  } */

	/* ====== 2de nav ====== */

	.js .wrapper-nav nav:nth-child(2) {
		display: flex;
		flex-direction: row;
		width: 30%;
		justify-content: space-around;
		align-items: center;

		& a {
			display: flex;
			align-items: center;
		}
		& a:nth-child(2) {
			padding-left: 0.2em;
		}
		& a i {
			padding-left: 0.2em;
		}
	}

	.wrapper-nav nav:nth-child(2) {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-direction: column;
		align-items: flex-start;
	}

	/* .wrapper-nav nav:nth-child(2) a i {
    transition: all 1000ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
  } */

	/* .wrapper-nav nav:nth-child(2) a:hover i {
    transform: rotate(1turn);
  } */

	/* .wrapper-nav nav ul.moved {
    transform: translateX(-25%);
  } */
</style>
