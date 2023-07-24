import { siteData } from '$lib/store';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const load = (async () => {
    const main_url = get(siteData).api_url;
    try {
        const res = await fetch(`${main_url}/kurort-documents?_where[show_eq]=true&_sort=name:ASC`);
        const resOrg = await fetch(`${main_url}/kurort-upravlyaiushies?_where[show_eq]=true&_sort=id:ASC`);
        const resIns = await fetch(`${main_url}/kurort-strahovkis?_where[show_eq]=true&_sort=id:ASC`);
        const documents = await res.json();
        const organizations = await resOrg.json();
        const insurances = await resIns.json();

        return { documents, organizations, insurances, main_url };

    } catch (error) {
        console.log(error);
        return { documents: [], organizations: [], insurances: [], main_url };
    }
}) satisfies PageLoad;