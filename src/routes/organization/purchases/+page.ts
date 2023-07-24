import { siteData } from '$lib/store';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const load = (async () => {
    const main_url = get(siteData).api_url;
    try {
        const response = await fetch(`${main_url}/kurort-zakupkies?_sort=name:ASC`);
        const zakupkies = await response.json();
        return { zakupkies, main_url };

    } catch (error) {
        console.log(error);
        return {
            zakupkies: [], main_url
        }
    }
}) satisfies PageLoad;