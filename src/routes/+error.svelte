<script lang="ts">
	import Logo from '$lib/components/icons/Logo.svelte';
</script>

<svelte:head>
	<title>Санаторий «Зеленая роща» | Сохраним здоровье вместе!</title>
</svelte:head>

<div class="p-4 grid place-items-center h-screen">
	<div>
		<h1 class="text-xl md:text-3xl text-center my-6 font-condensed font-bold">Ой...Страница не найдена</h1>
		<div class="mx-auto max-w-screen-md flex flexc-col justify-center items-center">
			<div class="text-primary w-56 h-28">
				<Logo />
			</div>
		</div>
		<p class="text-center my-6">Чтобы вернуться обратно на главную страницу перейдите по ссылке</p>
		<a href="/" class="flex justify-center hover:no-underline text-primary">
			<button
				aria-label="home page"
				class="btn btn-primary btn-lg normal-case"
				>На главную</button
			>
		</a>
	</div>
</div>
