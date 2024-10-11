<script>
	import { Github } from 'lucide-svelte';
	import MainNav from './main-nav.svelte';
	import ModeToggle from './mode-toggle.svelte';
	import { Button } from './ui/button';
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex h-14 flex-row items-center gap-x-4">
		<a class="mr-auto font-bold">Community</a>
		<MainNav />
		<div class="flex flex-row items-center">
			<Button variant="ghost" size="icon-sm">
				<Github class="h-4 w-4" />
			</Button>
			<ModeToggle />
		</div>
	</div>
</header>
