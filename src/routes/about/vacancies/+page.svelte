<script lang="ts">
	import snarkdown from 'snarkdown';
	import { siteData } from '$lib/store';
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ vacancies, main_url } = data);
</script>

<svelte:head>
	<title>Вакансии | Санаторий «Зеленая роща»</title>
</svelte:head>

<section class="container p-4 mx-auto max-w-screen-xl mt-28">
	<div class="flex flex-col text-center w-full mb-10">
		<h1 class="sm:text-4xl text-3xl font-bold font-condensed mb-4 text-gray-900">Вакансии</h1>
		<p class="lg:w-2/3 mx-auto leading-relaxed text-lg">
			Стать частью нашей команды - реально. Любовь к своей работе и чуткое отношение к людям - вот
			основные критерии отбора.
		</p>
	</div>
	<div class="lg:w-4/6 mx-auto">
		<p class="mb-10">
			По вопросам трудоустройства обращаться по телефону <a
				href={`tel:${$siteData.telephone_2}`}
				class="text-primary">{$siteData.telephone_2}</a
			>,
			<a href="tel:8(927)342-05-08" class="text-primary">8(927)342-05-08</a>.
		</p>
		<p class="mb-10">
			Резюме высылать по адресу: <a href="mailto:personal@green-kurort.ru" class="text-primary"
				>personal@green-kurort.ru</a
			>
		</p>
		<p class="mb-10">
			Отдел по управлению персоналом ООО "Санаторий "Зеленая роща" работает ежедневно с понедельника
			по пятницу с 09:00 ч. до 17:00 ч.
		</p>

		{#if vacancies.length}
			<div class="mx-4 my-6">
				{#each vacancies as vacancy (vacancy.id)}
					<div class="mb-6">
						<h4 class="font-semibold text-xl">{vacancy?.Name || ''}</h4>
						<p class="unreset">{@html snarkdown(vacancy.Text)}</p>
					</div>
				{/each}
			</div>
		{:else}
			<h4 class="text-2xl">В данный момент нет свободных вакансии</h4>
		{/if}
	</div>
</section>
