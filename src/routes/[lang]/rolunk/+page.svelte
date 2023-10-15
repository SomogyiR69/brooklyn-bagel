<script lang="ts">
	import type { PageData } from './$types';
	import bagelBg from '$lib/assets/bagels_bg.png';
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
	<div class=" py-12 min-h-[calc(100vh-86px-97px)] relative">
		<img
			src={bagelBg}
			alt="bagel"
			class="absolute hidden lg:block !inset-0 opacity-70 -z-[1] w-full h-full object-bottom !object-cover"
		/>
		<div class="max-w-4xl mx-auto space-y-12">
			<div class="text-primary-500 max-w-2xl mx-auto">
				<h1 class="h1 pb-4">Rólunk</h1>
				<p class="">
					A 13. kerület ékszerdobozában található szeretett kis reggelizőnk. Prémium Costa kávékkal
					és igazi reggeli ínyencségekkel várunk Titeket. Hogy miért a bagelek dominálnak? Mert
					imádjuk minden forrmáját. Legyen az avokádós, lazacos, tojáskrémes, vagy akár
					kecskesajtos. Egy biztos a Duna part mellett egy jó bagel és egy forró kávé biztos
					tökéletes napindító lesz. Ez a Brooklyn Bagel!
				</p>
			</div>

			<div class="grid grid-cols-2 items-center gap-6">
				<div class="text-primary-500">
					<h2 class="h2 pb-4">Bagelek</h2>
					<p class="">
						Nálunk minden a tökéletes bagelekről szól. Friss alapanyagok, prémium termékek és
						hangulatos enteriör. A begelek mellett finom sütikkel és koktélokkal is várunk Titeket.
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
</div>
