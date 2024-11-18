<script lang="ts">
	import { base } from '$app/paths';

	let year = new Date().getFullYear();
</script>

<div class="flex h-40 flex-col items-center justify-between border border-t py-6">
	<a href="{base}/" class="font-bold">DCommunity</a>
	<p>© {year} DCommunity</p>
</div>
