<script lang="ts">
	import { cn } from '@/utils';
	import { Menu } from 'lucide-svelte';
	import { Button } from './ui/button';
	import { ScrollArea } from './ui/scroll-area';
	import * as Sheet from './ui/sheet';

	let open = false;

	function handleClick() {
		open = false;
	}
</script>

<Sheet.Root bind:open>
	<Sheet.Trigger asChild let:builder>
		<Button builders={[builder]} variant="ghost" size="icon-sm" class="md:hidden">
			<Menu class="h-5 w-5" />
			<span class="sr-only">Toggle Menu</span>
		</Button>
	</Sheet.Trigger>
	<Sheet.Content side="left" class="pr-0">
		<a href="/" class="mr-6 text-lg font-bold"> DCommunity </a>
		<ScrollArea orientation="both" class="my-4 h-[calc(100vh-8rem)] pb-10">
			<nav class="flex flex-col items-start gap-y-4 font-medium">
				<a
					href="#features"
					on:click={handleClick}
					class={cn('text-foreground/60 transition-colors hover:text-foreground/80')}
				>
					Features
				</a>
				<a
					href="#roadmap"
					on:click={handleClick}
					class={cn('text-foreground/60 transition-colors hover:text-foreground/80')}
				>
					Roadmap
				</a>
				<a
					href="#get-started"
					on:click={handleClick}
					class={cn('text-foreground/60 transition-colors hover:text-foreground/80')}
				>
					Get Started
				</a>
				<a
					href="#contact"
					on:click={handleClick}
					class={cn('text-foreground/60 transition-colors hover:text-foreground/80')}
				>
					Contacts
				</a>
			</nav>
		</ScrollArea>
	</Sheet.Content>
</Sheet.Root>
