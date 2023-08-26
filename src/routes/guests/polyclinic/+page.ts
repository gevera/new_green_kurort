import { pages, siteData } from '$lib/store';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const load = (async () => {
    const main_url = get(siteData).api_url;
    if (get(pages).length == 0) {
        const url = new URL('dynamic-pages', main_url)
        try {
            const res = await fetch(url);
            if (res.ok) {
                const data = await res.json();
                pages.set(data);
                return { pages: data, main_url };
            }
        } catch (error) {
            console.log(error);
            return {
                pages: [], main_url
            }
        }
    } else {
        return { pages: get(pages), main_url };
    }
}) satisfies PageLoad;