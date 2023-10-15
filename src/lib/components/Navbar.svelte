<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Logo from '$lib/components/Logo.svelte';
	import FaSolidBars from 'svelte-icons-pack/fa/FaSolidBars';
	import FaBrandsInstagram from 'svelte-icons-pack/fa/FaBrandsInstagram';
	import FaBrandsFacebook from 'svelte-icons-pack/fa/FaBrandsFacebook';
	import Scrolltop from '$lib/components/Scrolltop.svelte';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import { i, language } from '@inlang/sdk-js';
	import { base } from '$app/paths';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import AiOutlineDown from 'svelte-icons-pack/ai/AiOutlineDown';
	const popupServices: PopupSettings = {
		event: 'click',
		target: 'popupServices',
		placement: 'top'
	};

	const drawerStore = getDrawerStore();
	const drawerSettings: DrawerSettings = {
		id: 'navbar',
		bgDrawer: 'bg-secondary-500 text-white',
		bgBackdrop: 'bg-primary-500/70 backdrop-blur-sm',
		width: 'w-[90vw]',
		padding: 'p-4',
		rounded: 'rounded-[--theme-rounded-container]'
	};

	export let y: number;
	export let navColor: boolean;
	export let scrolled: boolean;
	export let screenHeight: any;
	export let setDirection: any;
</script>

<div class="fixed top-0 z-[30] inset-x-0 w-screen bg-primary-500">
	<!-- style="background: rgba(41, 81, 52, {$page.url.pathname === `${base}/${language}`
		? (y / screenHeight) * 0.85
		: 1});  transition: opacity 0.5s ease;" -->
	<div
		class="max-w-7xl mx-auto grid grid-cols-7 lg:grid-cols-11 justify-between items-center px-4 transition-all duration-500"
	>
		<div class="flex lg:hidden col-span-2 items-center shrink-0">
			<button
				class={`${navColor ? 'fill-white' : 'fill-primary-500'} "btn btn-icon `}
				on:click={() => drawerStore.open(drawerSettings)}
			>
				<Icon src={FaSolidBars} size="30" />
			</button>
		</div>
		<div class="hidden lg:flex col-span-4 items-center gap-x-6 shrink-0">
			<a
				class:active={$page.url.pathname === `${base}/${language}/rolunk`}
				aria-label="Rólunk"
				class={`text-white hover:brightness-125 uppercase whitespace-nowrap text-base`}
				href={`${base}/${language}/rolunk`}>{i('rolunk')}</a
			>
			<a
				class:active={$page.url.pathname === `${base}/${language}/etlap`}
				aria-label="Étlap"
				class={`text-white hover:brightness-125 uppercase whitespace-nowrap text-base`}
				href={`${base}/${language}/etlap`}>{i('etlap')}</a
			>
			<span class="flex items-center cursor-pointer" use:popup={popupServices}
				><p
					class:active={$page.url.pathname === `${base}/${language}/elvitel`}
					aria-label="Services"
					class={`text-white hover:brightness-125 uppercase whitespace-nowrap text-base`}
				>
					{i('services')}
				</p>
				<Icon
					className={`fill-white  md:text-sm font-bold cursor-pointer hover:scale-105 hover:!brightness-125`}
					src={AiOutlineDown}
				/>
			</span>
			<div class="card p-0 variant-filled-secondary" data-popup="popupServices">
				<div class="btn-group-vertical variant-glass-secondary">
					<a href={`${base}/${language}/elvitel`} class="hover:!text-white">{i('elvitel')}</a>
					<a href={`${base}/${language}/privat-rendezvenyek`} class="hover:!text-white"
						>{i('privateEvent')}</a
					>
				</div>
				<div class="arrow variant-filled-secondary" />
			</div>
			<a
				class:active={$page.url.pathname === `${base}/${language}/kapcsolat`}
				aria-label="Kapcsolat"
				class={`text-white hidden lg:block hover:brightness-125 uppercase whitespace-nowrap text-base`}
				href={`${base}/${language}/kapcsolat`}>{i('kapcsolat')}</a
			>
		</div>
		<a
			aria-label="Kezdőlap"
			class="col-span-3 py-2 flex justify-center"
			href={`${base}/${language}`}
		>
			<Logo color={'fill-secondary-500'} width="70" height="70" />
		</a>
		<div class="flex justify-end lg:items-center col-span-2 lg:col-span-4 gap-x-4 shrink-0">
			<a
				aria-label="Asztalfoglalás"
				class={`text-white hidden lg:block hover:brightness-125 uppercase whitespace-nowrap text-base`}
				href="http://bit.ly/brooklynbagelfoglalas"
			>
				{i('asztalfoglalas')}</a
			>
			<div class="hidden lg:flex justify-end gap-x-0">
				<a href="#" aria-label="Tripadvisor">
					<Icon className={`text-2xl ${'fill-white'} btn btn-icon`} src={FaBrandsInstagram} />
				</a>
				<a href="#" aria-label="Facebook">
					<Icon className={`text-2xl ${'fill-white'} btn btn-icon`} src={FaBrandsFacebook} />
				</a>
			</div>
			<LanguageSwitcher {setDirection} {navColor} />
		</div>
	</div>
</div>

<Scrolltop navColor={scrolled} />

<style>
	.active {
		font-weight: 900;
	}
</style>
