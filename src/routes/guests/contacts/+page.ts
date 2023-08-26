import { siteData } from '$lib/store';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const load = (async () => {
    const main_url = get(siteData).api_url;
    const url = new URL('kurort-contacts', main_url);
    url.searchParams.append('show_eq', 'true');
    try {
        const response = await fetch(url);
        if (response.ok) {
            const contacts = await response.json();
            return { contacts, main_url };
        } else {
            return {
                contacts: [], main_url
            }
        }
    } catch (error) {
        console.log(error);
        return {
            contacts: [], main_url
        }
    }
}) satisfies PageLoad;