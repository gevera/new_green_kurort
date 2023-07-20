<script>
	import ChevronRight from '$lib/components/icons/ChevronRight.svelte';
</script>

<section class="container mx-auto max-w-screen-xl my-12 md:my-24 p-4">
	<div class="flex flex-col md:flex-row gap-2 justify-between">
		<h3 class="lg:col-span-2 font-condensed text-5xl font-bold text-center lg:text-left mb-6">
			Новости
		</h3>
		<a
			href="/"
			class="btn btn-sm btn-ghost border border-gray-400 rounded-full normal-case font-bold font-condensed place-self-end"
			>Смотреть все <span class="w-4 h-4 text-gray-800">
				<ChevronRight />
			</span>
		</a>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
		<a href="/">
			<img src="Главный-баннер.webp" alt="Последняя новость" class="w-full rounded-2xl mb-10 hover:brightness-75" />
			<h6 class="font-condensed font-bold text-2xl hover:opacity-80">
				Новый график работы курортной поликлиники!
			</h6>
			<p class="text-gray-500 my-6 text-sm">
				Уважаемые гости нашего санатория! Рады сообщить, что Курортная поликлиника теперь работает с
				08:30 до 21:00 с понедельника по воскресение
			</p>
			<a
				href="/"
				class="underline underline-offset-8 text-primary font-condensed font-semibold hover:opacity-90"
				>Читать подробнее</a
			>
		</a>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
			<a href="/">
				<img
					src="Сероводородные-ванны.webp"
					alt="Последняя новость"
					class="w-full rounded-xl mb-6 hover:brightness-75"
				/>
				<h6 class="font-condensed font-bold hover:opacity-80">
					Ростуризм возвращает туристический кешбэк с 15 марта
				</h6>
			</a>
			<a class="place-self-end" href="/">
				<img
					src="Гостиница.webp"
					alt="Последняя новость"
					class="w-full rounded-xl mb-6 hover:brightness-75"
				/>
				<h6 class="font-condensed font-bold hover:opacity-80">
					Сертификат о вакцинации больше не требуется!
				</h6>
			</a>
		</div>
	</div>
</section>
