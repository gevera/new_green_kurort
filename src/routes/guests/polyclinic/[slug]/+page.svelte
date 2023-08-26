<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ main_url, page } = data);
</script>

<svelte:head>
	{@html page?.head}
</svelte:head>

<div
	class="hero min-h-[50vh] mt-20"
	style={`background-image: url(${
		main_url + (page.hero_image.formats?.large?.url || page.hero_image.formats?.medium?.url)
	});`}
>
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1 class="mb-5 text-3xl md:text-5xl font-bold font-condensed text-white">
				{page.title}
			</h1>
		</div>
	</div>
</div>
<section class="container p-4 mx-auto max-w-screen-xl my-12">
	<div class="gap-8 flex flex-col lg:flex-row items-start">
		<div class="flex-grow">
			{@html page.body}
		</div>
		<div class="lg:max-w-md w-full place-self-center lg:place-self-start">
			<img
				src={main_url + page.secondary_image.formats?.medium?.url}
				alt={page.title}
				class="w-full rounded-lg object-cover object-center"
			/>
		</div>
	</div>
</section>
