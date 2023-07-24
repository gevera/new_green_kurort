<script lang="ts">
	import { siteData } from '$lib/store';
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ contacts, main_url } = data);

	$: parsedContacts = contacts.map((c: any) => {
		const [tel, exten] = c.telephone.split(/ доб. | вн. /);
		const [ext, _] = exten ? exten?.split(', ') : [];
		return { ...c, tel, ext, hreffer: ext ? [tel, ext].join(',') : tel };
	});
</script>

<svelte:head>
	<title>Контакты | Санаторий «Зеленая роща»</title>
</svelte:head>

<section class="container p-4 mx-auto max-w-screen-xl mt-28">
	<div class="">
		<h1 class="text-center text-3xl mb-8 font-condensed">Контакты</h1>
		<div class="flex flex-wrap items-center">
			<div class="hv-70 lg:w-2/3 md:w-1/2 w-full bg-gray-300 rounded-lg">
				<iframe
					title="Карта"
					class="rounded-3xl grayscale"
					src="https://yandex.ru/map-widget/v1/?ll=56.016524%2C54.716133&mode=search&oid=153901600785&ol=biz&z=17.27"
					width="100%"
					height="500"
					frameborder="1"
					allowfullscreen={true}
					style="position:relative;"
				/>
			</div>
			<div class="bg-white flex flex-col my-6 md:px-4 lg:pl-8 lg:w-1/3 md:w-1/2 w-full">
				<div class="rounded shadow-xl py-6 px-4">
					<address class="mb-4 not-italic">
						<div class="flex items-center border-b border-brand pb-1 mb-2">
							<div class="text-brand w-6 h-6 mr-4">
								<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
									><path
										d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"
									/></svg
								>
							</div>
							<h2 class="font-condensed font-semibold text-gray-900 tracking-widest text-xs">
								АДРЕС
							</h2>
						</div>
						<p class="text-center md:text-left py-2">
							{$siteData.address}
						</p>
					</address>
					<div class="mb-4">
						<div class="flex items-center border-b border-brand pb-1 mb-2">
							<div class="text-brand w-6 h-6 mr-4">
								<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
									><path
										d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"
									/></svg
								>
							</div>
							<h2 class="font-condensed font-semibold text-gray-900 tracking-widest text-xs">
								ЭЛЕКТРОННАЯ ПОЧТА
							</h2>
						</div>
						<a
							class="block text-center md:text-left py-2 transition duration-400 hover:no-underline hover:text-brand leading-relaxed"
							href="mail:green-kurort@green-kurort.ru">green-kurort@green-kurort.ru</a
						>
						<a
							class="block text-center md:text-left py-2 transition duration-400 hover:no-underline hover:text-brand leading-relaxed"
							href={`mail:${$siteData.email}`}>{$siteData.email}</a
						>
					</div>
					<div class="mb-4">
						<div class="flex items-center border-b border-brand pb-1 mb-2">
							<div class="text-brand w-6 h-6 mr-4">
								<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
									><path
										d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
									/></svg
								>
							</div>
							<h2 class="font-condensed font-semibold text-gray-900 tracking-widest text-xs">
								ТЕЛЕФОН
							</h2>
						</div>
						<ul class="leading-relaxed text-center md:text-left">
							<li>
								<a
									class="block transition duration-400 hover:no-underline hover:text-brand py-2"
									href={`tel:${$siteData.telephone_1}`}>{$siteData.telephone_1}</a
								>
							</li>
							<li>
								<a
									class="block transition duration-400 hover:no-underline hover:text-brand py-2"
									href={`tel:${$siteData.telephone_2}`}>{$siteData.telephone_2}</a
								>
							</li>
							<li>
								<a
									class="block transition duration-400 hover:no-underline hover:text-brand py-2"
									href={`tel:${$siteData.telephone_3}`}>{$siteData.telephone_3}</a
								>
							</li>
						</ul>
					</div>
					<div class="">
						<div class="flex items-center border-b border-brand pb-1 mb-2">
							<div class="text-brand w-6 h-6 mr-4">
								<svg xmlns="http://www.w3.org/2000/svg" class="fill-current" viewBox="0 0 24 24"
									><path
										d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z"
									/></svg
								>
							</div>
							<h2 class="font-condensed font-semibold text-gray-900 tracking-widest text-xs">
								РЕЖИМ РАБОТЫ
							</h2>
						</div>
						<p class="mt-1 text-center md:text-left">Пн. – Вс.: с 8:30 до 21:00</p>
					</div>
				</div>
			</div>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr my-10">
			{#each parsedContacts as contact (contact.id)}
				<div
					class="flex flex-col justify-between p-4 border bg-white border-gray-light rounded-lg shadow-lg"
				>
					<h5 class="text-xl border-b py-2 font-condensed">{contact.name}</h5>
					<div class="">
						<a
							class="block pt-4 text-brand-dark hover:text-brand cursor-pointer text-center"
							href={`tel:${contact.hreffer}`}>{contact.telephone}</a
						>
					</div>
				</div>
			{/each}
		</div>
		<!-- <Form /> -->
	</div>
</section>
