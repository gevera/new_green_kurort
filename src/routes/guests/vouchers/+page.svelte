<script lang="ts">
	import ProgrammHandicap from '$lib/components/icons/Programm_Handicap.svelte';
	import GridItem from '$lib/components/pages/main/GridItem.svelte';
	import BookingSearch from '$lib/components/travelline/BookingSearch.svelte';
	import { onMount } from 'svelte';

	const programs = [
		{
			id: 1,
			title: 'Лайт',
			//   logo: ProgrammLight,
			img: 'https://files.green-kurort.ru/green_rosha/outside/1.jpg',
			url: '/guests/vouchers',
			description: 'Путевка с минимальным лечением от 3 дней'
			//   content: Light,
		},
		{
			id: 2,
			title: 'Лечебная',
			//   logo: ProgrammHealing,
			img: 'https://files.green-kurort.ru/green_rosha/outside/2.jpg',
			url: '/guests/vouchers',
			description: 'Путевка с комплексным лечением от 7 дней'
			//   content: Healing,
		},
		{
			id: 3,
			title: 'Реабилитация',
			//   logo: ProgrammRehab,
			img: 'https://files.green-kurort.ru/green_rosha/outside/3.jpg',
			url: '/guests/vouchers',
			description: 'Реабилитационное лечения от 12 дней'
			//   content: Rehab,
		},
		{
			id: 4,
			title: 'Ночной профилакторий',
			//   logo: ProgrammNight,
			img: 'https://files.green-kurort.ru/green_rosha/outside/4.jpg',
			url: '/guests/vouchers',
			description: 'Путевка в ночное время'
			//   content: Night,
		},
		{
			id: 5,
			title: 'Курсовка',
			//   logo: ProgrammKursovka,
			img: 'https://files.green-kurort.ru/green_rosha/outside/5.jpg',
			url: '/guests/vouchers',
			description: 'Путевка без отрыва от основной деятельности от 8 дней'
			//   content: Kursovka,
		},
		{
			id: 6,
			title: 'Реабилитация после КОВИД-19',
			//   logo: ProgrammCovid,
			img: 'https://files.green-kurort.ru/green_rosha/gallery/37.jpg',
			url: '/guests/vouchers',
			description:
				'Санаторий «Зеленая Роща» осуществляет реабилитацию после КОВИД-19 по сертификатам'
			//   content: Covid,
		},
		{
			id: 7,
			title: 'Реабилитация детей-инвалидов',
			//   logo: ProgrammHandicap,
			img: 'https://files.green-kurort.ru/green_rosha/gallery/36.jpg',
			url: '/guests/vouchers',
			description:
				'Санаторий «Зеленая Роща» осуществляет реабилитацию детей-инвалидов по сертификатам'
			//   content: Handicap,
		},
		{
			id: 8,
			title: 'Программа легкое дыхание',
			//   logo: Lungs,
			img: 'https://files.green-kurort.ru/green_rosha/gallery/4.jpg',
			url: '/guests/vouchers',
			description: 'Реабилитация после КОВИД-19 без проживания от 7 дней'
			//   content: Breathing,
		}
	];

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Путевки | Санаторий «Зеленая роща»</title>
	<!-- <script type="text/javascript" async="" src="http://ibe.tlintegration.com/integration/loader.js"></script> -->
</svelte:head>

<div
	class="hero min-h-[50vh] mt-20"
	style="background-image: url(https://files.green-kurort.ru/green_rosha/gallery/30.jpg);"
>
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center text-neutral-content flex flex-col gap-4 w-full">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold font-condensed text-white">Путевки</h1>
		</div>
		{#if mounted}
			<div class="w-full z-20 max-w-screen-lg overflow-hidden">
				<BookingSearch />
			</div>
		{/if}
	</div>
</div>
<section class="container p-4 mx-auto max-w-screen-xl my-12">
	<p class="max-w-2xl mx-auto leading-relaxed text-2xl mb-8 text-center font-condensed">
		Перед покупкой путевки внимательно ознакомьтесь с особенностями программы, профилями лечения,
		типами питания. Пусть лечение и отдых принесут максимум пользы.
	</p>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 my-10 lg:my-16">
		{#each programs as program, idx}
			<GridItem item={program} />
		{/each}
	</div>
</section>
