<script lang="ts">
	import Backbone from '$lib/components/icons/Backbone.svelte';
	import Cardio from '$lib/components/icons/Cardio.svelte';
	import Lungs from '$lib/components/icons/Lungs.svelte';
	import Neiro from '$lib/components/icons/Neiro.svelte';
	import Skin from '$lib/components/icons/Skin.svelte';
	import GridItem from '$lib/components/pages/main/GridItem.svelte';

	const services = [
		{
			title: 'Реабилитация после COVID-19 и пневмонии',
			img: 'https://files.green-kurort.ru/green_rosha/poly/covid.jpeg',
			url: '/guests/polyclinic',
			id: 1,
			logo: Lungs
			// content: CovidContent
		},
		{
			title: 'Кардиореабилитация',
			img: 'https://files.green-kurort.ru/green_rosha/poly/14.jpg',
			url: '/guests/polyclinic',
			id: 2,
			logo: Cardio
		},
		{
			title: 'Нейрореабилитация',
			img: 'https://files.green-kurort.ru/green_rosha/poly/neiro.png',
			url: '/guests/polyclinic',
			id: 3,
			logo: Neiro
		},
		{
			title: 'Косметология',
			img: 'https://files.green-kurort.ru/green_rosha/poly/13.jpg',
			url: '/guests/polyclinic',
			id: 4,
			logo: Skin
		},

		{
			title: 'Бальнеотерапия',
			img: 'https://files.green-kurort.ru/green_rosha/poly/11.jpg',
			url: '/guests/polyclinic',
			id: 5,
			logo: Backbone
			// content: Osteo
		},
		{
			title: 'Гастроэнтерология',
			img: 'https://files.green-kurort.ru/green_rosha/poly/12.jpg',
			url: '/guests/polyclinic',
			id: 6,
			logo: Backbone
			// content: Osteo
		}
	];
</script>

<svelte:head>
	<title>Поликлиника | Санаторий «Зеленая роща»</title>
</svelte:head>

<div
	class="hero min-h-[50vh] mt-20"
	style="background-image: url(https://files.green-kurort.ru/green_rosha/gallery/81.jpg);"
>
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1 class="mb-5 text-3xl md:text-5xl font-bold font-condensed text-white">
				Курортная поликлиника и SPA
			</h1>
		</div>
	</div>
</div>
<section class="container p-4 mx-auto max-w-screen-xl my-12">
	<div
		class="container px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12"
	>
		<div
			class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-8 lg:py-10"
		>
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
				{#each services as service, idx}
					<GridItem item={service} />
				{/each}
			</div>
		</div>
		<div class="flex flex-col my-6 lg:justify-between lg:flex-row md:my-12">
			<h2
				class="max-w-xl mb-5 font-sans text-xl font-medium tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group"
			>
				<span class="inline-block mb-1 sm:mb-4 font-condensed font-bold">
					Курортная поликлиника и SPA
				</span>
				<br class="hidden md:block" />
				<span class="font-condensed text-2xl md:text-4xl uppercase tracking-wide">Green Palace</span
				>
				<div
					class="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100"
				/>
			</h2>
			<p class="text-gray-700 text-lg lg:max-w-md">
				Здесь Вы можете посетить бассейн, фитнес, косметологические и медицинские процедуры. Наши
				высококлассные специалисты найдут подход к каждому гостю и подберут эффективный комплекс
				процедур для вашего организма.
			</p>
		</div>

		<div class="grid gap-4 grid-cols-1 lg:grid-cols-2 lg:max-w-screen-xl mb-6">
			<div class="flex flex-col items-center justify-center">
				<p class="mt-4 text-gray-500 dark:text-gray-400 text-lg">
					В числе главных оздоровительных факторов - уникальная сероводородная ванна, идентичная
					водам курорта "Мацеста" а г. Сочи, и питьевая минеральная вода "Хызыр", а так же наш
					бесподобный климат в самом центре города! Мы предоставляем процедуры для лица и тела, для
					отдыхающих гостей и по программе "Ночной профилакторий". Со всеми процедурами Вы можете
					ознакомиться на нашем сайте или по тел.: 8-917-400-07-54 / 225-22-70
				</p>
			</div>
			<div class="p-4">
				<iframe
					class="w-full"
					width="500"
					height="310"
					src="https://www.youtube.com/embed/Hw7LA9lv564"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>
			</div>
			<div class="p-4">
				<iframe
					class="w-full"
					width="500"
					height="310"
					src="https://www.youtube.com/embed/5guO5yHOEVc"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>
			</div>
			<div class="flex flex-col items-center justify-center">
				<p class="mt-4 text-gray-500 dark:text-gray-400 text-lg">
					Безопасное и эффективное лечение в санатории "Зеленая Роща" на летний период!
					Оздоровительные процедуры по профилактике гриппа и простуды. Программы реабилитации после
					болезни легких и после операций. Путевку со скидкой можно оформить от 3-х дней. В
					стоимость путевки входит проживание в выбранном номере, питание по выбранной системе,
					различные оздоровительные и лечебные процедуры ежедневно. подробности по тел.
					8800-200-21-90* *звонок бесплатный
				</p>
			</div>
		</div>
	</div>
</section>
