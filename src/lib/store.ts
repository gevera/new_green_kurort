import { readable, writable, type Writable } from "svelte/store";

export const siteData = readable({
    telephone_1: "8 (800) 200-2190",
    telephone_2: "+7 (347) 225-2530",
    telephone_3: "+7 (347) 225-2271",
    vk: "https://vk.com/greenkurort",
    instagram: "https://www.instagram.com/zelenaya_roscha_ufa/?hl=ru",
    whatsapp: "https://wa.me/+79378516066",
    email: "op_marketgreen@mail.ru",
    address: "450022, Республика Башкортостан, г. Уфа, ул. Менделеева, 136/5",
    api_url: "https://api.skrymenu.com"
});

export const pages: Writable<any[]> = writable([]);