<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.postcss';
</script>

<div class="bg-white">
	<Navbar />
	<main>
		<slot />
	</main>
	<Footer />
</div>
