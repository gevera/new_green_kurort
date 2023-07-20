<section
	class="container mx-auto max-w-screen-xl my-12 md:my-24 rounded-none lg:rounded-3xl bg-center bg-no-repeat bg-cover"
	style="background-image: url(Главный-баннер.webp);"
>
	<div
		class="flex flex-col gap-4 bg-slate-800 bg-opacity-70 h-full w-full p-8 lg:p-20 rounded-none lg:rounded-3xl"
	>
		<h4 class="font-condensed text-3xl lg:text-5xl font-bold text-center lg:text-left text-white mb-10">
			Закажите обратный звонок
		</h4>
		<p class="text-white font-semibold">Оставьте заявку и наш специалист свяжется с Вами</p>
		<form on:submit|preventDefault={() => console.log('Submited!')} class="flex flex-col md:flex-row gap-4 items-center mt-10 mb-6">
			<input
				type="text"
				placeholder="Ваше имя"
				class="input input-bordered w-full max-w-xs rounded-full focus:ring-0 focus:outline-none focus:border-stone-400"
				required
			/>
			<input
				type="text"
				placeholder="Номер телефона"
				class="input input-bordered w-full max-w-xs rounded-full focus:ring-0 focus:outline-none focus:border-stone-400"
				required
			/>
			<button type="submit" class="btn btn-primary rounded-full normal-case btn-wide just">Заказать звонок</button>
		</form>
		<p class="text-white text-sm">
			Нажимая на кнопку, Вы даете согласие на <a
				href="/"
				class="underline underline-offset-4 hover:text-gray-200"
				>обработку своих персональных данных</a
			>
		</p>
	</div>
</section>
