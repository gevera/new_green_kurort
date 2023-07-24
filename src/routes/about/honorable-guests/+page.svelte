<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ guests, main_url } = data);
</script>

<svelte:head>
	<title>Почетные гости | Санаторий «Зеленая роща»</title>
</svelte:head>

<section class="container p-4 mx-auto max-w-screen-xl mt-28">
	<div class="flex flex-col text-center w-full mb-10">
		<h1 class="sm:text-4xl text-3xl font-bold font-condensed mb-4 text-gray-900">Почетные гости</h1>
		<p class="lg:w-2/3 mx-auto leading-relaxed text-lg">
			Мы гордимся, что "Зелёная роща" принимает у себя людей, внесших большой вклад в развитие и
			процветание нашей страны. Мы всегда рады видеть вас у нас!
		</p>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-12">
		{#each guests as guest, idx}
			<div class="card w-full bg-white shadow-xl">
				<figure>
					<img src={`${main_url}${guest.image?.formats?.medium?.url}`} alt={guest.name} />
				</figure>
				<div class="card-body">
					<h2 class="card-title">{guest.name}</h2>
					<p>{guest.content}</p>
				</div>
			</div>
		{/each}
	</div>
</section>
