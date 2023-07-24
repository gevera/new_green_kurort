import { siteData } from '$lib/store';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const load = (async () => {
    const main_url = get(siteData).api_url;
    try {
        const response = await fetch(`${main_url}/kurort-partners?_sort=name:ASC`);
        const partners = await response.json();
        return { partners: partners.filter((p: any) => p.show), main_url };

    } catch (error) {
        console.log(error);
        return {
            partners: [], main_url
        }
    }
}) satisfies PageLoad;