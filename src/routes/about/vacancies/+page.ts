import { siteData } from '$lib/store';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const load = (async () => {
    const main_url = get(siteData).api_url;
    const url = new URL('kurort-vakancies', main_url);
    url.searchParams.append('_sort', 'Name:ASC');
    try {
        const response = await fetch(url);
        if(response.ok) {
            const vacancies = await response.json();
            return { vacancies, main_url };
        } else {
            return {
                vacancies: [], main_url
            }
        }
    } catch (error) {
        console.log(error);
        return {
            vacancies: [], main_url
        }
    }
}) satisfies PageLoad;