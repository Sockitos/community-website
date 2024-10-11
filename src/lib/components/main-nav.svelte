<script lang="ts">
	import { page } from '$app/stores';
	import { cn } from '@/utils';
</script>

<nav class="flex flex-row items-center gap-4 text-sm lg:gap-6">
	<a
		class={cn(
			'transition-colors hover:text-foreground/80',
			$page.url.pathname.startsWith('/about') ? 'text-foreground' : 'text-foreground/60'
		)}
		href="/">About</a
	>
	<a
		class={cn(
			'transition-colors hover:text-foreground/80',
			$page.url.pathname.startsWith('/features') ? 'text-foreground' : 'text-foreground/60'
		)}
		href="/">Features</a
	>
	<a
		class={cn(
			'transition-colors hover:text-foreground/80',
			$page.url.pathname.startsWith('/roadmap') ? 'text-foreground' : 'text-foreground/60'
		)}
		href="/">Roadmap</a
	>
	<a
		class={cn(
			'transition-colors hover:text-foreground/80',
			$page.url.pathname.startsWith('/contact') ? 'text-foreground' : 'text-foreground/60'
		)}
		href="/">Contact</a
	>
</nav>
