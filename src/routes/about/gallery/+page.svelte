<section class="container p-4 mx-auto max-w-screen-2xl mt-28">
	<div class="flex flex-col text-center w-full mb-10">
		<h1 class="sm:text-4xl text-3xl font-bold font-condensed mb-4 text-gray-900">Фотогалерея</h1>
		<p class="lg:w-2/3 mx-auto leading-relaxed text-base">
			Насладиться отдыхом в живописном уголке Уфы и ощутить дыхание природы можно в любое время года
		</p>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
		{#each new Array(82) as Image, idx}
			<div class="">
				<img
					src={`https://files.green-kurort.ru/green_rosha/gallery/${idx + 1}.jpg`}
					alt={String(idx + 1)}
					class="w-full h-64 object-cover rounded-xl"
				/>
			</div>
		{/each}
	</div>
</section>
