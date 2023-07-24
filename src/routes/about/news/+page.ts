import { siteData } from '$lib/store';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const load = (async () => {
    const main_url = get(siteData).api_url;
    try {
        const response = await fetch(`${main_url}/kurort-news?_where[show_eq]=true&_sort=created_at:DESC`);
        const news = await response.json();
        return { news, main_url };
    } catch (error) {
        console.log(error);
        return {
            news: [], main_url
        }
    }
}) satisfies PageLoad;