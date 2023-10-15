<script lang="ts">
	import { i, language } from '@inlang/sdk-js';
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';

	import { scrollTo, scrollRef } from 'svelte-scrolling';
	import toast from 'svelte-french-toast';
	export let data: any;
	const { form, enhance, errors, constraints } = superForm(data.form);

	const contact = data.props.data[0];
</script>

<div class="mt-[86px]" />

<div
	class="grid md:grid-cols-2 pb-12 px-6 text-center max-w-7xl mx-auto lg:grid-cols-6 md:gap-x-6 lg:gap-y-12 text-surface-200 bg-transparent"
>
	<h1
		class="md:!col-start-2 md:col-span-2 lg:col-span-4 pb-12 text-primary-500 lg:pb-0 pt-12 h1 font-bold"
	>
		{data.title}
	</h1>
	<!-- <p class="md:!col-start-2 md:col-span-2 lg:col-span-4 pb-12 lg:pb-0 pt-12 px-6 lg:px-0">
		{@html data.description}
		<-- KÉRDÉSED VAN? <br /> Lépj kapcsolatba velünk az alábbi elérhetőségeken keresztül! <br /> Örömmel
		válaszolunk minden kérdésedre, és segítünk abban, hogy minél kellemesebb kulináris élményben lehessen
		részed! --
	</p> -->

	<div class="py-12 md:col-span-2 lg:col-span-4">
		<form class="max-w-2xl px-6 mx-auto space-y-4" method="POST" use:enhance>
			<h3 class="h1 text-center text-primary-500 pb-3">Rendelés</h3>

			<input
				type="text"
				name="name"
				placeholder="name *"
				required
				bind:value={$form.name}
				aria-invalid={$errors.name ? 'true' : undefined}
				class="input invalid:bg-red-500 placeholder:text-gray-200 text-white focus-within:placeholder-primary-400 focus-within:text-primary-500 focus-within:border-primary-500 focus-within:bg-transparent bg-primary-500 w-full"
				{...$constraints.name}
			/>
			{#if $errors.name}<span class="text-red-500">{$errors.name}</span>{/if}
			<input
				type="email"
				name="email"
				placeholder="email *"
				required
				bind:value={$form.email}
				aria-invalid={$errors.email ? 'true' : undefined}
				class="input invalid:bg-red-500 placeholder:text-gray-200 text-white focus-within:placeholder-primary-400 focus-within:text-primary-500 focus-within:border-primary-500 focus-within:bg-transparent bg-primary-500 w-full"
				{...$constraints.email}
			/>
			{#if $errors.email}<span class="text-red-500">{$errors.email}</span>{/if}
			<input
				type="text"
				name="phone"
				placeholder="phone"
				class="input placeholder:text-gray-200 text-white focus-within:placeholder-primary-400 focus-within:text-primary-500 focus-within:border-primary-500 focus-within:bg-transparent bg-primary-500 w-full"
				{...$constraints.phone}
			/>
			{#if $errors.phone}<span class="text-red-500">{$errors.phone}</span>{/if}
			<textarea
				placeholder="Message *"
				name="message"
				rows="4"
				required
				bind:value={$form.message}
				aria-invalid={$errors.message ? 'true' : undefined}
				class="textarea invalid:bg-red-500 rounded-3xl placeholder:text-gray-200 text-white focus-within:placeholder-primary-400 focus-within:text-primary-500 focus-within:border-primary-500 focus-within:bg-transparent bg-primary-500 w-full"
				{...$constraints.message}
			/>
			{#if $errors.message}<span class="text-red-500">{$errors.message}</span>{/if}
			<button class="btn variant-filled-primary w-full">Rendelés</button>
		</form>
	</div>

	<div
		class="flex flex-col lg:col-span-2 text-surface-200 mb-6 lg:m-0 space-y-3 bg-primary-500 rounded-md lg:items-center lg:w-full p-6"
	>
		<h1 class="text-center text-xl pb-2 font-bold">
			{contact.contacts_title}
		</h1>
		{#each contact.contact_infos as info}
			{#if info.type === 'phone'}
				<div class="text-center">
					<!-- <HiPhone class="h-16 w-16 mx-auto p-3 bg-gray-200 rounded-lg mb-3 text-ocyellow-100" /> -->
					<h3 class=" font-bold text-lg">{info.title}</h3>
					<a href={`tel:${info.href}`} class="">
						{info.href}
					</a>
				</div>
			{:else if info.type === 'email'}
				<div class="text-center">
					<!-- <MdOutlineAlternateEmail
						class="h-16 w-16 mx-auto p-3 bg-gray-200 rounded-lg mb-3 text-ocyellow-100"
					/> -->
					<h3 class="font-bold text-lg">{info.title}</h3>
					<a href={`mailto:${info.href}`} class="">
						{info.href}
					</a>
				</div>
			{:else if info.type === 'address'}
				<div class="text-center">
					<!-- <IoLocationOutline
						class="h-16 w-16 mx-auto p-3 bg-gray-200 rounded-lg mb-3 text-ocyellow-100"
					/> -->
					<h3 class=" font-bold text-lg">{info.title}</h3>
					<p class="">{info.href}</p>
				</div>
			{:else}
				<div class="text-center">
					<!-- <HiOutlineOfficeBuilding
						class="h-16 w-16 mx-auto p-3 bg-gray-200 rounded-lg mb-3 text-ocyellow-100"
					/> -->
					<h3 class=" font-bold text-lg">
						{language === 'en-US' ? 'Company Name' : 'Cégnév'}
					</h3>
					<p class="">{info.title}</p>
				</div>
			{/if}
		{/each}

		<h1 class="text-center pb-2 pt-6 text-xl font-bold">
			{contact.openings_title}
		</h1>
		{#each contact.openings as open}
			<div class="justify-center gap-x-2 flex">
				<h3 class="font-bold">{open.days}</h3>
				<h3 class="">{open.hours}</h3>
			</div>
		{/each}
	</div>

	<!-- <iframe
		title="map"
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2693.927484620769!2d21.620587724507615!3d47.530274772861944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47470fac5382b6cf%3A0x12a79987ed162c5f!2sHamsza%20%C3%89tterem!5e0!3m2!1shu!2shu!4v1696589205249!5m2!1shu!2shu"
		width="100%"
		height="100%"
		style="border:0;"
		allowfullscreen
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
		class=" h-96 md:col-span-2 mb-6 lg:mb-12 lg:w-full lg:col-span-6 lg:rounded-md shadow-md"
	/> -->
</div>
