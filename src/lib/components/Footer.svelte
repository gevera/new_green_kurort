<script lang="ts">
	import ChevronRight from './icons/ChevronRight.svelte';
	import Logo from './icons/Logo.svelte';
	import Phone from './icons/Phone.svelte';
	import Vk from './icons/Vk.svelte';
	import Whastapp from './icons/Whastapp.svelte';
</script>

<footer class="mt-16">
	<div class="border-t border-b py-4">
		<div
			class="flex flex-col gap-4 md:flex-row max-w-screen-lg mx-auto items-center justify-between px-6 lg:px-0"
		>
			<a href="/" class="min-w-[12rem] text-kurort-800 hover:text-primary p-4">
				<Logo />
			</a>
			<div class="font-condensed italic text-gray-400 font-bold">“Сохраним здоровье вместе!”</div>

			<a
				href="/"
				class="btn btn-sm btn-ghost border border-gray-400 rounded-full normal-case font-bold font-condensed"
				>Версия для слабовидящих <span class="w-4 h-4 text-gray-800">
					<ChevronRight />
				</span>
			</a>
		</div>
	</div>
	<div class="grid grid-cols-1 text-center sm:grid-cols-2 lg:grid-cols-4 gap-4 p-10 justify-evenly max-w-screen-xl mx-auto">
		<div class="flex flex-col gap-1 sm:text-left">
			<span class="footer-title normal-case font-condensed text-xl">Гостям</span>
			<a href="/" class="link link-hover font-condensed font-bold text-sm">Курортная поликлиника</a>
			<a href="/" class="link link-hover font-condensed font-bold text-sm">Номерной фонд</a>
			<a href="/" class="link link-hover font-condensed font-bold text-sm">Путевки</a>
			<a href="/" class="link link-hover font-condensed font-bold text-sm">Лечение</a>
			<a href="/" class="link link-hover font-condensed font-bold text-sm">Аренда</a>
			<a href="/" class="link link-hover font-condensed font-bold text-sm">Контакты</a>
			<a href="/" class="link link-hover font-condensed font-bold text-sm">Отзывы</a>
		</div>
		<div class="flex flex-col gap-1 sm:text-left">
			<span class="footer-title normal-case font-condensed text-xl">О нас</span>
			<a href="/" class="link link-hover font-condensed font-bold text-sm">Новости</a>
			<a href="/" class="link link-hover font-condensed font-bold text-sm">Фотогалерея</a>
			<a href="/" class="link link-hover font-condensed font-bold text-sm">История</a>
			<a href="/" class="link link-hover font-condensed font-bold text-sm">Почетные гости</a>
			<a href="/" class="link link-hover font-condensed font-bold text-sm">Сотрудники</a>
			<a href="/" class="link link-hover font-condensed font-bold text-sm">Вакансии</a>
		</div>
		<div class="flex flex-col gap-1 sm:text-left">
			<span class="footer-title normal-case font-condensed text-xl">Мероприятия и отдых</span>
			<a href="/" class="link link-hover font-condensed font-bold text-sm">Бассейн</a>
			<a href="/" class="link link-hover font-condensed font-bold text-sm">Досуг для отдыхающих</a>
			<a href="/" class="link link-hover font-condensed font-bold text-sm">Мероприятия</a>
			<a href="/" class="link link-hover font-condensed font-bold text-sm">Площадки</a>
			<a href="/" class="link link-hover font-condensed font-bold text-sm">Детям</a>
			<a href="/" class="link link-hover font-condensed font-bold text-sm">Банкеты</a>
			<a href="/" class="link link-hover font-condensed font-bold text-sm">Банкетное меню</a>
		</div>
		<div class="flex flex-col gap-1 sm:text-left">
			<span class="footer-title normal-case font-condensed text-xl">Об организации</span>
			<a href="/" class="link link-hover font-condensed font-bold text-sm">Дипломы и награды</a>
			<a href="/" class="link link-hover font-condensed font-bold text-sm">Документы</a>
			<a href="/" class="link link-hover font-condensed font-bold text-sm">Цены</a>
			<a href="/" class="link link-hover font-condensed font-bold text-sm">Закупки</a>
			<a href="/" class="link link-hover font-condensed font-bold text-sm">Партнеры</a>
			<a href="/" class="link link-hover font-condensed font-bold text-sm">3D Тур</a>
		</div>
	</div>

	<div class="bg-kurort-800 text-white p-4">
		<div
			class="flex flex-col md:flex-row gap-4 justify-between items-center max-w-screen-xl mx-auto"
		>
			<div class="text-sm font-condensed">
				© {new Date().getFullYear()} «Зеленая роща»
			</div>
			<div class="flex gap-3 text-white items-center">
				<a href="tel:" class="w-4 h-4 hover:opacity-60">
					<Phone />
				</a>
				<a href="/" target="_blank" class="w-5 h-5 pt-1 hover:opacity-60">
					<Vk />
				</a>
				<a href="/" target="_blank" class="w-4 h-4 hover:opacity-60">
					<Whastapp />
				</a>
			</div>
		</div>
	</div>
</footer>
