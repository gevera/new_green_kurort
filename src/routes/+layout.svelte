<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.postcss';

	let y = 0;
	let lastY = 0;
	let showSlidingMenu = true;

	const handleScroll = (y: number) => {
		const dif = y - lastY;
		if (dif > 0) {
			showSlidingMenu = false;
		}
		if (dif < 0) {
			showSlidingMenu = true;
		}
		lastY = y;
	};

	$: handleScroll(y);
</script>

<svelte:window bind:scrollY={y} />;

<div class="bg-white">
	<Navbar {showSlidingMenu} />
	<main>
		<slot />
	</main>
	<Footer />
</div>
