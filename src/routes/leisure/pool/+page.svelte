<script lang="ts">
	import snarkdown from 'snarkdown';
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ basein, main_url } = data);
</script>

<svelte:head>
	<title>Бассейн | Санаторий «Зеленая роща»</title>
</svelte:head>

<div
	class="w-full bg-center bg-cover h-128"
	style={`background-image: url(${main_url}${basein?.fon?.url});`}
>
	<div class="w-full h-full bg-gray-900 bg-opacity-50 px-4 py-12 lg:py-28 xl:py-42">
		<div class="text-center w-full max-w-xl mx-auto p-4">
			<h1
				class="mb-6 font-condensed text-center text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl sm:leading-none font-bold"
			>
				{basein?.zagolovok}
			</h1>
		</div>
	</div>
</div>
<section class="container p-4 mx-auto max-w-screen-2xl my-16">
	<div class="container flex flex-col items-center px-4 py-10 mx-auto text-center">
		<p
			class="mb-4 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto bg-white md:bg-none font-condensed"
		>
			{basein?.tekst}
		</p>

		<div
			class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12"
		>
			<div class="grid gap-12 lg:grid-cols-2">
				{#if basein?.fotografii?.length}
					{#each basein?.fotografii as foto (foto?.id)}
						<div>
							<img
								class="object-cover w-full h-56 rounded-2xl shadow-lg sm:h-96"
								src={`${main_url}${foto?.url}`}
								alt="Pool"
							/>
						</div>
					{/each}
				{/if}
			</div>
		</div>
		<div
			class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12"
		>
			<div class="grid gap-12 row-gap-8 lg:grid-cols-2">
				<div class="flex flex-col justify-center">
					<div class="max-w-xl mb-6">
						<h2
							class="max-w-lg mb-6 font-sans text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
						>
							Расписание
						</h2>
					</div>
					<div class="">
						{@html snarkdown(basein?.raspisaniye)}
					</div>
				</div>

				<div class="flex flex-col justify-center">
					<div class="max-w-xl mb-6">
						<h2
							class="max-w-lg mb-6 font-sans text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
						>
							Цены
						</h2>
					</div>
					<div class="">
						{@html snarkdown(basein?.zeny)}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
