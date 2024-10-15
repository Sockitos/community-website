<script lang="ts">
	import { base } from '$app/paths';
	import * as Section from '@/components/section';
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

<Section.Root id="about">
	<Section.Header>
		<Button href="https://dcitizens.eu" target="_blank" variant="secondary" size="sm">
			Made by DCitizens
			<ExternalLink class="ml-2 h-4 w-4" />
		</Button>
		<Section.Title tag="h1" class="md:text-6x text-5xl font-bold"
			>Community<br />Platform</Section.Title
		>
		<Section.Description>
			A platform to enhance and connect communities. This work is a part of the DCitizens project
			that focuses on empowering citizens with and through digital technologies.</Section.Description
		>
	</Section.Header>
	<Section.Content>
		<div class="flex flex-row gap-x-4">
			<Button size="sm">Get Started</Button>
			<Button variant="outline" size="sm">Learn More</Button>
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
			<div class="flex flex-row gap-x-4">
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
			<Button variant="ghost" size="sm">
				Suggest a feature
				<ArrowRight class="ml-1 h-4 w-4" />
			</Button>
		</div>
		<div class="flex w-full flex-col">
			<h3 class="text-xl font-semibold">{features[selectedIndex].title}</h3>
			<p class="max-w-xl text-balance text-muted-foreground">
				{features[selectedIndex].description}
			</p>
			<div class="mt-2 aspect-video overflow-hidden rounded-xl border bg-background shadow-xl">
				<img
					src={`${base}${features[selectedIndex].screenshot}`}
					alt={features[selectedIndex].title}
					class="h-full w-full object-cover"
				/>
			</div>
		</div>
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
				<div class="flex w-full max-w-3xl gap-x-8">
					<div class="flex flex-col items-center">
						<div class="mt-1 h-5 w-5 shrink-0 rounded-full bg-primary"></div>
						<Separator orientation="vertical" />
					</div>
					<div class="mb-4 flex w-full flex-1 flex-col items-start">
						<div class="flex w-full items-center justify-between gap-x-4">
							<p class="text-xl font-semibold">
								{feature.title}
							</p>
							<Badge variant="secondary">{feature.eta}</Badge>
						</div>
						<p class="max-w-xl text-balance text-muted-foreground">
							{feature.description}
						</p>
						<Badge variant="outline" class="mt-2">{feature.status}</Badge>
					</div>
				</div>
			{/each}
		</Section.Content>
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
