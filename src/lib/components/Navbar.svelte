<script lang="ts">
	import { fly } from 'svelte/transition';
	import MenuButton from './MenuButton.svelte';
	import Burger from './icons/Burger.svelte';
	import Logo from './icons/Logo.svelte';
	import Phone from './icons/Phone.svelte';
	import MenuItems from './MenuItems.svelte';
	import Close from './icons/Close.svelte';
	import Callback from './pages/main/Callback.svelte';
	import LogoNew from './icons/logo-new.svelte';
	import { pages, siteData } from '$lib/store';

	export let showSlidingMenu = false;
	let showBigMenu = false;
	let showCallback = false;
</script>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="callback_modal" class="modal-toggle" bind:checked={showCallback} />
<div class="modal">
	<div class="modal-box p-0 justify-start rounded-3xl shadow-2xl min-w-[60vw] w-full">
		<div class="modal-action mt-0 mb-2 p-2 text-right">
			<label for="callback_modal" class="btn btn-sm btn-circle border border-gray-400 btn-ghost">
				<div class="h-4 w-4">
					<Close />
				</div>
			</label>
		</div>
		<div class="h-full w-full">
			<Callback on:sent={() => (showCallback = false)} />
		</div>
	</div>
</div>

<nav class="fixed top-0 left-0 right-0 bg-white z-30 border-b">
	<div class="navbar bg-white mx-auto font-condensed max-w-screen-xl">
		<div class="navbar-start gap-4">
			<!--
		<div class="dropdown">
                 <label tabindex="0" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li><a>Item 1</a></li>
				<li>
					<a>Parent</a>
					<ul class="p-2">
						<li><a>Submenu 1</a></li>
						<li><a>Submenu 2</a></li>
					</ul>
				</li>
				<li><a>Item 3</a></li>
			</ul>
		</div> -->
			<a
				class="text-kurort-800 h-full w-24 md:w-32 hover:text-primary pr-4"
				href="/"
				on:click={() => (showBigMenu = false)}
			>
				<LogoNew />
			</a>

			<button class="hidden lg:inline-block" on:click={() => (showBigMenu = !showBigMenu)}>
				<MenuButton showClose={showBigMenu} />
			</button>
		</div>
		<div class="navbar-center lg:flex gap-4" on:click={() => (showBigMenu = false)}>
			<ul class="menu menu-horizontal px-1 hidden lg:inline-flex">
				<li><a href="/guests/vouchers" class="font-bold text-sm py-1 px-2">Путевки</a></li>
				<!-- <li tabindex="0">
				<details>
					<summary>Parent</summary>
					<ul class="p-2">
						<li><a>Submenu 1</a></li>
						<li><a>Submenu 2</a></li>
					</ul>
				</details>
			</li> -->
				<li><a href="/guests/rooms" class="font-bold text-sm py-1 px-2">Номерной фонд</a></li>
				<li>
					<a href="/guests/polyclinic" class="font-bold text-sm py-1 px-2">Поликлиника</a>
				</li>
				<li>
					<a
						href="https://banket.green-kurort.ru/"
						target="_blank"
						class="font-bold text-sm py-1 px-2">Банкеты</a
					>
				</li>
				<li><a href="/organization/prices" class="font-bold text-sm py-1 px-2">Цены</a></li>
				<li><a href="/guests/contacts" class="font-bold text-sm py-1 px-2">Контакты</a></li>
			</ul>

			<div class="text-white lg:hidden">
				<label
					for="callback_modal"
					class="hidden lg:block btn btn-primary btn-sm rounded-full normal-case text-sm"
				>
					Заказать звонок
				</label>
				<label for="callback_modal" class="lg:hidden btn btn-primary btn-sm rounded-full text-xs">
					<!-- <div class="w-4 h-4">
						<Phone />
					</div> -->
					Заказать звонок
				</label>
			</div>
		</div>
		<div class="navbar-end">
			<button
				class="btn btn-ghost btn-circle btn-sm border border-gray-400 lg:hidden"
				on:click={() => (showBigMenu = !showBigMenu)}
			>
				<div class="w-5 h-5">
					{#if showBigMenu}
						<Close />
					{:else}
						<Burger />
					{/if}
				</div>
			</button>
			<div class="text-white hidden lg:flex gap-2 items-center">
				<a
					href={`tel:${$siteData.telephone_2}`}
					class="hidden xl:block link link-primary link-hover font-bold">{$siteData.telephone_2}</a
				>
				<label
					for="callback_modal"
					class="hidden lg:flex items-center btn btn-primary btn-sm rounded-full normal-case text-sm pb-0.5"
				>
					Заказать звонок
				</label>
				<label for="callback_modal" class="lg:hidden btn btn-primary btn-sm btn-circle">
					<div class="w-4 h-4">
						<Phone />
					</div>
				</label>
			</div>
		</div>
	</div>
	{#if showBigMenu}
		<div class="z-30 shadow-2xl pb-5" transition:fly on:click={() => (showBigMenu = false)}>
			<MenuItems />
		</div>
	{/if}
	{#if $pages.length && showSlidingMenu}
		<div
			on:click={() => (showBigMenu = false)}
			class="hidden lg:block border-t bg-white w-full mx-auto p-2 -z-10 shadow-xl text-center max-w-[100vw] overflow-x-auto"
			transition:fly={{ y: -10 }}
		>
			<ul class="flex gap-1 justify-start font-condensed font-bold text-sm items-start  w-max">
				{#each $pages as page (page.id)}
					<li>
						<a
							href={'/guests/polyclinic/' + page.slug}
							class="py-1 px-2 hover:bg-gray-200 duration-300 ease-in rounded-lg">{page?.title}</a
						>
					</li>
				{/each}
				<!-- <li>
					<a
						href="/guests/polyclinic"
						class="py-1 px-2 hover:bg-gray-200 duration-300 ease-in rounded-lg"
						>Кардиореабилитация</a
					>
				</li>
				<li>
					<a
						href="/guests/polyclinic"
						class="py-1 px-2 hover:bg-gray-200 duration-300 ease-in rounded-lg">Нейрореабилитация</a
					>
				</li>
				<li>
					<a
						href="/guests/polyclinic"
						class="py-1 px-2 hover:bg-gray-200 duration-300 ease-in rounded-lg">Косметология</a
					>
				</li>
				<li>
					<a
						href="/guests/polyclinic"
						class="py-1 px-2 hover:bg-gray-200 duration-300 ease-in rounded-lg">Бальнеотерапия</a
					>
				</li>
				<li>
					<a
						href="/guests/polyclinic"
						class="py-1 px-2 hover:bg-gray-200 duration-300 ease-in rounded-lg"
						>Лечение опорно-двигательного аппарата</a
					>
				</li>
				<li>
					<a
						href="/guests/polyclinic"
						class="py-1 px-2 hover:bg-gray-200 duration-300 ease-in rounded-lg"
						>Гастроэнтерология</a
					>
				</li>
				<li>
					<a
						href="/guests/polyclinic"
						class="py-1 px-2 hover:bg-gray-200 duration-300 ease-in rounded-lg"
						>Лечение протрузии грыжи позвоночника</a
					>
				</li> -->
			</ul>
		</div>
	{/if}
</nav>
