export const prerender = true;

import { pages, siteData } from '$lib/store';
import { get } from 'svelte/store';
import type { LayoutLoad } from './$types';

export const load = (async () => {
    if (get(pages).length == 0) {
        const main_url = get(siteData).api_url;
        const url = new URL('dynamic-pages', main_url)
        try {
            const res = await fetch(url);
            if (res.ok) {
                const data = await res.json();
                pages.set(data);
            }
        } catch (error) {
            console.log(error);
        }
    }
}) satisfies LayoutLoad;