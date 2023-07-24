<script lang="ts">
	import snarkdown from 'snarkdown';
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ rent, main_url } = data);
</script>

<svelte:head>
	<title>Аренда | Санаторий «Зеленая роща»</title>
</svelte:head>
<div
	class="hero min-h-[50vh] mt-20"
	style="background-image: url(https://files.green-kurort.ru/green_rosha/gallery/25.jpg);"
>
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold font-condensed text-white">Аренда</h1>
		</div>
	</div>
</div>
<section class="container p-4 mx-auto max-w-screen-xl my-12">
	<p class="max-w-2xl mx-auto leading-relaxed text-2xl mb-8 text-center font-condensed">
		Санаторий «Зелёная Роща» занимается сдачей в аренду коммерческой недвижимости, территории
		автобусов и парковочных мест
	</p>

	<div class="container mx-auto max-w-5xl">
		{@html snarkdown(rent)}
	</div>
</section>
