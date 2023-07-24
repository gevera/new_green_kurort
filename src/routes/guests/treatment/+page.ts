import { siteData } from '$lib/store';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const load = (async () => {
    const main_url = get(siteData).api_url;
    try {
        const res = await fetch(`${main_url}/kurort-uslugi-meditzinas?_where[show_eq]=true&_sort=id:ASC`);
        if (res.ok) {
            const med_data = await res.json();
            return { med_data, main_url };
        }

    } catch (error) {
        console.log(error);
        return {
            med_data: [], main_url
        }
    }
}) satisfies PageLoad;