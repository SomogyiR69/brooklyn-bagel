<script lang="ts">
	import { scrollTop } from 'svelte-scrolling';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import BsChevronBarUp from 'svelte-icons-pack/bs/BsChevronBarUp';
	export let navColor: boolean;
</script>

<button
	class={`fixed bottom-0 right-6 z-50 btn variant-filled-primary border border-surface-500 border-b-0 rounded-b-none ${
		navColor ? '' : 'hidden'
	}`}
	on:click={() => scrollTop()}
>
	<Icon src={BsChevronBarUp} className="text-2xl" /></button
>
