<script lang="ts">
	import svelteLogo from '$src/assets/svelte.svg';
	import { Link } from 'svelte-routing';
</script>

<main class="block w-full space-y-1">
	<div>
		<a href="https://vitejs.dev" target="_blank" class="inline-block">
			<img src="/vite.svg" class="logo vite p-6 h-40" alt="Vite Logo" />
		</a>
		<a href="https://svelte.dev" target="_blank" class="inline-block">
			<img src={svelteLogo} class="logo svelte p-6 h-40" alt="Svelte Logo" />
		</a>
	</div>
	<h1 class="text-3xl font-semibold text-white">Vite + Svelte</h1>

	<nav class="space-x-4 py-4 text-brand-400">
		<Link to="/" class="underline">Home</Link>
		<Link to="/page" class="">Sub Page</Link>
	</nav>

	<p class="text-white">
		Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank">SvelteKit</a>, the
		official Svelte app framework powered by Vite!
	</p>

	<p class="text-mono-400">Click on the Vite and Svelte logos to learn more</p>
</main>

<style>
	.logo {
		will-change: filter;
	}
	.logo.vite:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}
	.logo.svelte:hover {
		filter: drop-shadow(0 0 2em #ff3e00aa);
	}
</style>
