<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ news, main_url } = data);

	const handleImage = (novosti: any) => {
		if (novosti?.image?.formats?.large) {
			return `${main_url}${novosti?.image?.formats?.large?.url}`;
		} else if (novosti?.image?.formats?.medium) {
			return `${main_url}${novosti?.image?.formats?.medium.url}`;
		} else if (novosti?.image?.formats?.small) {
			return `${main_url}${novosti?.image?.formats?.small?.url}`;
		} else {
			return '/logo-192.png';
		}
	};
</script>

<svelte:head>
	<title>Новости | Санаторий «Зеленая роща»</title>
</svelte:head>

<section class="container p-4 mx-auto max-w-screen-xl mt-28">
	<div class="flex flex-col text-center w-full mb-10">
		<h1 class="sm:text-4xl text-3xl font-bold font-condensed mb-4 text-gray-900">
			Новости санатория
		</h1>
	</div>
	<div class="flex flex-col gap-6 mx-auto p-1">
		{#each news as novosti (novosti.id)}
			<article
				id={novosti.id}
				class="border-b p-2 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 h-full place-content-center"
			>
				<div
					class="h-[20rem] md:h-[30rem] rounded-2xl bg-center bg-no-repeat bg-cover"
					style={`background-image: url(${handleImage(novosti)});`}
				/>
				<div>
					<h3
						class="title-font sm:text-3xl text-2xl my-4 font-semibold font-condensed text-gray-900 text-center"
					>
						{novosti?.title}
					</h3>
					<date class="text-sm text-gray-500 my-4"
						>{new Date(novosti.date).toLocaleDateString('ru-RU')}</date
					>
					<p class="my-4 leading-relaxed text-left text-sm">{novosti.content}</p>
				</div>
			</article>
			<!-- <article class="p-1 my-6">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
					<div class="w-full h-full max-h-[24rem] mx-auto p-2">
						<img
							class="object-cover object-center rounded-2xl bg-no-repeat"
							alt={novosti.title}
							src={handleImage(novosti)}
						/>
					</div>
					<div
						class="w-full flex flex-col md:items-start md:text-left items-center text-center"
					>
						<h1 class="title-font sm:text-3xl text-2xl my-4 font-semibold font-condensed text-gray-900">
							{novosti.title}
						</h1>
						<date class="text-md text-gray-500 my-4">{novosti.date}</date>
						<p class="mb-8 leading-relaxed text-left text-sm">{novosti.content}</p>
					</div>
				</div>
				<div class="max-w-xs mx-auto border-b-2" />
			</article> -->
		{/each}
	</div>
</section>
