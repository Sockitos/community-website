<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { HeadingLevel } from './index.js';

	type $$Props = HTMLAttributes<HTMLHeadingElement> & {
		tag?: HeadingLevel;
	};

	let className: $$Props['class'] = undefined;
	export let tag: $$Props['tag'] = 'h2';
	export { className as class };
</script>

<svelte:element
	this={tag}
	class={cn('text-4xl font-semibold leading-none tracking-tight md:text-5xl', className)}
	{...$$restProps}
>
	<slot />
</svelte:element>
