import { siteData } from '$lib/store';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const load = (async () => {
    const main_url = get(siteData).api_url;
    try {
        const response = await fetch(`${main_url}/kurort-putyovkas`);
        if(response.ok) {
            const putyovkas = await response.json();
            return { putyovkas, main_url };
        } else {
            return {
                putyovkas: [], main_url
            }
        }

    } catch (error) {
        console.log(error);
        return {
            putyovkas: [], main_url
        }
    }
}) satisfies PageLoad;