<script>

	import { siteData } from "$lib/store";

</script>
<section class="container mx-auto max-w-screen-xl my-12 md:my-24 p-4" id="contacts">
	<h3
		class="lg:col-span-2 font-condensed text-5xl font-bold text-center lg:text-left mb-6 lg:mb-12"
	>
		Контакты
	</h3>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-12">
		<a href="https://yandex.ru/maps/-/CPrkYvb" target="_blank" class="p-4">
			<p class="text-xl font-condensed font-bold text-gray-400 mb-2">Адрес</p>
			<p>г. Уфа, ул. Менделеева, 136/5</p>
		</a>
		<a href={`tel:${$siteData.telephone_2}`} class="p-4">
			<p class="text-xl font-condensed font-bold text-gray-400 mb-2">Телефон</p>
			<p>{$siteData.telephone_2}</p>
		</a>
		<div class="p-4">
			<p class="text-xl font-condensed font-bold text-gray-400 mb-2">Режим работы</p>
			<p>Пн — Вс: с 8:30 до 21:00</p>
		</div>
		<a href="mailto:green-kurort@green-kurort.ru" class="p-4">
			<p class="text-xl font-condensed font-bold text-gray-400 mb-2">Эл. почта</p>
			<p>green-kurort@green-kurort.ru</p>
		</a>
	</div>

	<div>
		<div style="position:relative;overflow:hidden;">
			<a
				href="https://yandex.ru/maps/org/zelenaya_roshcha/153901600785/?utm_medium=mapframe&utm_source=maps"
				style="color:#eee;font-size:12px;position:absolute;top:0px;">Зеленая роща</a
			><a
				href="https://yandex.ru/maps/172/ufa/category/sanatorium/184106404/?utm_medium=mapframe&utm_source=maps"
				style="color:#eee;font-size:12px;position:absolute;top:14px;">Санаторий в Уфе</a
			><iframe
				title="Карта"
				class="rounded-3xl grayscale"
				src="https://yandex.ru/map-widget/v1/?ll=56.016524%2C54.716133&mode=search&oid=153901600785&ol=biz&z=17.27"
				width="100%"
				height="500"
				frameborder="1"
				allowfullscreen={true}
				style="position:relative;"
			/>
		</div>
	</div>
</section>
