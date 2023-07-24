<script lang="ts">
	import { fly } from 'svelte/transition';
	import MenuButton from './MenuButton.svelte';
	import Burger from './icons/Burger.svelte';
	import Logo from './icons/Logo.svelte';
	import Phone from './icons/Phone.svelte';
	import MenuItems from './MenuItems.svelte';
	import Close from './icons/Close.svelte';

	export let showSlidingMenu = false;
	let showBigMenu = false;
</script>

<nav class="fixed top-0 left-0 right-0 bg-white z-20 border-b">
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
				class="text-kurort-800 h-full w-32 hover:text-primary pr-4"
				href="/"
				on:click={() => (showBigMenu = false)}
			>
				<Logo />
			</a>

			<button class="hidden lg:inline-block" on:click={() => (showBigMenu = !showBigMenu)}>
				<MenuButton showClose={showBigMenu} />
			</button>
		</div>
		<div class="navbar-center lg:flex gap-4">
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
					<a href="/guests/polyclinic" class="font-bold text-sm py-1 px-2">Курортная поликлиника</a>
				</li>
				<li>
					<a
						href="https://banket.green-kurort.ru/"
						target="_blank"
						class="font-bold text-sm py-1 px-2">Банкеты</a
					>
				</li>
				<li><a href="/organization/prices" class="font-bold text-sm py-1 px-2">Цены</a></li>
				<li><a href="/#contacts" class="font-bold text-sm py-1 px-2">Контакты</a></li>
			</ul>

			<a class="text-white lg:hidden" href="/">
				<button class="hidden lg:block btn btn-primary btn-sm rounded-full normal-case text-sm">
					Заказать звонок
				</button>
				<button class="lg:hidden btn btn-primary btn-sm btn-circle">
					<div class="w-4 h-4">
						<Phone />
					</div>
				</button>
			</a>
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
			<a class="text-white hidden lg:block" href="/#callback">
				<button class="hidden lg:block btn btn-primary btn-sm rounded-full normal-case text-sm">
					Заказать звонок
				</button>
				<button class="lg:hidden btn btn-primary btn-sm btn-circle">
					<div class="w-4 h-4">
						<Phone />
					</div>
				</button>
			</a>
		</div>
	</div>
	{#if showBigMenu}
		<div class="" transition:fly on:click={() => (showBigMenu = false)}>
			<MenuItems />
		</div>
	{/if}
	{#if showSlidingMenu}
		<div
			on:click={() => (showBigMenu = false)}
			class="hidden lg:block border-t bg-white w-full mx-auto p-2 max-w-screen-xl -z-10 shadow-xl"
			transition:fly={{ y: -10 }}
		>
			<ul class="flex gap-1 justify-evenly font-condensed font-bold text-sm items-center">
				<li>
					<a href="/guests/polyclinic" class="py-1 px-2 hover:bg-gray-200 duration-300 ease-in rounded-lg"
						>Реабилитация после COVID-19 и пневмонии</a
					>
				</li>
				<li>
					<a href="/guests/polyclinic" class="py-1 px-2 hover:bg-gray-200 duration-300 ease-in rounded-lg"
						>Кардиореабилитация</a
					>
				</li>
				<li>
					<a href="/guests/polyclinic" class="py-1 px-2 hover:bg-gray-200 duration-300 ease-in rounded-lg"
						>Нейрореабилитация</a
					>
				</li>
				<li>
					<a href="/guests/polyclinic" class="py-1 px-2 hover:bg-gray-200 duration-300 ease-in rounded-lg"
						>Косметология</a
					>
				</li>
				<li>
					<a href="/guests/polyclinic" class="py-1 px-2 hover:bg-gray-200 duration-300 ease-in rounded-lg"
						>Бальнеотерапия</a
					>
				</li>
				<li>
					<a href="/guests/polyclinic" class="py-1 px-2 hover:bg-gray-200 duration-300 ease-in rounded-lg"
						>Гастроэнтерология</a
					>
				</li>
			</ul>
		</div>
	{/if}
</nav>
