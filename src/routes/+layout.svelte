<script lang="ts">
	import '../app.postcss';

	import { initializeStores } from '@skeletonlabs/skeleton';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { i, language } from '@inlang/sdk-js';
	/* import ReserveModal from '$components/ReserveModal.svelte';
	import LanguageSwitcher from '$components/LanguageSwitcher.svelte';
	import Logo from '$components/Logo.svelte'; */
	import { Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	import { Modal } from '@skeletonlabs/skeleton';
	import type { ModalComponent } from '@skeletonlabs/skeleton';
	import { Toaster } from 'svelte-french-toast';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let y: number;
	initializeStores();
	const drawerStore = getDrawerStore();

	let screenHeight: any;
	let navColor: boolean = false;
	let scrolled = false;

	function setDirection(lang: any) {
		const elemHtmlClasses = document.documentElement;

		if (lang === 'he') {
			elemHtmlClasses.dir = 'rtl';
		} else {
			elemHtmlClasses.dir = 'ltr';
		}
	}
	onMount(() => {
		screenHeight = window.innerHeight;
		setDirection(language);
	});

	const modalComponentRegistry: Record<string, ModalComponent> = {
		/* ReserveModal: { ref: ReserveModal } */
		/* exampleImage: { ref: ModalExampleImage } */
	};

	$: if ($page.url.pathname === `${base}/${language}`) {
		if (y > screenHeight / 2) {
			navColor = true;
		} else {
			navColor = false;
		}
	} else {
		navColor = true;
	}
	$: if (y > 300) {
		scrolled = true;
	} else {
		scrolled = false;
	}
</script>

<svelte:head>
	<title>Brooklyn Bagel</title>
	<!-- <meta name="background-color" content="#00373D" /> -->
</svelte:head>
<svelte:window bind:scrollY={y} />
<Navbar {y} {screenHeight} {navColor} {scrolled} {setDirection} />
<Toaster />
<slot />
<Footer />
