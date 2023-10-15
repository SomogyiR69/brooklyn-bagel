<script lang="ts">
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import AiOutlineDown from 'svelte-icons-pack/ai/AiOutlineDown';
	const popupHover: PopupSettings = {
		event: 'click',
		target: 'popupHover',
		placement: 'top'
	};

	export let navColor: boolean;
	export let setDirection: any;

	import { i, language, languages, switchLanguage } from '@inlang/sdk-js';
</script>

<span class="flex items-center cursor-pointer" use:popup={popupHover}>
	<p class={`text-white hover:brightness-125 uppercase text-base font-bold`}>
		{language === 'he' ? 'עִב' : language}
	</p>
	<Icon
		className={`fill-white  md:text-sm font-bold cursor-pointer hover:scale-105 hover:!brightness-125`}
		src={AiOutlineDown}
	/>

	<!-- <Icon
		className={`${
			'fiprimary-500 		} text-4xl md:text-xl cursor-pointer hover:scale-105 hover:!brightness-125`}
		src={IoLanguage}
	/> -->
</span>

<div class="card p-0 variant-filled-secondary" data-popup="popupHover">
	<div class="btn-group-vertical variant-glass-secondary">
		{#each languages as lang}
			<button on:click={() => (setDirection(lang), switchLanguage(lang))} class="hover:!text-white"
				>{i(lang)}</button
			>
		{/each}
	</div>
	<div class="arrow variant-filled-secondary" />
</div>
