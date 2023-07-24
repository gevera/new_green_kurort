<script lang="ts">
	import { siteData } from '$lib/store';
	import MenuItems from './MenuItems.svelte';
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
				href="https://special.green-kurort.ru"
				target="_blank"
				class="btn btn-sm btn-ghost border border-gray-400 rounded-full normal-case font-bold font-condensed"
				>Версия для слабовидящих <span class="w-4 h-4 text-gray-800">
					<ChevronRight />
				</span>
			</a>
		</div>
	</div>

	<MenuItems />

	<div class="bg-kurort-800 text-white p-4">
		<div
			class="flex flex-col md:flex-row gap-4 justify-between items-center max-w-screen-xl mx-auto"
		>
			<div class="text-sm font-condensed">
				© {new Date().getFullYear()} «Зеленая роща»
			</div>
			<div class="flex gap-3 text-white items-center">
				<a href={`tel:${$siteData.telephone_2}`} class="w-4 h-4 hover:opacity-60">
					<Phone />
				</a>
				<a href={$siteData.vk} target="_blank" class="w-5 h-5 pt-1 hover:opacity-60">
					<Vk />
				</a>
				<a href={$siteData.whatsapp} target="_blank" class="w-4 h-4 hover:opacity-60">
					<Whastapp />
				</a>
			</div>
		</div>
	</div>
</footer>
