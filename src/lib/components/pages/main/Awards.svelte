<script>
	import ChevronUpRight from '$lib/components/icons/ChevronUpRight.svelte';
	const listItems = [
		{
			id: '01',
			title: 'Благодарственное письмо от владельца',
			url: '/'
		},
		{
			id: '02',
			title: 'Первое место в номинации “Лучший санаторий 2023 года”',
			url: '/'
		},
		{
			id: '03',
			title: 'Победа в номинации “Лучшее курортное место в Башкирии 2023”',
			url: '/'
		},
		{
			id: '04',
			title: 'Наши награды',
			url: '/'
		}
	];
</script>

<section class="container mx-auto max-w-screen-xl my-12 md:my-24 p-4">
	<h3
		class="lg:col-span-2 font-condensed text-5xl font-bold text-center lg:text-left mb-6 lg:mb-16"
	>
		Наши награды
	</h3>

	<ul class="flex flex-col">
		{#each listItems as item, idx}
			<li class="">
				<a href={item.url} class="grid grid-cols-8 lg:grid-cols-12 gap-2 items-center border-b py-4 md:p-4 hover:bg-gray-300 ease-in duration-300">
					<div class="col-span-1 lg:col-span-6 text-2xl text-gray-400 font-condensed">{item.id}</div>
                    <div class="col-span-6 lg:col-span-5 font-bold font-condensed text-xl text-left leading-6">
                        {item.title}
                    </div>
                    <div class="col-span-1 w-4 h-4 place-self-center">
                        <ChevronUpRight />
                    </div>
            
				</a>
			</li>
		{/each}
	</ul>
</section>
