<script lang="ts">
	import BookingSearch from '$lib/components/travelline/BookingSearch.svelte';
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<section class="hero min-h-screen" style="background-image: url(Главный-баннер.webp);">
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-white h-full flex flex-col justify-between">
		<div class="max-w-4xl flex-grow flex flex-col h-auto justify-center">
			<div class="font-bold font-condensed text-xl mb-4">Санаторий №1</div>
			<h1 class="mb-5 text-6xl md:text-8xl xl:text-[9rem] font-bold md:text-center font-condensed">
				Зелёная роща
			</h1>
			<ul class="flex flex-col gap-2 font-semibold font-condensed">
				<li>— Живописная территория 25 гектар</li>
				<li>— Свои сероводородные источники</li>
				<li>— Путевки от 3700 руб</li>
			</ul>
			<!-- <p class="mb-5">
				Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
				quasi. In deleniti eaque aut repudiandae et a id nisi.
			</p>
			<button class="btn btn-primary">Get Started</button> -->
		</div>
		{#if mounted}
			<div class="w-full z-20 max-w-screen-lg overflow-hidden ">
				<BookingSearch />
			</div>
		{/if}
	</div>
</section>
