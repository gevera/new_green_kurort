<script lang="ts">
	import snarkdown from 'snarkdown';
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ med_data, main_url } = data);
</script>

<svelte:head>
	<title>Медицинские услуги | Санаторий «Зеленая роща»</title>
</svelte:head>

<section class="container p-4 mx-auto max-w-screen-xl mt-28">
	<h1 class="text-center text-3xl mb-8 font-condensed">Медицинские услуги</h1>
	<p class="max-w-2xl mx-auto leading-relaxed text-2xl mb-8 text-center font-condensed">
		Наши высококлассные специалисты найдут подход к каждому гостю и подберут эффективный комплекс
		процедур для вашего организма.
	</p>

	<div class="max-w-screen-lg mx-auto">
		<div class="flex flex-col gap-10 md:flex-row-reverse md:justify-between">
			<aside class="hidden md:block md:w-1/3 lg:w-1/4">
				<ul class="md:fixed bg-white p-2 z-20 rounded-xl shadow-md">
					{#each med_data as service, id}
						<li class="w-full mb-4">
							<a
								href={`/guests/treatment/#${id}`}
								class="btn btn-wide bg-white hover:btn-primary normal-case text-right"
								>{service.naimenovianie}</a
							>
						</li>
					{/each}
				</ul>
			</aside>
			<div class="flex-1">
				{#each med_data as service, id}
					<div id={String(id)} class="border-b-2 border-gray-200 py-10">
						<h2 class="text-left text-2xl uppercase">{service.naimenovianie}</h2>
						<img
							class="rounded-2xl"
							src={`${main_url}${service.photo?.url}`}
							alt={service.naimenovianie}
						/>
						<p class="bg-white p-4 rounded-sm my-10">{@html snarkdown(service.opisanie)}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
