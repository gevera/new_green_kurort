<script lang="ts">
	import Grid from '$lib/components/pages/main/Grid.svelte';
	import Hero from '$lib/components/pages/main/Hero.svelte';
	import Factors from '$lib/components/pages/main/Factors.svelte';
	import About from '$lib/components/pages/main/About.svelte';
	import Gallery from '$lib/components/pages/main/Gallery.svelte';
	import Booking from '$lib/components/pages/main/Booking.svelte';
	import Awards from '$lib/components/pages/main/Awards.svelte';
	import News from '$lib/components/pages/main/News.svelte';
	import Contacts from '$lib/components/pages/main/Contacts.svelte';
	import Callback from '$lib/components/pages/main/Callback.svelte';
</script>

<svelte:head>
	<title>Санаторий «Зеленая роща» | Сохраним здоровье вместе!</title>
</svelte:head>

<div>
	<Hero />
	<Grid />
	<Factors />
	<About />
	<Gallery />
	<Booking />
	<Awards />
	<News />
	<Contacts />
	<Callback />
</div>
