<script>
	import { each } from 'svelte/internal';

	let style = {
		wrapper: `relative w-full p-16 overflow-hidden`,
		container: `flex animate absolute left-0`,
		itemContainer: `flex w-1/2 justify-around items-center logo`,
	};

	// let logos = ['about/banregio.png', 'about/Bitso.png', 'about/Jumio.png', 'about/Creel.png'];
    export let logos
</script>

<div class={style.wrapper}>
	<div class={style.container}>
		<div class={style.itemContainer}>
			{#each logos as logo}
				<div class="">
					<img src={logo} alt="" />
				</div>
			{/each}
		</div>
		<div class={style.itemContainer}>
			{#each logos as logo}
				<div>
					<img src={logo} alt="" />
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	@keyframes marquee {
		0% {
			left: 0;
		}
		100% {
			left: -100%;
		}
	}
	.animate {
		width: 200%;
		animation: marquee 20s linear infinite;
		top: 50%;
		transform: translate(0, -50%);
	}
	.logo div {
		width: 80px;
		-webkit-transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
	}
	@screen lg {
		@keyframes marquee {
			0% {
				left: 0;
			}
			100% {
				left: -375%;
			}
		}
		.animate {
			width: 750%;
			animation: marquee 20s linear infinite;
			top: 50%;
			transform: translate(0, -50%);
		}
		.logo div {
			width: 100px;
			-webkit-transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
		}
	}
	.animate:hover {
		animation-play-state: paused;
	}
	.logo div:hover {
		transform: scale(1.3);
	}
</style>
