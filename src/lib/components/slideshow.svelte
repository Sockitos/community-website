<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	export let images: string[];
	export let alt: string;

	let index = 0;
	let interval: ReturnType<typeof setInterval>;

	function startInterval() {
		if (interval) clearInterval(interval);
		index = 0;
		if (images.length > 1) {
			interval = setInterval(() => {
				index = (index + 1) % images.length;
			}, 3000);
		}
	}

	$: {
		if (images) {
			startInterval();
		}
	}

	onMount(() => {
		startInterval();
		return () => {
			if (interval) clearInterval(interval);
		};
	});
</script>

<img src="{base}{images[index]}" {alt} class="h-full w-full object-cover" />
