<script lang="ts">
	import ChevronRight from '$lib/components/icons/ChevronRight.svelte';
	import Close from '$lib/components/icons/Close.svelte';
	import Finger from '$lib/components/icons/Finger.svelte';
	import Play from '$lib/components/icons/Play.svelte';

	let showMap = false;
</script>

<div class="modal" id="map_modal">
	<div class="modal-box w-screen min-w-[90%]">
		<div class="modal-action mt-0 mb-2">
			<a href="#about" class="btn btn-sm btn-ghost btn-circle border border-gray-400">
				<div class="w-4 h-4">
					<Close />
				</div>
			</a>
		</div>
		<div class="w-full">
			<img
				src="/map.jpeg"
				alt="Карта санатория"
				class="w-full object-cover object-center bg-no-repeat"
			/>
		</div>
	</div>
</div>

<div class="modal" id="video_modal">
	<div class="modal-box w-screen min-w-[90%]">
		<div class="modal-action mt-0 mb-2">
			<a href="#about" class="btn btn-sm btn-ghost btn-circle border border-gray-400">
				<div class="w-4 h-4">
					<Close />
				</div>
			</a>
		</div>
		<div class="w-full h-full">
			<iframe
				class="w-full h-[60vh]"
				src="https://www.youtube.com/embed/BMwSlS3OxWU"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			/>
		</div>
	</div>
</div>

<section class="container mx-auto max-w-screen-xl my-12 md:my-24 p-4" id="about">
	<h3 class="lg:col-span-2 font-condensed text-5xl font-bold text-center lg:text-left mb-6">
		О санатории
	</h3>
	<div class="grid gap-5 grid-cols-1 lg:grid-cols-2 mb-10">
		<p class="text-center lg:text-left font-condensed font-semibold text-gray-400 text-2xl">
			«Зеленая роща» – известный санаторий, специализирующийся на бальнеологических лечебных
			процедурах
		</p>
		<div class="max-w-xl mx-auto flex flex-col gap-6 text-sm p-4">
			<p>
				Санаторий «Зеленая роща» – здравница специализирующаяся на бальнеологических лечебных
				процедурах и медицинской реабилитации. Местность богата всеми необходимыми
				природно-климатическими ресурсами для оздоровления. Это свои минеральные и сероводородные
				источники, свежий чистый воздух и обширная зеленая территория площадью 25 гектар.
			</p>
			<p>
				Благодаря минеральным водам, изюминке здравницы, здесь создана система, в которой комфорт
				сочетается с восстановительным лечением. С правого берега реки Уфимка, открывается
				живописный вид. Несмотря на то, что «Зеленая роща» находится в черте города, на территории
				санатория близость мегаполиса совершенно не ощущается. Отдыхающие могут в полной мере
				насладиться тишиной и свежим воздухом. Для проживания можно выбрать комфортабельный номер в
				одном из трех корпусов. Также в номерной фонд входит гостиница и VIP-коттедж. Всего
				здравница может принять до 689 человек одновременно
			</p>
		</div>
	</div>
	<div class="grid gap-5 grid-cols-1 lg:grid-cols-2 mb-10">
		<div class="grid gap-4 grid-cols-1 lg:grid-cols-2">
			<a
				href="#map_modal"
				class="hero h-[12rem] rounded-2xl cursor-pointer"
				style="background-image: url(map.jpeg);"
			>
				<div class="hero-overlay bg-opacity-60 hover:bg-opacity-30 rounded-2xl" />
				<div class="hero-content text-white">
					<div class="w-14 h-14 text-white rounded-full p-5 border border-white">
						<Finger />
					</div>
				</div>
			</a>
			<div class="font-condensed font-bold text-xl text-gray-400 lg:max-w-[10rem] text-left">
				Посмотрите карту нашего санатория
			</div>
		</div>
		<div>
			<a href="#video_modal"
				class="hero h-[32rem] rounded-2xl cursor-pointer"
				style="background-image: url(Видео.webp);"
			>
				<div class="hero-overlay bg-opacity-60 hover:bg-opacity-30 rounded-2xl" />
				<div class="hero-content text-white">
					<div class="w-14 h-14 text-white rounded-full p-4 border border-white">
						<Play />
					</div>
				</div>
			</a>
			<p class="my-10 text-sm max-w-xl mx-auto">
				Здесь царит умиротворяющая тишина и свежий исцеляющий воздух. В санатории реализуется одни
				из наиболее эффективных программ нейрореабилитации и кардиореабилитации. Многочисленными
				исследованиями доказано, что из общего числа пациентов, перенесших инфаркт миокарда, при
				своевременной реабилитации к труду и полноценной жизни возвращаются в 1,5 раза больше людей
			</p>

			<a
				class="btn btn-ghost btn-sm border border-primary text-primary rounded-full normal-case hover:bg-primary hover:text-white"
				href="/"
				>Читать подробнее <span class="w-5 h-5">
					<ChevronRight />
				</span>
			</a>
		</div>
	</div>
</section>

<style>
	.modal-box {
		width: 100vw !important;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
</style>
