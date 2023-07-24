<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ documents, insurances, organizations, main_url } = data);
</script>

<svelte:head>
	<title>Документы | Санаторий «Зеленая роща»</title>
</svelte:head>

<section class="container p-4 mx-auto max-w-screen-xl mt-28">
	<div class="flex flex-col text-center w-full mb-10">
		<h1 class="sm:text-4xl text-3xl font-bold font-condensed mb-4 text-gray-900">Документы</h1>
		<!-- <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Banh mi cornhole echo park skateboard authentic crucifix neutra
            tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon
            twee
        </p> -->
	</div>
	<div class="lg:w-2/3 w-full mx-auto overflow-auto">
		<table class="table-auto w-full text-left whitespace-no-wrap mb-8">
			<thead>
				<tr>
					<th
						class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl"
						>Документы</th
					>
				</tr>
			</thead>
			<tbody>
				{#each documents as document, idx}
					<tr>
						<td class="p-1 border-b border-gray">
							<a
								href={`${main_url}${document.file[0].url}`}
								target="_blank"
								class="w-full flex items-center px-4 py-3"
							>
								<div class="flex-none w-8 h-8 text-primary mr-4">
									<svg xmlns="http://www.w3.org/2000/svg" class="fill-current" viewBox="0 0 24 24"
										><path
											d="M11.363 2c4.155 0 2.637 6 2.637 6s6-1.65 6 2.457v11.543h-16v-20h7.363zm.826-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-2.628v3.686h.907v-1.472h1.49v-.732h-1.49v-.698h1.721v-.784zm-4.9 0h-1.599v3.686h1.599c.537 0 .961-.181 1.262-.535.555-.658.587-2.034-.062-2.692-.298-.3-.712-.459-1.2-.459zm-.692.783h.496c.473 0 .802.173.915.644.064.267.077.679-.021.948-.128.351-.381.528-.754.528h-.637v-2.12zm-2.74-.783h-1.668v3.686h.907v-1.277h.761c.619 0 1.064-.277 1.224-.763.095-.291.095-.597 0-.885-.16-.484-.606-.761-1.224-.761zm-.761.732h.546c.235 0 .467.028.576.228.067.123.067.366 0 .489-.109.199-.341.227-.576.227h-.546v-.944z"
										/></svg
									>
								</div>
								<span class="inline-block">
									{document.name}
								</span>
							</a>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<div class="my-10">
		<h4
			class="text-center sm:text-3xl text-2xl font-bold font-condensed mb-8 text-gray-900 leading-tight lg:mx-28"
		>
			Адреса и телефоны государственных учреждений, организаций и должностных лиц, к которым можно
			обратиться по вопросам качества оказания медицинских услуг в ООО Санаторий «Зеленая роща»
		</h4>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each organizations as organization, idx}
				<div class="border border-gray-200 rounded auto-rows-fr p-4 flex flex-col justify-between">
					<h5 class="font-semibold text-center mb-3 leading-tight">
						{organization.name}
					</h5>
					<p class="text-sm mb-2">{organization.address}</p>
					<a class="text-sm mb-2" href={`tel:${organization.telephone}`}>
						Телефон - <span class="italic">{organization.telephone}</span>
					</a>
					<p class="text-sm mb-2">
						Факс - <span class="italic">{organization.fax || ''}</span>
					</p>
					<p class="text-sm mb-2">
						Электронная почта - <a
							href={`mailto: ${organization.email}`}
							target="_blank"
							class="italic">{organization.email}</a
						>
					</p>
					<p class="text-sm mb-2">
						Адрес сайта - <a href={organization.website} target="_blank" class="italic"
							>{organization.website}</a
						>
					</p>
				</div>
			{/each}
		</div>
	</div>

	<div class="my-10">
		<h4 class="text-center sm:text-3xl text-2xl font-bold font-condensed mb-8 text-gray-900">
			Страховые медицинские организации
		</h4>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each insurances as insurance, idx}
				<div class="border border-gray-200 rounded auto-rows-fr p-4 flex flex-col justify-between">
					<h5 class="font-semibold text-center mb-3 leading-tight">
						{insurance.name}
					</h5>
					<p class="text-sm mb-2">
						Директор - <span class="italic">{insurance.director}</span>
					</p>
					<p class="text-sm mb-2">{insurance.address}</p>
					<p class="text-sm mb-2">
						Телефон - <span class="italic">{insurance.telephone || ''}</span>
					</p>
					<p class="text-sm mb-2">
						Отдел защиты прав застрахованных - <span class="italic"
							>{insurance.rights_telephone || ''}</span
						>
					</p>
					<p class="text-sm mb-2">
						<spaen class="font-bold">Горячая линия</spaen> -
						<span class="italic">{insurance.hotline || ''}</span>
					</p>
					<p class="text-sm mb-2">
						Адрес сайта - <a href={insurance.website} target="_blank" class="italic"
							>{insurance.website}</a
						>
					</p>
				</div>
			{/each}
		</div>
	</div>
	<div class="flex p-2 mt-4 md:w-1/2 w-full mx-auto">
		<img src="/partners_card.png" alt="Карта Партнера" />
		<!-- <a class="text-primary-light inline-flex items-center md:mb-2 lg:mb-0">Learn More
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a> -->
		<!-- <button class="flex ml-auto text-white bg-primary-light border-0 py-2 px-6 focus:outline-none hover:bg-primary rounded">Кнопка</button> -->
	</div>
</section>
