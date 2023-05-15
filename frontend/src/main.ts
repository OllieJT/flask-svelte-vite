import './app.scss';
import App from './App.svelte';

// @ts-expect-error - Svelte components don't have useful types for initialisation
const app = new App({
	target: document.getElementById('app') as HTMLElement,
	props: {},
});

export default app;
