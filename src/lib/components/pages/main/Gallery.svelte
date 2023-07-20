<script>
	import { scale, fade } from 'svelte/transition';

	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import ChevronLeft from '$lib/components/icons/ChevronLeft.svelte';
	import ChevronRight from '$lib/components/icons/ChevronRight.svelte';

	let carousel; // for calling methods of the carousel instance
    let modalCarousel;

	let images = [
		{
			id: 1,
			title: 'Санаторно-курортные путёвки',
			src: 'Санаторно-курортные-путевки.webp'
		},
		{
			id: 2,
			title: 'Курортная поликлиника',
			src: 'Курортная-поликлиника.webp'
		},
		{
			id: 3,
			title: 'Организация мероприятий',
			src: 'Организация-мероприятий.webp'
		},
		{
			id: 4,
			title: 'Проведение банкетов',
			src: 'Проведение-банкетов.webp'
		},
		{
			id: 5,
			title: 'Гостиница',
			src: 'Гостиница.webp'
		},
		{
			id: 6,
			title: 'Косметология «Green Palace»',
			src: 'Косметология.webp'
		}
	];

	let open = false;
	let activeImg = '';

	const showLighbox = (imgsrc) => {
		open = true;
		activeImg = imgsrc;
	};

</script>

<svelte:window on:keydown={() => (open = false)} />

<section id="gallery" class="container mx-auto max-w-screen-2xl my-12 md:my-24 p-4 overflow-hidden">
	{#if browser}
		{#if open}
			<div
				transition:fade
				class="p-2 fixed flex justify-center items-center inset-0 bg-black bg-opacity-75 z-40 cursor-pointer"
			>
				<div class="flex justify-center items-center w-full h-full z-50">
					<div
						transition:scale
						class="container max-w-5xl max-h-full bg-transparent rounded-xl shadow-lg overflow-auto"
					>
						<Carousel bind:this={modalCarousel} arrows={true}>
							<img
								loading="lazy"
								class="cursor-pointer object-contain object-center rounded-lg"
								src={activeImg}
								alt={'Хостел'}
								on:click={() => (open = false)}
							/>
							{#each images as image, idx}
								<img
									loading="lazy"
									class="cursor-pointer object-contain object-center rounded-lg"
									src={image.src}
									alt={image.title}
									on:click={() => (open = false)}
								/>
							{/each}
						</Carousel>
					</div>
				</div>
			</div>
		{/if}

		<div class="relative">
			<button
				class="btn btn-sm btn-ghost btn-circle text-gray-400 absolute top-1/2 transform -translate-y-1/2 z-10"
				on:click={() => carousel.goToPrev()}
			>
				<div class="w-5 h-5">
					<ChevronLeft />
				</div>
			</button>
			<div class="flex gap-4 justify-center items-center relative w-[80%] mx-auto">
				<!-- <div class=""> -->
				<Carousel
					bind:this={carousel}
					arrows={false}
					particlesToShow={1}
					autoplay={true}
					class="absolute w-[90%]  rounded-3xl"
				>
					{#each images as image, idx}
						<div class="p-4 mx-auto w-[90%] rounded-lg lg:rounded-3xl">
							<img
								loading="lazy"
								class="w-full cursor-pointer hover:opacity-90 rounded-lg lg:rounded-3xl mx-auto object-cover"
								src={image.src}
								alt={image.title}
								on:click={() => showLighbox(image.src)}
							/>
						</div>
					{/each}
				</Carousel>
			</div>
			<button
				class="btn btn-sm btn-ghost btn-circle text-gray-400 absolute top-1/2 transform -translate-y-1/2 right-0 z-10"
				on:click={() => carousel.goToNext()}
			>
				<div class="w-5 h-5">
					<ChevronRight />
				</div>
			</button>
		</div>
	{/if}
</section>

<style>
</style>
