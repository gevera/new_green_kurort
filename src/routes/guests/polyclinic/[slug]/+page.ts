import { pages, siteData } from '$lib/store';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const load = (async ({ params: { slug } }) => {
    const main_url = get(siteData).api_url;
    const page = get(pages).find(p => p.slug == slug);
    if (page == -1) {
        const url = new URL('dynamic-pages', main_url)
        url.searchParams.append('slug', slug)
        try {
            const res = await fetch(url);
            if (res.ok) {
                const [page, _] = await res.json();
                console.log(page);

                return { page, main_url };
            }

        } catch (error) {
            console.log(error);
            return {
                page: {}, main_url
            }
        }
    } else {
        return {
            page, main_url
        }
    }
}) satisfies PageLoad;