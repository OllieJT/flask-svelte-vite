import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import preprocess from 'svelte-preprocess';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte({
			preprocess: [preprocess({ postcss: true })],
		}),
	],
	resolve: {
		alias: {
			$src: path.resolve('./src'),
		},
	},
});
