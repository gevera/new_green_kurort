<script lang="ts">
	import Burger from './icons/Burger.svelte';
	import Close from './icons/Close.svelte';
	export let showClose = false;
</script>

<button
	class="btn btn-ghost max-w-[5.5rem] btn-sm normal-case rounded-full border border-gray-400 items-center flex-nowrap"
>
	<span class="font-bold">Меню</span>
	<span class="h-5 w-5">
		{#if showClose}
			<Close />
		{:else}
			<Burger />
		{/if}
	</span>
</button>
