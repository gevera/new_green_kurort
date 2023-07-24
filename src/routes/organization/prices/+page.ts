import { siteData } from '$lib/store';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const load = (async () => {
    const main_url = get(siteData).api_url;
    try {
        const response = await fetch(`${main_url}/kurort-prices?_sort=name:ASC`);
        if(response.ok) {
            const prices = await response.json();
            return { prices, main_url };
        } else {
            return {
                prices: [], main_url
            }
        }
    } catch (error) {
        console.log(error);
        return {
            prices: [], main_url
        }
    }
}) satisfies PageLoad;