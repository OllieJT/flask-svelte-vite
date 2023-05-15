<script lang="ts">
	import { Link, Route, Router } from 'svelte-routing';
	import Home from './routes/Home.svelte';
	import Page from './routes/Page.svelte';

	// routing docs: https://github.com/EmilTholin/svelte-routing
	export let url = window.location.pathname;
</script>

123123
<br />

<Router {url}>
	<nav>
		<Link to="/">Home</Link>
		<Link to="/page">Page</Link>
	</nav>
	<div>
		<Route path="/page/:id" component={Page} />
		<Route path="/page" component={Page} />
		<Route path="/" component={Home}/>
	</div>
</Router>
