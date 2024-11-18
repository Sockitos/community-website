<script>
	import { base } from '$app/paths';
	import { Github } from 'lucide-svelte';
	import MainNav from './main-nav.svelte';
	import MobileNav from './mobile-nav.svelte';
	import ModeToggle from './mode-toggle.svelte';
	import { Button } from './ui/button';
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex h-14 flex-row items-center gap-x-4">
		<MobileNav />
		<a href="{base}/" class="mr-auto font-bold">DCommunity</a>
		<MainNav />
		<div class="flex flex-row items-center">
			<Button
				href="https://github.com/Sockitos/community"
				target="_blank"
				variant="ghost"
				size="icon-sm"
			>
				<Github class="h-4 w-4" />
			</Button>
			<ModeToggle />
		</div>
	</div>
</header>
