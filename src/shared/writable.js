import { writable } from 'svelte/store';

export const imdbIDStore = writable('');

export const buttonRefStore = writable(null);

export const searchStore = writable('');
