<script lang="ts">
	import { page } from '$app/stores';
	import { cn } from '@/utils';
</script>

<nav class="hidden flex-row items-center gap-4 text-sm md:flex lg:gap-6">
	<a
		class={cn(
			'transition-colors hover:text-foreground/80',
			$page.url.pathname.startsWith('/features') ? 'text-foreground' : 'text-foreground/60'
		)}
		href="#features">Features</a
	>
	<a
		class={cn(
			'transition-colors hover:text-foreground/80',
			$page.url.pathname.startsWith('/roadmap') ? 'text-foreground' : 'text-foreground/60'
		)}
		href="#roadmap">Roadmap</a
	>
	<a
		class={cn(
			'transition-colors hover:text-foreground/80',
			$page.url.pathname.startsWith('/get-started') ? 'text-foreground' : 'text-foreground/60'
		)}
		href="#get-started">Get Started</a
	>
	<a
		class={cn(
			'transition-colors hover:text-foreground/80',
			$page.url.pathname.startsWith('/contact') ? 'text-foreground' : 'text-foreground/60'
		)}
		href="#contact">Contact</a
	>
</nav>
