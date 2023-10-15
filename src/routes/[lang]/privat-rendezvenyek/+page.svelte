<script lang="ts">
	import type { PageData } from './$types';
	import bagelBg from '$lib/assets/bagels_bg.png';
	import { scrollTo, scrollRef } from 'svelte-scrolling';
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css/core';

	export let data: PageData;

	const options = {
		type: 'loop',
		perPage: 1,
		rewind: true,
		arrows: false,
		pagination: false,
		autoplay: true,
		interval: 3000
	};
</script>

<div class="mt-[86px]">
	<div class="py-12 overflow-hidden relative">
		<div class="mx-auto px-6 !z-10 max-w-2xl">
			<h1 class="h1 text-primary-500">Privát rendezvények</h1>
			<p class="pt-6">
				Bagelezőnk egy igazi kis ékszerdoboz, kitűnő helyszín kisebb rendezvények lebonyolításához.
				A helyszín 30 fő befogadására képes, így születésnapra, baby showerre, vagy akár üzleti
				találkozókra is kibérelheted 13. kerületi éttermünkent. Igény szerint dekorációval
				készülünk, illetve egyedileg összeállított csomagok alapján biztosítunk kóser ételeket,
				italakot. ​
			</p>
			<p class="pt-6">Vedd fel velünk a kapcsolatot!</p>
			<button
				use:scrollTo={{ ref: 'rendeles', duration: 800 }}
				class="mt-8 btn variant-filled-primary btn-lg">Érdekel</button
			>
		</div>
		<img
			src={bagelBg}
			alt="bagel"
			class="absolute hidden lg:block !inset-0 opacity-70 -z-[1] w-full h-full object-bottom !object-cover"
		/>
	</div>

	<div class="bg-primary-500 py-12">
		<div class="max-w-4xl mx-auto space-y-12">
			<div class="grid grid-cols-2 items-center gap-6">
				<Splide {options} hasTrack={false}>
					<SplideTrack aria-atomic="false">
						<SplideSlide>...</SplideSlide>
						<SplideSlide>...</SplideSlide>
					</SplideTrack>
				</Splide>
				<div class="text-white">
					<h3 class="h3 pb-4">BOOKS’N’BAGELS</h3>
					<p class="">
						Books'n'Bagels eseménysorozatunk minden hónap utolsó szerdáján kerül megrendezésre,
						amely keretein belül a klubtagok egy-egy kortárs zsidó író művét veszik górcső alá. Az
						eseményre bagelfalatkákkal készülünk.
					</p>
				</div>
			</div>
			<div class="grid grid-cols-2 items-center gap-6">
				<div class="text-white">
					<h3 class="h3 pb-4">SZÜLETÉSNAP</h3>
					<p class="">
						Születésnapi családi-baráti összejövetelre is tökéletesen alkalmas helyszínt nyújt
						bagelezőnk. A modern enteriőr, a személyre szabott díszítés, és a Duna-parti panoráma
						egészen biztosan maradandó élményt adnak az ünnepeltnek! :)
					</p>
				</div>
				<Splide {options} hasTrack={false}>
					<SplideTrack aria-atomic="false">
						<SplideSlide>...</SplideSlide>
						<SplideSlide>...</SplideSlide>
					</SplideTrack>
				</Splide>
			</div>
		</div>
	</div>

	<div class="py-12" use:scrollRef={'rendeles'}>
		<form class="max-w-2xl px-6 mx-auto space-y-4">
			<h3 class="h1 text-center text-primary-500 pb-3">Rendelés</h3>
			<input
				type="text"
				placeholder="name"
				class="input placeholder:text-gray-200 text-white focus-within:border-primary-500 focus-within:bg-transparent bg-primary-500 w-full"
			/>
			<input
				type="email"
				placeholder="email"
				class="input placeholder:text-gray-200 text-white focus-within:border-primary-500 focus-within:bg-transparent bg-primary-500 w-full"
			/>
			<input
				type="text"
				placeholder="Your name"
				class="input placeholder:text-gray-200 text-white focus-within:border-primary-500 focus-within:bg-transparent bg-primary-500 w-full"
			/>
			<textarea
				placeholder="Message"
				rows="4"
				class="textarea rounded-3xl placeholder:text-gray-200 text-white focus-within:border-primary-500 focus-within:bg-transparent bg-primary-500 w-full"
			/>
			<button class="btn variant-filled-primary w-full" type="submit">Rendelés</button>
		</form>
	</div>
</div>
