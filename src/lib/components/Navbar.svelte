<script lang="ts">
	import MenuButton from './MenuButton.svelte';
	import Burger from './icons/Burger.svelte';
	import Logo from './icons/Logo.svelte';
	import Phone from './icons/Phone.svelte';
</script>

<nav class="fixed top-0 left-0 right-0 bg-white z-20 border border-b">
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
			<a class="text-kurort-800 h-full w-32 hover:text-primary pr-4" href="/">
				<Logo />
			</a>

			<div class="hidden lg:inline-block">
				<MenuButton />
			</div>
		</div>
		<div class="navbar-center lg:flex gap-4">
			<ul class="menu menu-horizontal px-1 hidden lg:inline-flex">
				<li><a href="/" class="font-bold text-sm py-1 px-2">Путевки</a></li>
				<!-- <li tabindex="0">
				<details>
					<summary>Parent</summary>
					<ul class="p-2">
						<li><a>Submenu 1</a></li>
						<li><a>Submenu 2</a></li>
					</ul>
				</details>
			</li> -->
				<li><a href="/" class="font-bold text-sm py-1 px-2">Номерной фонд</a></li>
				<li><a href="/" class="font-bold text-sm py-1 px-2">Курортная поликлиника</a></li>
				<li><a href="/" class="font-bold text-sm py-1 px-2">Банкеты</a></li>
				<li><a href="/" class="font-bold text-sm py-1 px-2">Цены</a></li>
				<li><a href="/#contacts" class="font-bold text-sm py-1 px-2">Контакты</a></li>
			</ul>

			<div class="lg:hidden">
				<div class="btn btn-ghost btn-circle btn-sm border border-gray-400">
					<div class="w-5 h-5">
						<Burger />
					</div>
				</div>
			</div>
		</div>
		<div class="navbar-end">
			<a class="text-white" href="/">
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
</nav>
