<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ partners, main_url } = data);
</script>

<svelte:head>
	<title>Наши Партнёры | Санаторий «Зеленая роща»</title>
</svelte:head>

<section class="container p-4 mx-auto max-w-screen-xl mt-28">
	<h1 class="sm:text-4xl text-center text-3xl font-bold font-condensed mb-4 text-gray-900">
		Наши Партнёры
	</h1>
	<p class="lg:w-2/3 mx-auto leading-relaxed text-lg text-center">
		Построение взаимовыгодных отношений с партнёрами является ключевым этапом в достижении успеха.
		Мы всегда готовы обсудить вопросы сотрудничества.
	</p>

	<div
		class="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:px-24 lg:px-40 gap-4 sm:gap-12 md:gap-16 mt-8"
	>
		{#each partners as partner, idx}
			<div>
				<img
					src={`${main_url}${partner.image?.formats?.thumbnail?.url}`}
					alt={partner.name}
					class="object-contain"
				/>
			</div>
		{/each}
	</div>
</section>