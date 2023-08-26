import { siteData } from '$lib/store';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const load = (async () => {
    const main_url = get(siteData).api_url;
    const url = new URL('kurort-gostis', main_url);
    url.searchParams.append('_sort', 'name:ASC');
    try {
        const response = await fetch(url);
        if (response.ok) {
            const guests = await response.json();
            return { guests: guests.filter((g: any) => g.show), main_url };
        } else {
            return {
                guests: [], main_url
            }
        }
    } catch (error) {
        console.log(error);
        return {
            guests: [], main_url
        }
    }
}) satisfies PageLoad;