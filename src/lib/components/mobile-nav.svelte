<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import { cn } from '@/utils';
	import { Menu } from 'lucide-svelte';
	import { Button } from './ui/button';
	import { ScrollArea } from './ui/scroll-area';
	import * as Sheet from './ui/sheet';

	let open = false;

	beforeNavigate(() => {
		open = false;
	});
</script>

<Sheet.Root bind:open>
	<Sheet.Trigger asChild let:builder>
		<Button builders={[builder]} variant="ghost" size="icon-sm" class="md:hidden">
			<Menu class="h-5 w-5" />
			<span class="sr-only">Toggle Menu</span>
		</Button>
	</Sheet.Trigger>
	<Sheet.Content side="left" class="pr-0">
		<a href="/" class="mr-6 text-lg font-bold"> Community </a>
		<ScrollArea orientation="both" class="my-4 h-[calc(100vh-8rem)] pb-10">
			<nav class="flex flex-col items-start gap-y-4 font-medium">
				<a
					href="#about"
					class={cn(
						'transition-colors hover:text-foreground/80',
						false ? 'text-foreground' : 'text-foreground/60'
					)}
				>
					About
				</a>
				<a
					href="#about"
					class={cn(
						'transition-colors hover:text-foreground/80',
						false ? 'text-foreground' : 'text-foreground/60'
					)}
				>
					Features
				</a>
				<a
					href="#about"
					class={cn(
						'transition-colors hover:text-foreground/80',
						false ? 'text-foreground' : 'text-foreground/60'
					)}
				>
					Roadmap
				</a>
				<a
					href="#about"
					class={cn(
						'transition-colors hover:text-foreground/80',
						false ? 'text-foreground' : 'text-foreground/60'
					)}
				>
					Contacts
				</a>
			</nav>
		</ScrollArea>
	</Sheet.Content>
</Sheet.Root>
