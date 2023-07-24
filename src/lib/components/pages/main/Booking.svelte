<script>

	import { goto } from "$app/navigation";

</script>
<section
	class="container mx-auto max-w-screen-xl my-12 md:my-24 p-4 md:p-8 lg:p-16 bg-stone-800 rounded-none lg:rounded-3xl"
>
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
		<div class="flex flex-col gap-10">
			<h3
				class="font-condensed text-3xl lg:text-5xl font-bold max-w-md text-center lg:text-left lg:mb-16 mx-auto lg:m-0 text-white"
			>
				Бронирование путёвок
			</h3>
			<ul class="text-white font-condensed">
				<li>— Путевки от 3700 руб</li>
				<li>— Дневное лечение 1500 руб/день</li>
				<li>— Аренда территории 3500 руб/час</li>
				<li>— Банкет от 2800 руб</li>
				<li>— Проживание от 1700 руб</li>
			</ul>
		</div>
		<div class="lg:col-span-2 flex flex-col gap-4">
			<img
				src="Главный-баннер.webp"
				alt="Бронирование"
				class="h-24 w-full rounded-xl object-cover"
			/>
			<form
				class="grid grid-cols-1 md:grid-cols-2 gap-2"
				on:submit|preventDefault={() => goto('/booking')}
			>
				<div class="form-control w-full">
					<label class="label">
						<span class="label-text text-stone-400 text-xs">Заезд</span>
					</label>
					<input
						type="date"
						placeholder="Type here"
						class="input input-bordered w-full rounded-full bg-stone-800 border-stone-400 text-white focus:ring-0 focus:outline-none focus:border-stone-400"
					/>
				</div>
				<div class="form-control w-full">
					<label class="label">
						<span class="label-text text-stone-400 text-xs">Выезд</span>
					</label>
					<input
						type="date"
						placeholder="Type here"
						class="input input-bordered w-full rounded-full bg-stone-800 border-stone-400 text-white focus:ring-0 focus:outline-none focus:border-stone-400"
					/>
				</div>
				<div class="form-control w-full">
					<label class="label">
						<span class="label-text text-stone-400 text-xs">Гости</span>
					</label>
					<select
						class="select select-bordered w-full rounded-full bg-stone-800 border-stone-400 text-white focus:ring-0 focus:outline-none focus:border-stone-400"
					>
						<option value="1">1 Взрослый</option>
						<option value="2">2 Взрослых</option>
						<option value="3">3 Взрослых</option>
						<option value="4">4 Взрослых</option>
					</select>
				</div>
				<button
					class="btn btn-primary rounded-full place-self-end btn-block normal-case"
					type="submit">Найти путёвку</button
				>
			</form>
		</div>
	</div>
</section>
