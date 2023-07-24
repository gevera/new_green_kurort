<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ admins, fetchedWorkers, main_url } = data);
</script>

<svelte:head>
	<title>Сотрудники | Санаторий «Зеленая роща»</title>
</svelte:head>

<section class="container p-4 mx-auto max-w-screen-xl mt-28">
	<div class="flex flex-col text-center w-full mb-10">
		<h1 class="sm:text-4xl text-3xl font-bold font-condensed mb-4 text-gray-900">Сотрудники</h1>
		<p class="lg:w-2/3 mx-auto leading-relaxed text-lg">
			Мы гордимся нашими сотрудниками. Каждый из них вносит важный вклад в укрепление здоровья
			гостей нашего санатория.
		</p>
	</div>

	<div class="lg:w-4/6 mx-auto mb-12">
		<h2 class="text-2xl mb-5">ГРАФИК РАБОТЫ</h2>
		<p class="mb-2">
			<b>Администрация:</b><br />
			08:30-17:30 (перерыв 13:00-14:00; сб., вс. - выходные)<br />
		</p>
		<p class="mb-2">
			<b>Медицинский персонал:</b><br />
			08:30-17:00 (перерыв 13:00-13:30)<br />
		</p>
		<p class="mb-2">
			<b>Дежурства врачей:</b><br />
			Пн - Пт 16:30 – 08:30<br />
			Сб - Вс 08:30 – 08:30<br />
		</p>
		<p class="mb-2">
			<b>Оказание платных медицинских услуг:</b><br />
			08:30 – 20:00<br />
		</p>
	</div>

	<div class="max-w-screen-xl mx-auto">
		{#if admins?.length}
			<h2 class="text-2xl mb-6 uppercase text-center">Администрация</h2>
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
				{#each admins as admin (admin.id)}
					<div
						class="border border-gray-200 rounded auto-rows-fr p-4 flex flex-col justify-between"
					>
						<h5 class="font-semibold text-center mb-3 leading-tight">
							{admin.name}
						</h5>
						<p class="text-sm mb-2">{admin.address}</p>
						<a class="text-sm mb-2" href={`tel:${admin.telephone}`}>
							Телефон - <span class="italic">{admin.telephone}</span>
						</a>
						<p class="text-sm mb-2">
							Факс - <span class="italic">{admin.fax || ''}</span>
						</p>
						<p class="text-sm mb-2">
							Электронная почта - <a href={`mailto: ${admin.email}`} target="_blank" class="italic"
								>{admin.email}</a
							>
						</p>
						<p class="text-sm mb-2">
							Адрес сайта - <a href={admin.website} target="_blank" class="italic"
								>{admin.website}</a
							>
						</p>
					</div>
				{/each}
			</div>
		{/if}

		{#if fetchedWorkers?.Meditinza?.Workers?.length}
			<h2 class="text-2xl mb-10 pb-10 uppercase text-center">Медицинская часть</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
				{#each fetchedWorkers.Meditinza.Workers as worker (worker.id)}
					<div>
						<img
							src={`${main_url}${worker.Photo?.url}`}
							alt={worker.Photo.name}
							class="rounded-2xl rounded-bl rounded-tr"
						/>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>
