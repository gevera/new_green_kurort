<script lang="ts">
	import Reservation from '$lib/components/travelline/Reservation.svelte';
	import { onMount } from 'svelte';

	let loaded = false;

	onMount(() => {
		loaded = true;
	});
</script>

<svelte:head>
	<title>Онлайн бронирование | Санаторий «Зеленая роща»</title>
</svelte:head>

{#if loaded}
	<Reservation />
{/if}
