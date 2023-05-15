<script lang="ts">
	import { Route, Router } from 'svelte-routing';
	import './app.postcss';
	import Home from './routes/Home.svelte';
	import Page from './routes/Page.svelte';

	// routing docs: https://github.com/EmilTholin/svelte-routing
	export let url = window.location.pathname;
</script>

<Router {url}>
	<Route path="/page/:id" component={Page} />
	<Route path="/page" component={Page} />
	<Route path="/" component={Home} />
</Router>
