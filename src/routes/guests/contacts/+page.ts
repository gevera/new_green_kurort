import { siteData } from '$lib/store';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const load = (async () => {
    const main_url = get(siteData).api_url;
    try {
        const response = await fetch(`${main_url}/kurort-contacts?show_eq=true`);
        const contacts = await response.json();
        return { contacts, main_url };

    } catch (error) {
        console.log(error);
        return {
            contacts: [], main_url
        }
    }
}) satisfies PageLoad;