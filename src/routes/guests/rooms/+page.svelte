<script lang="ts">
	import Cleaning from '$lib/components/icons/Cleaning.svelte';
	import Fridge from '$lib/components/icons/Fridge.svelte';
	import Shower from '$lib/components/icons/Shower.svelte';
	import Tv from '$lib/components/icons/TV.svelte';
	import Towel from '$lib/components/icons/Towel.svelte';

	const rooms = [
		{
			name: 'Двухместный двухкомнатный семейный ',
			corp: 'Корпус 4',
			text: 'комфортабельный двухкомнатный номер, состоящий из небольшой прихожей, гостиной и спальной комнаты.',
			img: '/rooms/1.jpg'
		},
		{
			name: 'Двухместный люкс',
			corp: 'Корпус 3',
			text: 'Комфортабельный двухкомнатный номер, состоящий из небольшой прихожей, гостиной и спальной комнаты.',
			img: '/rooms/2.jpg'
		},
		{
			name: 'Двухместный стандартный',
			corp: 'Корпус 1',
			text: 'Уютные однокомнатные номера, состоящие из небольшой прихожей и спальной комнаты. В номерах удобная мебель, 2 кровати.',
			img: '/rooms/3.jpg'
		},
		{
			name: 'Двухместный стандартный',
			corp: 'Корпус 2',
			text: 'Уютный однокомнатный номер, состоящий из небольшой прихожей, гостиной и спальной комнаты. В номере удобная мебель, 2 кровати.',
			img: '/rooms/4.jpg'
		},
		{
			name: 'Двухместный стандартный',
			corp: 'Корпус 3',
			text: 'Уютные однокомнатные номера, состоящие из небольшой прихожей и спальной комнаты. В номерах удобная мебель, 2 кровати.',
			img: '/rooms/5.jpg'
		},
		{
			name: 'Двухместный стандартный',
			corp: 'Корпус 4',
			text: 'Уютные однокомнатные номера, состоящие из небольшой прихожей и спальной комнаты. В номерах удобная мебель, 2 кровати.',
			img: '/rooms/6.jpg'
		},
		{
			name: 'Одноместный двухкомнатный семейный',
			corp: 'Корпус 4',
			text: 'Уютный однокомнатный номер, состоящий из небольшой прихожей и спальной комнаты. В номере удобная мебель, 1 кровать.',
			img: '/rooms/7.jpg'
		},
		{
			name: 'Одноместный люкс',
			corp: 'Корпус 1',
			text: 'Комфортабельные двухкомнатные номера, состоящие из небольшой прихожей, гостиной и спальной комнаты с одной или двумя кроватями.',
			img: '/rooms/8.jpg'
		},
		{
			name: 'Одноместный люкс',
			corp: 'Корпус 2',
			text: 'Комфортабельный двухкомнатный номер, состоящий из небольшой прихожей, гостиной и спальной комнаты. В номере удобная современная мебель, 1 кровать.',
			img: '/rooms/9.jpg'
		},
		{
			name: 'Одноместный стандартный',
			corp: 'Корпус 1',
			text: 'Уютный однокомнатный номер, состоящий из небольшой прихожей и спальной комнаты. В номере удобная мебель, 1 кровать.',
			img: '/rooms/10.jpg'
		},
		{
			name: 'Одноместный стандартный',
			corp: 'Корпус 2',
			text: 'Уютный однокомнатный номер, состоящий из небольшой прихожей и спальной комнаты. В номере удобная мебель, 1 кровать.',
			img: '/rooms/11.jpg'
		},
		{
			name: 'Одноместный стандартный',
			corp: 'Корпус 3',
			text: 'Уютный однокомнатный номер, состоящий из небольшой прихожей и спальной комнаты. В номере удобная мебель, 1 кровать.',
			img: '/rooms/12.jpg'
		},
		{
			name: 'Одноместный стандартный',
			corp: 'Корпус 4',
			text: 'Уютный однокомнатный номер, состоящий из небольшой прихожей и спальной комнаты. В номере удобная мебель, 1 кровать.',
			img: '/rooms/13.jpg'
		}
	];
</script>

<svelte:head>
	<title>Номерной фонд | Санаторий «Зеленая роща»</title>
</svelte:head>

<div class="hero min-h-[50vh] mt-20" style="background-image: url(/fond.jpg);">
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold font-condensed text-white">Номерной фонд</h1>
		</div>
	</div>
</div>

<section class="container p-4 mx-auto max-w-screen-xl my-12">
	<h3 class="max-w-2xl mx-auto leading-relaxed text-2xl mb-8 text-center font-condensed">
		Номерной фонд представлен номерами трех видов
	</h3>
	<ul class="mx-auto text-center flex flex-col md:flex-row gap-6 text-base justify-center p-4">
		<li class="px-2 py-6 border-b-2 border-gray-200 bg-white">
			<h4 class="text-xl font-semibold font-condensed">Одноместный стандарт</h4>
			<p>
				Представляет собой уютную комнату с одной кроватью. Кроме спальни в номере есть небольшая
				прихожая.
			</p>
		</li>
		<li class="px-2 py-4 border-b-2 border-gray-200 bg-white">
			<h4 class="text-xl font-semibold font-condensed">Двухместный стандарт</h4>
			<p>
				В небольшой спальне гости найдут удобную мебель и две кровати. Уют комнате также придает
				небольшая прихожая.
			</p>
		</li>
		<li class="px-2 py-4 border-b-2 border-gray-200 bg-white">
			<h4 class="text-xl font-semibold font-condensed">Премиум</h4>
			<p>
				Номера этой категории разделены на две комнаты – гостиную с прихожей и спальню с одной или
				двумя кроватями.
			</p>
		</li>
	</ul>
	<div class="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
		{#each rooms as room}
			<a
				class="w-full bg-white rounded-lg p-2 shadow-lg hover:shadow-xl cursor-pointer"
				href="/booking"
				target="_blank"
			>
				<div class="rounded-lg h-96 overflow-hidden w-full">
					<img
						alt="content"
						class="object-cover object-center h-full w-full"
						src={`https://files.green-kurort.ru/green_rosha${room.img}`}
					/>
				</div>
				<div class="flex flex-col mt-6">
					<div class="text-center sm:py-4">
						<!-- <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div> -->
						<div class="flex flex-col items-center text-center justify-center">
							<h2 class="font-medium title-font text-gray-900 text-lg">
								{room.name}
							</h2>
							<p class="lowercase tracking-wide text-gray-600">{room.corp}</p>
							<div class="w-12 h-1 bg-brand rounded mt-2 mb-4" />
							<p class="text-base">{room.text}</p>
						</div>
					</div>
					<div class="sm:py-8 mt-4 pt-4 sm:mt-0 text-center sm:text-left">
						<div class="grid grid-cols-3 gap-3 text-brand leading-tight">
							<div class="flex flex-col items-center">
								<svg
									class="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									><path
										fill-rule="evenodd"
										d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
										clip-rule="evenodd"
									/></svg
								>
								<h6 class="text-center mt-1">Wi-Fi</h6>
							</div>
							<div class="flex flex-col items-center">
								<div class="w-7 h-5">
									<Towel />
								</div>
								<h6 class="text-center mt-1">Смена полотенец и белья</h6>
							</div>
							<div class="flex flex-col items-center">
								<div class="w-6 h-6">
									<Cleaning />
								</div>
								<h6 class="text-center mt-1">Уборка номера</h6>
							</div>
							<div class="flex flex-col items-center">
								<div class="w-6 h-6">
									<Tv />
								</div>
								<h6 class="text-center mt-1">Телевизор</h6>
							</div>
							<div class="flex flex-col items-center">
								<div class="w-4 h-6">
									<Fridge />
								</div>
								<h6 class="text-center mt-1">Мини-холодильник</h6>
							</div>
							<div class="flex flex-col items-center">
								<div class="w-4 h-6">
									<Shower />
								</div>
								<h6 class="text-center mt-1">Санузел с душем</h6>
							</div>
						</div>
						<!-- <p class="leading-relaxed text-lg mb-4">
                  Meggings portland fingerstache lyft, post-ironic fixie man bun banh
                  mi umami everyday carry hexagon locavore direct trade art party.
                  Locavore small batch listicle gastropub farm-to-table lumbersexual
                  salvia messenger bag. Coloring book flannel truffaut craft beer
                  drinking vinegar sartorial, disrupt fashion axe normcore meh
                  butcher. Portland 90's scenester vexillologist forage post-ironic
                  asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst
                  before they sold out four loko. 3 wolf moon brooklyn.
                </p> -->
						<!-- <a class="text-brandinline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a> -->
					</div>
				</div>
			</a>
		{/each}
	</div>

	<div id="rules" class="my-10 max-w-xl mx-auto flex flex-col gap-4 justify-center">
		<h4 class="text-center mb-8 text-2xl font-condensed font-semibold">Правила заcеления</h4>
		<ul class="list-inside list-decimal px-4 text-lg">
			<li class="mb-2">Расчетный час 12:00.</li>
			<li class="mb-2">
				Дополнительное время в случае позднего выезда рассчитываеться в следующем порядке: при
				продлении до 12 часов с момента расчетного часа оплачивается 50% от стоимости суток; при
				продлении более 12 часов с момента расчетного часа оплачивается 100% от стоимости суток.
			</li>
			<li class="mb-2">
				При заселении детей от 0 до 7 лет без предоставления койко-места проживание бесплатно.
			</li>

			<li class="mb-2">Возврат при досрочном выезде производится согласно условиям договора.</li>
			<li class="mb-2">При бронировании обязательная предоплата составляет 1 суток проживания.</li>
			<li class="mb-2">
				Без внесения предоплаты (без брони) заселение производится по факту наличия свободных
				номеров.
			</li>
			<li class="mb-2">
				Согласно п.1 статьи 146 Налогового кодекса РФ гостиничные услуги облагаются налогом на
				добавленную стоимость в размере 20%.
			</li>
		</ul>
	</div>
</section>
