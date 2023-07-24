<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ activities, main_url } = data);
</script>

<svelte:head>
	<title>Мероприятия | Санаторий «Зеленая роща»</title>
</svelte:head>

<section class="container p-4 mx-auto max-w-screen-2xl mt-28">
	<div class="flex flex-col border-b-2">
		<div class="flex items-center flex-wrap sm:flex-row flex-col py-6 mb-4">
			<h2 class="sm:w-2/5 text-gray-900 font-bold font-condensed text-3xl mb-2 sm:mb-0">
				Мероприятия
			</h2>
			<p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
				Санаторий может стать не только местом отдыха и лечения, но и площадкой для деловых или
				торжественных мероприятий. Наш опыт и оснащение позволяют организовать «под ключ» любое
				событие – форум, конференцию, семинар, переговоры, а также праздники – от детского дня
				рождения до свадьбы. Гарантией безупречной организации является большой опыт и слаженная
				работа коллектива
			</p>
		</div>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12 my-12">
		{#each activities as activity (activity.id)}
			<div class="p-4 w-full sm:mb-0 mb-6">
				<div class="rounded-lg h-64 overflow-hidden">
					<img
						alt={activity?.name}
						class="object-cover object-center h-full w-full"
						src={`${main_url}${activity?.photo?.url}` || 'noimage.jpg'}
					/>
				</div>
				<div class="p-4">
					<h2 class="text-xl font-bold font-condensed text-gray-900 mt-5">
						{activity?.name || ''}
					</h2>
					<p class="text-sm mt-2 leading-4">
						{activity?.content || ''}
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>
