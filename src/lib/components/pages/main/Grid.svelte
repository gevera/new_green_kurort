<script lang="ts">
	import GridItem from './GridItem.svelte';

	const menuItems = [
		{
			id: 1,
			title: 'Санаторно-курортные путёвки',
			url: '/',
			img: 'Санаторно-курортные-путевки.webp'
		},
		{
			id: 2,
			title: 'Курортная поликлиника',
			url: '/',
			img: 'Курортная-поликлиника.webp'
		},
		{
			id: 3,
			title: 'Организация мероприятий',
			url: '/',
			img: 'Организация-мероприятий.webp'
		},
		{
			id: 4,
			title: 'Проведение банкетов',
			url: '/',
			img: 'Проведение-банкетов.webp'
		},
		{
			id: 5,
			title: 'Гостиница',
			url: '/',
			img: 'Гостиница.webp'
		},
		{
			id: 6,
			title: 'Косметология «Green Palace»',
			url: '/',
			img: 'Косметология.webp'
		}
	];
</script>

<section class="container mx-auto max-w-screen-xl my-12 md:my-24 p-4">
	<div class="grid gap-5 grid-cols-1 lg:grid-cols-5 lg:min-h-[16rem] mb-10 ">
		<h2 class="lg:col-span-2 font-condensed text-5xl font-bold max-w-md text-center lg:text-left mx-auto">
			Сохраним здоровье вместе!
		</h2>
		<p class="lg:col-span-3 place-self-end lg:text-right">
			У нас есть всё необходимое как для организации лечения и отдыха, так и для проведения деловых,
			культурных или торжественных мероприятий
		</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each menuItems as item, idx (item.id)}
			<GridItem {item} />
		{/each}
	</div>
</section>
