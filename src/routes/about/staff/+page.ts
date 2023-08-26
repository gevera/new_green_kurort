import { siteData } from '$lib/store';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const load = (async () => {
    const main_url = get(siteData).api_url;
    const url = new URL('kurort-upravlyaiushies', main_url);
    url.searchParams.append('_where[show_eq]', 'true');
    url.searchParams.append('_sort', 'id:DESC');
    try {
        const res = await fetch(`${main_url}/workers`);
        const resAdmins = await fetch(url);

        const fetchedWorkers = await res.json();
        const admins = await resAdmins.json();

        return { fetchedWorkers, main_url, admins };
    } catch (error) {
        console.log(error);
        return {
            admins: [], main_url, fetchedWorkers: []
        }
    }
}) satisfies PageLoad;