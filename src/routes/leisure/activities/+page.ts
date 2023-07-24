import { siteData } from '$lib/store';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const load = (async () => {
    const main_url = get(siteData).api_url;
    try {
        const response = await fetch(`${main_url}/kurort-meropriyatiyas?_where[show_eq]=true&_sort=id:ASC`);
        if(response.ok) {
            const activities = await response.json();
            return { activities, main_url };
        } else {
            return {
                activities: [], main_url
            }
        }
    } catch (error) {
        console.log(error);
        return {
            activities: [], main_url
        }
    }
}) satisfies PageLoad;