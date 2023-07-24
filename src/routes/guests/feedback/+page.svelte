<script lang="ts">
	import Close from '$lib/components/icons/Close.svelte';
	import { imask } from 'svelte-imask';
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ predlojeniyas, main_url } = data);

	let allow = false;

	const options = {
		mask: '+{7} (000) 000-00-00'
	};

	let modalOpened = false;
	let request = {
		name: '',
		telephone: '',
		text: ''
	};

	const handleTelephone = ({ detail }) => {
		allow = false;
		if (detail.value.charAt(4) == '8') {
			detail.value = detail.value.replace('8', '');
		}
	};

	const handleSubmit = async () => {
		try {
			const r = await fetch(`${main_url}/kurort-predlojeniyas`, {
				method: 'POST',
				headers: new Headers({
					'Content-Type': 'application/json'
				}),
				body: JSON.stringify({
					name: request.name,
					phone: request.telephone,
					content: request.text,
					show: false,
					date: new Date().toISOString().slice(0, 10)
				})
			});
			if (r.ok) {
				modalOpened = false;
			}
		} catch (error) {
			console.log(error);
		}
	};

	$: if (request.text.length > 5 && request.name.length != 0 && request.telephone.length == 18) {
		allow = true;
	} else {
		allow = false;
	}
</script>

<svelte:head>
	<title>Отзывы | Санаторий «Зеленая роща»</title>
</svelte:head>

<section class="container p-4 mx-auto max-w-screen-xl mt-28">
	<h1 class="sm:text-4xl text-center text-3xl font-medium title-font mb-4 text-gray-900">Отзывы</h1>

	<div class="my-12 mx-auto text-center">
		<label for="my_modal" class="btn btn-primary btn-block normal-case max-w-xs mx-auto"
			>Оставить отзыв</label
		>
		<input type="checkbox" id="my_modal" class="modal-toggle" bind:checked={modalOpened} />
		<div class="modal">
			<div class="modal-box bg-white">
				<div class="modal-action mt-0 mb-2">
					<label for="my_modal" class="btn btn-ghost btn-sm btn-circle border border-gray-300">
						<div class="h-4 w-4">
							<Close />
						</div>
					</label>
				</div>
				<h3 class="font-bold text-lg font-condensed mb-6">Форма отзыва</h3>
				<form on:submit|preventDefault={handleSubmit} class="flex flex-col gap-1">
					<input
						type="text"
						class="input input-bordered rounded-xl focus:ring-0 focus:outline-none focus:border-gray-400"
						required
						placeholder="Имя"
						bind:value={request.name}
					/>
					<input
						use:imask={options}
						on:accept={handleTelephone}
						bind:value={request.telephone}
						required
						name="phone"
						placeholder="+7 (000) 000-0000"
						type="tel"
						class="input input-bordered rounded-xl focus:ring-0 focus:outline-none focus:border-gray-400"
					/>

					<textarea
						class="textarea textarea-bordered rounded-xl focus:ring-0 focus:outline-none focus:border-gray-400"
						bind:value={request.text}
						required
						rows="4"
						placeholder="Текст отзыва"
					/>
					<button
						class="btn btn-block btn-primary normal-case mt-6 md:mt-10"
						type="submit"
						disabled={!allow}>Отправить</button
					>
				</form>
			</div>
		</div>
		<div class="my-12">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center -m-4">
				{#each predlojeniyas as review, idx}
					<div class="p-4 w-full">
						<div class="h-full bg-gray-100 p-8 rounded-2xl shadow-xl">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								class="block w-5 h-5 text-gray-400 mb-4"
								viewBox="0 0 975.036 975.036"
							>
								<path
									d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"
								/>
							</svg>
							<p class="leading-relaxed mb-4 italic text-left">{review?.content}</p>
							<div class="text-right">
								<span class="flex-grow flex flex-col pl-4">
									<span class="title-font font-medium text-gray-900">{review?.name}</span>
									<span class="text-gray-500 text-sm">{review?.date}</span>
								</span>
							</div>
							{#if review.otvet}
								<div class="border-t-2 mt-2 pt-2">
									<p class="leading-relaxed mb-4 italic text-left">{review?.otvet}</p>
								</div>
								<div class="inline-flex items-center">
									<span class="flex-grow flex flex-col pl-4">
										<span class="title-font font-medium text-gray-900"
											>{review?.otvetchik || 'Администрация'}</span
										>
									</span>
								</div>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
