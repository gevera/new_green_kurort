<script lang="ts">
	import Close from '$lib/components/icons/Close.svelte';
	import { createEventDispatcher } from 'svelte';
	import { imask } from 'svelte-imask';
	let allow = false;

	const options = {
		mask: '+{7} (000) 000-00-00'
	};

	const dispatch = createEventDispatcher()

	let request = {
		name: '',
		telephone: ''
	};

	let showModal = false;

	const handleTelephone = ({ detail }) => {
		allow = false;
		if (detail.value.charAt(4) == '8') {
			detail.value = detail.value.replace('8', '');
		}
	};

	$: if (request.name.length != 0 && request.telephone.length == 18) {
		allow = true;
	} else {
		allow = false;
	}

	const handleSubmit = async () => {
		try {
			const response = await fetch('https://bot.skrymenu.com', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: request.name,
					telephone: request.telephone,
					message: `Перезвоните!`,
					time: new Date().toLocaleString(),
					group: 'green kurort main'
				})
			});

			const respAmoEmail = await fetch('https://postmail.invotes.com/send', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					// "Content-Type": "application/x-www-form-urlencoded",
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					access_token: '0wewushxdyh474sf8glakbyn',
					subject: 'green-kurort.ru',
					text: `name: ${request.name}, tel: ${request.telephone}`
				})
			});

			if (response.ok) {
				showModal = true;
				setTimeout(() => {
					showModal = false;
					request = {
						name: '',
						telephone: ''
					};
                    dispatch('sent')
				}, 3600);
			}
		} catch (error) {
			console.log(error);
		}
	};
</script>

<section
	id="callback"
	class="container mx-auto max-w-screen-xl rounded-none lg:rounded-3xl bg-center bg-no-repeat bg-cover"
	style="background-image: url(Закажите-обратный-звонок.webp);"
>
	<input type="checkbox" id="callback_modal" class="modal-toggle" bind:checked={showModal} />
	<div class="modal">
		<div class="modal-box">
			<div class="modal-action mt-0 mb-4">
				<label for="callback_modal" class="btn btn-sm btn-ghost btn-circle border border-gray-400">
					<div class="w-4 h-4">
						<Close />
					</div>
				</label>
			</div>
			<h3 class="font-bold text-lg text-center font-condensed my-4">
				{request.name}, Ваша информация отправлена.
			</h3>

			<p class="text-base text-center">
				Мы скоро с вами свяжемся по номеру телефона <span class="text-semibold"
					>{request.telephone}</span
				> !
			</p>
		</div>
	</div>
	<div
		class="flex flex-col gap-4 bg-slate-800 bg-opacity-70 h-full w-full p-8 lg:p-20 rounded-none lg:rounded-3xl"
	>
		<h4
			class="font-condensed text-3xl lg:text-5xl font-bold text-center lg:text-left text-white mb-10"
		>
			Закажите обратный звонок
		</h4>
		<p class="text-white font-semibold">Оставьте заявку и наш специалист свяжется с Вами</p>
		<form
			on:submit|preventDefault={handleSubmit}
			class="flex flex-col lg:flex-row gap-4 items-center mt-10 mb-6"
		>
			<input
				type="text"
				placeholder="Ваше имя"
				bind:value={request.name}
				class="input input-bordered w-full max-w-xs rounded-full focus:ring-0 focus:outline-none focus:border-stone-400"
				required
			/>
			<input
				type="tel"
				placeholder="+7 (000) 000-0000"
				use:imask={options}
				bind:value={request.telephone}
				on:accept={handleTelephone}
				class="input input-bordered w-full max-w-xs rounded-full focus:ring-0 focus:outline-none focus:border-stone-400"
				required
			/>
			<button
				type="submit"
				class="btn btn-primary hover:bg-green-500 rounded-full normal-case btn-wide text-white">Заказать звонок</button
			>
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
