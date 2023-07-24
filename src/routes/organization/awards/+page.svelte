<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ diplomas, main_url } = data);
</script>

<svelte:head>
	<title>Дипломы и награды | Санаторий «Зеленая роща»</title>
</svelte:head>

<section class="container p-4 mx-auto max-w-screen-2xl mt-28">
	<div class="flex flex-col text-center w-full mb-10">
		<h1 class="sm:text-4xl text-3xl font-bold font-condensed mb-4 text-gray-900">
			Дипломы и награды
		</h1>
		<p class="lg:w-2/3 mx-auto leading-relaxed text-lg">
			Мы гордимся своими успехами на республиканских и всероссийских форумах, выставках, и всегда
			стремимся становиться лучше
		</p>
	</div>
	<div class="container px-5 py-24 mx-auto grid grid-cols-1 xl:grid-cols-2 gap-4">
		<div class="flex flex-col gap-3">
			<div>
				<img
					alt="gallery"
					class="w-full object-cover h-full object-center block rounded-2xl"
					src={`${main_url}${diplomas[0].file.url}`}
				/>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
				<img
					alt="gallery"
					class="w-full object-cover h-full object-center block rounded-xl"
					src={`${main_url}${diplomas[2].file.url}`}
				/>
				<img
					alt="gallery"
					class="w-full object-cover h-full object-center block rounded-xl"
					src={`${main_url}${diplomas[3].file.url}`}
				/>
			</div>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
			<img
				alt="gallery"
				class="w-full object-cover h-full object-center block rounded-xl"
				src={`${main_url}${diplomas[4].file.url}`}
			/>
			<div class="flex flex-col gap-2">
				<img
					alt="gallery"
					class="w-full object-cover h-full object-center block rounded-xl"
					src={`${main_url}${diplomas[5].file.url}`}
				/>
				<img
					alt="gallery"
					class="w-full object-cover h-full object-center block rounded-xl"
					src={`${main_url}${diplomas[6].file.url}`}
				/>
			</div>
		</div>
	</div>
</section>
