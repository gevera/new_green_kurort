<script lang="ts">
	import ChevronRight from '$lib/components/icons/ChevronRight.svelte';
	import { siteData } from '$lib/store';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { fade } from 'svelte/transition';

	let news: any[] = [];

	const handleImage = (novosti: any) => {
		const main_url = get(siteData).api_url;
		if (novosti?.image?.formats?.large) {
			return `${main_url}${novosti?.image?.formats?.large?.url}`;
		} else if (novosti?.image?.formats?.medium) {
			return `${main_url}${novosti?.image?.formats?.medium.url}`;
		} else if (novosti?.image?.formats?.small) {
			return `${main_url}${novosti?.image?.formats?.small?.url}`;
		} else {
			return '/logo-192.png';
		}
	};

	const fetchNews = async () => {
		try {
			const response = await fetch(
				`${get(siteData).api_url}/kurort-news?_where[show_eq]=true&_sort=created_at:DESC&_limit=3`
			);

			if (response.ok) {
				news = [...(await response.json())];
			}
		} catch (error) {
			console.log(error);
		}
	};

	onMount(async () => await fetchNews());
</script>

{#if news.length}
	<section class="container mx-auto max-w-screen-xl my-12 md:my-24 p-4" transition:fade>
		<div class="flex flex-col md:flex-row gap-2 justify-between">
			<h3 class="lg:col-span-2 font-condensed text-5xl font-bold text-center lg:text-left mb-6">
				Новости
			</h3>
			<a
				href="/about/news"
				class="btn btn-sm btn-ghost border border-gray-400 rounded-full normal-case font-bold font-condensed place-self-end"
				>Смотреть все <span class="w-4 h-4 text-gray-800">
					<ChevronRight />
				</span>
			</a>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
			<a href={`/about/news#${news[0].id}`}>
				<img
					src={handleImage(news[0])}
					alt={news[0].title}
					class="w-full rounded-2xl mb-10 hover:brightness-75"
				/>
				<h6 class="font-condensed font-bold text-2xl hover:opacity-80">
					{news[0].title}
				</h6>
				<p class="text-gray-500 my-6 text-sm truncate">
					{news[0].content}
				</p>
				<a
					href={`/about/news#${news[0].id}`}
					class="underline underline-offset-8 text-primary font-condensed font-semibold hover:opacity-90"
					>Читать подробнее</a
				>
			</a>
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
				<a href={`/about/news#${news[1].id}`}>
					<img
						src={handleImage(news[1])}
						alt={news[1].title}
						class="w-full rounded-xl mb-6 hover:brightness-75"
					/>
					<h6 class="font-condensed font-bold hover:opacity-80">
						{news[1].title}
					</h6>
				</a>
				<a class="place-self-end" href={`/about/news#${news[2].id}`}>
					<img
						src={handleImage(news[2])}
						alt={news[2].title}
						class="w-full rounded-xl mb-6 hover:brightness-75"
					/>
					<h6 class="font-condensed font-bold hover:opacity-80">
						{news[2].title}
					</h6>
				</a>
			</div>
		</div>
	</section>
{/if}
