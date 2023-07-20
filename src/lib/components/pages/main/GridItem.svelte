<script lang="ts">
	import { fade } from 'svelte/transition';

	export let item: {
		id: number;
		title: string;
		url: string;
		img: string;
	};

	let hovered = false;
</script>

<a
	href={item.url}
	class="hero rounded-3xl min-h-[16rem] hover:shadow-xl hover:bg-opacity-70"
	style={`background-image: url(${item.img});`}
	on:mouseenter={() => (hovered = true)}
	on:mouseleave={() => (hovered = false)}
>
	<div class="hero-overlay bg-opacity-50 rounded-3xl ease-in duration-500 cursor-pointer" />
	{#if hovered}
		<div
			transition:fade
			class="flex flex-col justify-center items-center bg-opacity-70 text-white font-condensed font-semibold underline underline-offset-8 backdrop-brightness-50 h-full w-full rounded-3xl ease-in duration-500"
		>
        <div >
            Перейти в раздел
        </div>
		</div>
	{/if}
	<div class="hero-content text-white flex flex-col justify-end h-full">
		<h5 class="font-bold font-condensed text-xl">{item.title}</h5>
	</div>
</a>
