import { siteData } from '$lib/store';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const load = (async () => {
    const main_url = get(siteData).api_url;
    try {
        const response = await fetch(`${main_url}/kurort-gostis?_sort=name:ASC`);
        const guests = await response.json();
        return { guests: guests.filter((g: any) => g.show), main_url };

    } catch (error) {
        console.log(error);
        return {
            guests: [], main_url
        }
    }
}) satisfies PageLoad;