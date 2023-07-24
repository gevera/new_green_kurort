import { siteData } from '$lib/store';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const load = (async () => {
    const main_url = get(siteData).api_url;
    try {
        const res = await fetch(`${main_url}/workers`);
        const resAdmins = await fetch(
            `${main_url}/kurort-upravlyaiushies?_where[show_eq]=true&_sort=id:ASC`
        );

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