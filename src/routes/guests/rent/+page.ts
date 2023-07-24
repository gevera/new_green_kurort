import { siteData } from '$lib/store';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const load = (async () => {
    const main_url = get(siteData).api_url;
    try {
        const res = await fetch(`${main_url}/kurort-rents`);
        if (res.ok) {
            const [data, _] = await res.json();

            return { rent: data.Arenda, main_url };
        }

    } catch (error) {
        console.log(error);
        return {
            rent: {}, main_url
        }
    }
}) satisfies PageLoad;