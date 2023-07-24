import { siteData } from '$lib/store';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const load = (async () => {
    const main_url = get(siteData).api_url;
    try {
        const response = await fetch(`${main_url}/kurort-dosugs?_where[show_eq]=true&_sort=id:ASC`);
        const dosug = await response.json();
        return { dosug, main_url };

    } catch (error) {
        console.log(error);
        return {
            dosug: [], main_url
        }
    }
}) satisfies PageLoad;