<script>
	import Footer from '@/components/footer.svelte';
	import Header from '@/components/header.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
</script>

<ModeWatcher />

<div class="flex min-h-screen flex-col bg-background">
	<Header />
	<main class="flex-1">
		<slot />
	</main>
	<Footer />
</div>
