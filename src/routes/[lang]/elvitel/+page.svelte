<script lang="ts">
	import type { PageData } from './$types';
	import { scrollTo, scrollRef } from 'svelte-scrolling';
	import pic from '$lib/assets/elvitel.webp';

	export let data: PageData;
</script>

<div class="bg-white mt-[86px]">
	<section aria-labelledby="features-heading" class="relative">
		<div
			class="aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16"
		>
			<img
				src={pic}
				alt="Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen."
				class="h-full w-full object-cover object-right lg:h-full lg:w-full"
			/>
		</div>

		<div
			class="mx-auto max-w-2xl px-6 pt-16 pb-24 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32"
		>
			<div class="lg:col-start-2">
				<h2 id="features-heading" class="font-medium h1 text-primary-500">Elvitel</h2>

				<p class="mt-4 text-gray-500">
					Örömteli pillanatokat varázsolunk minden alkalomra! Képzeld el, amint a gyönyörűen
					díszített csomagolású bagelek mosolyt csalnak mindenki arcára, legyen szó egy informális
					összejövetelről, hivatalos meetingről, vagy akár egy piknikről a Margit-szigeten.
				</p>
				<p class="mt-4 text-gray-500">
					A kiváló minőségű bageljeink kínálatából válogatva biztos lehetsz benne, hogy mindenki
					megtalálja a kedvencét. Ráadásul a diszkrét és ízléses csomagolás még emlékezetesebbé
					teszi az ajándékozást!
				</p>
				<p class="mt-4 text-gray-500">
					Hozd be az igazi New York-i bagelek varázsát az eseményedre, és garantáltan maradandó
					emléket teremtesz. Készülj a mosolyokra és a finom falatokra, amikkel mindenkit elbűvölsz!
				</p>
				<button
					use:scrollTo={{ ref: 'rendeles', duration: 800 }}
					class="btn variant-filled-primary btn-lg mt-8">Rendelés leadása</button
				>
			</div>
		</div>
	</section>

	<div class=" py-12 bg-primary-500">
		<h1 class="text-center h1 text-white pb-12">Bármilyen eseményre jó választás lehet!</h1>
		<div class="max-w-2xl mx-auto grid md:grid-cols-2 px-6 gap-6">
			<div class="p-4 card variant-ringed-surface text-white">
				<h3 class="">Piknik</h3>
				<p class="">
					Ha baráti piknikre készültök, a bagel a lehető legjobb választás! Szállítsd el könnyedén
					az elemózsiát a megfelelő helyszínre. Plusz pont egyedi dobozunk, ha Insta-worthy képeket
					készítenétek a piknikről! :)
				</p>
			</div>
			<div class="p-4 card variant-ringed-surface text-white">
				<h3 class="">Házibuli</h3>
				<p class="">
					Lepd meg a vendégsereget gyönyörűen csomagolt bagelekkel! Egy igazán kreatív ajándékötlet,
					ha nem csak az ízélményre helyeznéd a hangsúlyt!
				</p>
			</div>
			<div class="p-4 card variant-ringed-surface text-white">
				<h3 class="">Céges rendezvény</h3>
				<p class="">
					Kollégáid egészen biztosan el lesznek ámulva az ízléses csomagolástól. Várj amíg meglátják
					mit rejt a csinos doboz! :)
				</p>
			</div>
			<div class="p-4 card variant-ringed-surface text-white">
				<h3 class="">Meeting</h3>
				<p class="">Ha nem csak saját prezentációddal nyűgöznéd le társaidat!</p>
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
