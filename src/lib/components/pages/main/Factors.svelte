<script lang="ts">
	const menuItems = [
		{
			id: 1,
			title: 'Сероводородные источники',
			url: '/',
			img: 'Сероводородные-ванны.webp',
			details:
				'На территории санатория "Зеленая Роща", находится единственный природный источник сероводорода в городе Уфе'
		},
		{
			id: 2,
			title: 'Минеральная вода "Хызыр"',
			url: '/',
			img: 'Минеральные-источники.webp',
			details: 'Природная вода, обогащенная сероводородом, обладает оздоравливающим эффектом'
		},
		{
			id: 3,
			title: 'Экологически чистый район Уфы',
			url: '/',
			img: 'Эколокически-чистый.webp',
			details:
				'Самый зеленый район города Уфа, окутывает санаторий природной красотой и благоприятной атмосферой'
		}
	];
</script>

<section class="container mx-auto max-w-screen-xl my-12 md:my-24 p-4">
	<h3
		class="font-condensed text-5xl font-bold max-w-md text-center lg:text-left mb-10 mx-auto lg:m-0"
	>
		Уникальные природные факторы
	</h3>

	<ul class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
		{#each menuItems as item, idx (item.id)}
			<li class="border border-gray-200 rounded-3xl p-6">
				<div class="avatar">
					<div class="w-24 rounded-full">
						<img src={item.img} alt={item?.title} />
					</div>
				</div>
				<h6 class="font-condensed font-bold text-gray-400 text-xl lg:max-w-[14rem] leading-5 mb-4">
					{item?.title}
				</h6>
				<p class="leading-6 text-sm lg:max-w-[18rem]">{item.details}</p>
			</li>
		{/each}
	</ul>
</section>
