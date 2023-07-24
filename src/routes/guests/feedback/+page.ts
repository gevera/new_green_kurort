import { siteData } from '$lib/store';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const load = (async () => {
    const main_url = get(siteData).api_url;
    try {
        const response = await fetch(`${main_url}/kurort-predlojeniyas?_sort=created_at:DESC`);
        const predlojeniyas = await response.json();
        return { predlojeniyas: predlojeniyas.filter((p: any) => p.show), main_url };

    } catch (error) {
        console.log(error);
        return {
            predlojeniyas: [], main_url
        }
    }
}) satisfies PageLoad;