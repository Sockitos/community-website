<script lang="ts">
	import SectionDescription from '@/components/section-description.svelte';
	import SectionTitle from '@/components/section-title.svelte';
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

<section id="about" class="container mx-auto flex flex-col items-center gap-y-2 py-20">
	<Button href="https://dcitizens.eu" target="_blank" variant="secondary" size="sm">
		Made by DCitizens
		<ExternalLink class="ml-2 h-4 w-4" />
	</Button>
	<h1 class="text-center text-7xl font-bold">Community<br />Platform</h1>
	<p class="max-w-xl text-balance text-center text-lg text-muted-foreground">
		A platform to enhance and connect communities. This work is a part of the DCitizens project that
		focuses on empowering citizens with and through digital technologies.
	</p>
	<div class="mt-4 flex flex-row gap-x-4">
		<Button>Get Started</Button>
		<Button variant="outline">Learn More</Button>
	</div>
</section>
<section id="features" class="container mx-auto flex flex-col items-center gap-y-4 py-20">
	<SectionTitle>Features</SectionTitle>
	<SectionDescription>
		This platform has a set of features that were designed to solve problems that many different
		communities face
	</SectionDescription>
	<div class="mt-10 flex w-full flex-row items-center justify-between">
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
		<Button variant="ghost">
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
				src={features[selectedIndex].screenshot}
				alt={features[selectedIndex].title}
				class="h-full w-full object-cover"
			/>
		</div>
	</div>
</section>
<section id="roadmap" class="container mx-auto flex flex-col items-center gap-y-4 py-20">
	<SectionTitle>Roadmap</SectionTitle>
	<SectionDescription>Check our roadmap to see what we are working on</SectionDescription>
	<div class="mt-10 flex w-full max-w-4xl flex-col gap-y-4">
		{#each roadmap as feature}
			<div class="flex gap-x-8">
				<div class="flex flex-col items-center">
					<div class="mt-1 h-5 w-5 shrink-0 rounded-full bg-primary"></div>
					<Separator orientation="vertical" />
				</div>
				<div class="mb-4 flex flex-1 flex-col items-start">
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
	</div>
</section>
<section id="contact" class="container mx-auto flex flex-col items-center gap-y-4 py-20">
	<SectionTitle>Contact Us</SectionTitle>
	<SectionDescription>
		If you have any questions or feedback, please don't hesitate to contact us
	</SectionDescription>
	<Button href="mailto:info@dcitizens.eu" variant="outline">
		<Mail class="mr-2 h-4 w-4" />
		Email
	</Button>
</section>
