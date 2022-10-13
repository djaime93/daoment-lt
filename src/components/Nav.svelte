<script>
	import NavMobileOptions from './NavMobileOptions.svelte';
    import MobileNav from './MobileNav.svelte';

	const style = {
		navWrapper: `flex flex-cols px-6 py-2 justify-between items-center sticky top-0 z-10 bg-white`, //border-b-2 border-black
		logoContainer: `flex justify-center items-center`,
		logo: `h-14`,
		logoText: `hidden md:block text-2xl font-bold text-[#071F25]`,
		nav: `flex flex-cols gap-10`,

		// navItem: `text-gray-400`,
		navItem: `text-[#0030C9] hidden md:block hover:font-bold`,

		user: `flex flex-cols gap-2`,

		// getStartedButton: `hidden md:block bg-[#071F25] py-3 px-4 rounded-xl text-white font-semibold`, //  bg-[#314BA0] #0026CC #071F25
		getStartedButton: `hidden md:block bg-daoblue py-3 px-4 rounded-xl text-white font-semibold text-center border-2 border-daoblue hover:bg-daogreen hover:text-daoblue hover:border-daoblue`, //  bg-[#314BA0] #0026CC #071F25
		getStartedButton2: `relative -top-1 -left-1 hidden md:block bg-daoblue py-3 px-4 rounded-xl text-white font-semibold text-center before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:rounded-xl before:border-2 before:border-daoblue before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0`, //  bg-[#314BA0] #0026CC #071F25
		signInButton: `relative -top-1 -left-1 hidden md:block bg-black py-3 px-4 rounded-xl text-white font-semibold text-center before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:rounded-xl before:border-2 before:border-black before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0`, //  bg-[#314BA0] #0026CC #071F25

		mobile: `md:hidden py-3 px-4 text-[#071F25] font-semibold text-3xl text-daoblue`
	};

	let menu = false;
</script>

{#if menu}
	<NavMobileOptions />
{/if}

<div class={style.navWrapper}>
	<div class={style.logoContainer}>
		<a href="/"><img class={style.logo} src="/images/Icono.jpeg" alt="" /></a>
		<!-- <a href="/"><img class={style.logo} src="/images/IconoNegro.png" alt="" /></a> -->
	</div>
	<div class={style.nav}>
		<a class={style.navItem} href="/">Home</a>
		<!-- <a class={style.navItem} href="/about">About</a> -->
		<a class={style.navItem} href="/faqs">FAQs</a>
		<a class={style.navItem} href="/marketplace">Marketplace</a>
	</div>
	<div class={style.user}>
		<a class={style.getStartedButton2} href="/signup">Get Started</a>
		<a class={style.signInButton} href="/marketplace">Sign In</a>

        <MobileNav/>
		<!-- <button class={style.mobile}>
			<img class="h-5 fill-daoblue" src="icons/menu-burger.svg" alt="">

			<svg
				class="h-5 w-5 fill-current"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
				xml:space="preserve"
			>
				<path
					d="M480 224H32c-17.673 0-32 14.327-32 32s14.327 32 32 32h448c17.673 0 32-14.327 32-32s-14.327-32-32-32zM32 138.667h448c17.673 0 32-14.327 32-32s-14.327-32-32-32H32c-17.673 0-32 14.327-32 32s14.327 32 32 32zM480 373.333H32c-17.673 0-32 14.327-32 32s14.327 32 32 32h448c17.673 0 32-14.327 32-32s-14.327-32-32-32z"
				/>
			</svg>
		</button> -->
	</div>
</div>
