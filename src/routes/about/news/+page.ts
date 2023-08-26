import { siteData } from '$lib/store';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const load = (async () => {
    const main_url = get(siteData).api_url;
    const url = new URL('kurort-news', main_url);
    url.searchParams.append('_where[show_eq]', 'true');
    url.searchParams.append('_sort', 'created_at:DESC');
    try {
        const response = await fetch(url);
        if(response.ok) {
            const news = await response.json();
            return { news, main_url };
        } else {
            return {
                news: [], main_url
            }
        }
    } catch (error) {
        console.log(error);
        return {
            news: [], main_url
        }
    }
}) satisfies PageLoad;