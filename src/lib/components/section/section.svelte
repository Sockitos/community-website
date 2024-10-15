<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<section class={cn('container mx-auto flex flex-col gap-y-4 py-20', className)} {...$$restProps}>
	<slot />
</section>
