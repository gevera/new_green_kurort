<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ zakupkies, main_url } = data);
</script>

<svelte:head>
	<title>Закупки | Санаторий «Зеленая роща»</title>
</svelte:head>

<section class="container p-4 mx-auto max-w-screen-xl mt-28">
	<div class="flex flex-col text-center w-full mb-10">
		<h1 class="sm:text-4xl text-3xl font-bold font-condensed mb-4 text-gray-900">Закупки</h1>
		<!-- <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee</p> -->
	</div>
	<div class="lg:w-2/3 w-full mx-auto overflow-auto">
		<table class="table-auto w-full text-left whitespace-no-wrap">
			<thead>
				<tr>
					<th
						class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl"
						>Закупки</th
					>
				</tr>
			</thead>
			<tbody>
				{#each zakupkies as buy}
					<tr>
						<td class="p-1 border-b border-gray">
							<a href={buy.sylka} target="_blank" class="w-full flex items-center px-4 py-3">
								<div class="flex-none w-8 h-8 text-primary mr-4">
									<svg xmlns="http://www.w3.org/2000/svg" class="fill-current" viewBox="0 0 24 24"
										><path
											d="M11.363 2c4.155 0 2.637 6 2.637 6s6-1.65 6 2.457v11.543h-16v-20h7.363zm.826-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-2.628v3.686h.907v-1.472h1.49v-.732h-1.49v-.698h1.721v-.784zm-4.9 0h-1.599v3.686h1.599c.537 0 .961-.181 1.262-.535.555-.658.587-2.034-.062-2.692-.298-.3-.712-.459-1.2-.459zm-.692.783h.496c.473 0 .802.173.915.644.064.267.077.679-.021.948-.128.351-.381.528-.754.528h-.637v-2.12zm-2.74-.783h-1.668v3.686h.907v-1.277h.761c.619 0 1.064-.277 1.224-.763.095-.291.095-.597 0-.885-.16-.484-.606-.761-1.224-.761zm-.761.732h.546c.235 0 .467.028.576.228.067.123.067.366 0 .489-.109.199-.341.227-.576.227h-.546v-.944z"
										/></svg
									>
								</div>
								<span class="inline-block">
									{buy.name}
								</span>
							</a>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
		<!-- <a class="text-primary-light inline-flex items-center md:mb-2 lg:mb-0">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a> -->
		<!-- <button class="flex ml-auto text-white bg-primary-light border-0 py-2 px-6 focus:outline-none hover:bg-primary rounded">Кнопка</button> -->
	</div>
</section>
