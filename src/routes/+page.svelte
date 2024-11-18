<script lang="ts">
	import * as Section from '@/components/section';
	import Slideshow from '@/components/slideshow.svelte';
	import Badge from '@/components/ui/badge/badge.svelte';
	import { Button } from '@/components/ui/button';
	import Separator from '@/components/ui/separator/separator.svelte';
	import { features } from '@/features';
	import { roadmap } from '@/roadmap';
	import { cn } from '@/utils';
	import { ArrowRight, ExternalLink, Mail } from 'lucide-svelte';
	import { cubicInOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	const [send, receive] = crossfade({
		duration: 250,
		easing: cubicInOut
	});
	let selectedIndex = 0;
</script>

<Section.Root id="hero">
	<Section.Header>
		<Button href="https://dcitizens.eu" target="_blank" variant="secondary" size="sm">
			Made by DCitizens
			<ExternalLink class="ml-2 h-4 w-4" />
		</Button>
		<Section.Title tag="h1" class="md:text-6x text-5xl font-bold">DCommunity</Section.Title>
		<Section.Description>
			A platform to enhance and connect communities. This work is a part of the DCitizens project
			that focuses on empowering citizens with and through digital technologies.
		</Section.Description>
	</Section.Header>
	<Section.Content>
		<div class="flex flex-row gap-x-4">
			<Button href="#get-started" size="sm">Get Started</Button>
			<Button href="https://github.com/Sockitos/community" variant="outline" size="sm">
				Learn More
			</Button>
		</div>
	</Section.Content>
</Section.Root>
<Section.Root id="features">
	<Section.Header>
		<Section.Title>Features</Section.Title>
		<Section.Description>
			This platform has a set of features that were designed to solve problems that many different
			communities face
		</Section.Description>
	</Section.Header>
	<Section.Content>
		<div class="flex w-full flex-row items-center justify-between">
			<div class="flex flex-wrap gap-x-2 gap-y-1">
				{#each features as feature, index (index)}
					{@const isActive = selectedIndex === index}
					<button
						on:click={() => (selectedIndex = index)}
						class={cn(
							'relative flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary',
							isActive ? 'font-medium text-primary' : 'text-muted-foreground'
						)}
					>
						{#if isActive}
							<div
								class="absolute inset-0 rounded-full bg-muted"
								in:send={{ key: 'activetab' }}
								out:receive={{ key: 'activetab' }}
							/>
						{/if}
						<div class="relative">
							{feature.title}
						</div>
					</button>
				{/each}
			</div>
			<Button
				href="https://forms.gle/SYnrYP7rfZCXuaTAA"
				target="_blank"
				variant="ghost"
				size="sm"
				class="hidden md:flex"
			>
				Suggest a feature
				<ArrowRight class="ml-1 h-4 w-4" />
			</Button>
		</div>
		<div class="flex w-full flex-col">
			<h3 class="text-lg font-semibold md:text-xl">{features[selectedIndex].title}</h3>
			<p class="max-w-xl text-balance text-sm text-muted-foreground md:text-base">
				{features[selectedIndex].description}
			</p>
			<div class="mt-2 aspect-video overflow-hidden rounded-xl border bg-background shadow-xl">
				<Slideshow
					images={features[selectedIndex].screenshots}
					alt={features[selectedIndex].title}
				/>
			</div>
		</div>
		<Button
			href="https://forms.gle/SYnrYP7rfZCXuaTAA"
			target="_blank"
			variant="ghost"
			size="sm"
			class="self-start md:hidden"
		>
			Suggest a feature
			<ArrowRight class="ml-1 h-4 w-4" />
		</Button>
	</Section.Content>
</Section.Root>
<Section.Root id="roadmap">
	<Section.Header>
		<Section.Title>Roadmap</Section.Title>
		<Section.Description>Check our roadmap to see what we are working on</Section.Description>
	</Section.Header>
	<Section.Content>
		<Section.Content>
			{#each roadmap as feature}
				<div class="flex w-full max-w-3xl gap-x-4 md:gap-x-8">
					<div class="flex flex-col items-center">
						<div
							class="mt-1.5 h-4 w-4 shrink-0 rounded-full bg-primary md:mt-1 md:h-5 md:w-5"
						></div>
						<Separator orientation="vertical" />
					</div>
					<div class="mb-4 flex w-full flex-1 flex-col items-start">
						<div class="flex w-full flex-row items-center justify-between gap-x-4">
							<p class="text-lg font-semibold md:text-xl">
								{feature.title}
							</p>
							<Badge variant="secondary">{feature.eta}</Badge>
						</div>
						<p class="max-w-xl text-balance text-sm text-muted-foreground md:text-base">
							{feature.description}
						</p>
						<Badge variant="outline" class="mt-2">{feature.status}</Badge>
					</div>
				</div>
			{/each}
		</Section.Content>
	</Section.Content>
</Section.Root>
<Section.Root id="get-started">
	<Section.Header>
		<Section.Title>Get Started</Section.Title>
		<Section.Description>
			Ready to start using DCommunity? Choose how you want to get started
		</Section.Description>
	</Section.Header>
	<Section.Content
		><p class="max-w-xs text-balance text-center text-sm text-muted-foreground">
			Contact us to request the platform to be hosted on our servers.
		</p>
		<div class="flex flex-col items-center gap-y-2">
			<Button
				href="https://forms.gle/WjfbJZErT5759TRi7"
				target="_blank"
				variant="outline"
				size="sm"
			>
				Request Hosting
			</Button>
		</div>
		<div class="flex flex-row items-center justify-center gap-x-2">
			<Separator class="max-w-64" />
			<span class="text-sm text-muted-foreground">OR</span>
			<Separator class="max-w-64" />
		</div>
		<div class="flex flex-col items-center gap-y-2">
			<Button
				href="https://github.com/Sockitos/community"
				target="_blank"
				variant="outline"
				size="sm"
			>
				Host Yourself
			</Button>
			<p class="max-w-xs text-balance text-center text-sm text-muted-foreground">
				Check our documentation and host your own instance of the platform.
			</p>
		</div>
	</Section.Content>
</Section.Root>
<Section.Root id="contact">
	<Section.Header>
		<Section.Title>Contact Us</Section.Title>
		<Section.Description>
			If you have any questions or feedback, please don't hesitate to contact us
		</Section.Description>
	</Section.Header>
	<Section.Content>
		<Button href="mailto:info@dcitizens.eu" variant="outline">
			<Mail class="mr-2 h-4 w-4" />
			Email
		</Button>
	</Section.Content>
</Section.Root>
