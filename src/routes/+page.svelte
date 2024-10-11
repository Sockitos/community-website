<script lang="ts">
	import SectionDescription from '@/components/section-description.svelte';
	import SectionTitle from '@/components/section-title.svelte';
	import Badge from '@/components/ui/badge/badge.svelte';
	import { Button } from '@/components/ui/button';
	import Separator from '@/components/ui/separator/separator.svelte';
	import type { PlannedFeature } from '@/types';
	import { ExternalLink } from 'lucide-svelte';

	const roadmap: PlannedFeature[] = [
		{
			title: 'Internationalization',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			status: 'in_progress',
			eta: 'Q2 2024'
		},
		{
			title: 'Internationalization',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			status: 'in_progress',
			eta: 'Q2 2024'
		},
		{
			title: 'Internationalization',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			status: 'in_progress',
			eta: 'Q2 2024'
		},
		{
			title: 'Internationalization',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			status: 'in_progress',
			eta: 'Q2 2024'
		}
	];
</script>

<section id="hero" class="container mx-auto my-20 flex flex-col items-center gap-y-2">
	<Button variant="secondary" size="sm">
		Made by DCitizens
		<ExternalLink class="ml-2 h-4 w-4" />
	</Button>
	<h1 class="text-center text-7xl font-bold">Community<br />Platform</h1>
	<p class="max-w-xl text-balance text-center text-xl text-muted-foreground">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua.
	</p>
	<div class="mt-4 flex flex-row gap-x-4">
		<Button>Get Started</Button>
		<Button variant="outline">Learn More</Button>
	</div>
</section>
<section id="features" class="container mx-auto my-20 flex flex-col items-center gap-y-4">
	<SectionTitle>Features</SectionTitle>
	<SectionDescription>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua.
	</SectionDescription>
</section>
<section id="roadmap" class="container mx-auto my-20 flex flex-col items-center gap-y-4">
	<SectionTitle>Roadmap</SectionTitle>
	<SectionDescription>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua.
	</SectionDescription>
	<div class="mt-10 flex w-full max-w-4xl flex-col gap-y-4">
		{#each roadmap as feature}
			<div class="flex gap-x-8">
				<div class="flex flex-col items-center">
					<div class="mt-1 h-5 w-5 shrink-0 rounded-full bg-primary"></div>
					<Separator orientation="vertical" />
				</div>
				<div class="mb-4 flex flex-1 flex-col items-start gap-y-2">
					<div class="flex w-full items-center justify-between gap-x-4">
						<p class="text-xl font-semibold">
							{feature.title}
						</p>
						<Badge variant="secondary">{feature.eta}</Badge>
					</div>
					<p class="max-w-xl text-balance text-muted-foreground">
						{feature.description}
					</p>
					<Badge variant="outline">{feature.status}</Badge>
				</div>
			</div>
		{/each}
	</div>
</section>
<section id="contact" class="container mx-auto my-20 flex flex-col items-center gap-y-4">
	<SectionTitle>Contact Us</SectionTitle>
	<SectionDescription>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua.
	</SectionDescription>
</section>
