<script lang="ts">
	import { enhance } from '$app/forms';
	import { scrollTo, scrollRef } from 'svelte-scrolling';
	import toast from 'svelte-french-toast';

	export let form: any;

	export let ref: string | undefined = undefined;
	export let containerClass: string | undefined = undefined;
</script>

<div class={`py-12 ${containerClass}`} use:scrollRef={ref ? ref : 'rendeles'}>
	<form
		class="max-w-2xl px-6 mx-auto space-y-4"
		method="post"
		action="?/send"
		use:enhance={() => {
			return async ({ update }) => {
				await update();
				toast.success('Your message has been sent!', {
					position: 'bottom-right'
				});
			};
		}}
	>
		<h3 class="h1 text-center text-primary-500 pb-3">Rendelés</h3>
		{#if form?.error}
			<p class="error">{form.error}</p>
		{/if}
		<input
			type="text"
			autocomplete="name"
			placeholder="name *"
			required
			value={form?.name ?? ''}
			class="input placeholder:text-gray-200 text-white focus-within:placeholder-primary-400 focus-within:text-primary-500 focus-within:border-primary-500 focus-within:bg-transparent bg-primary-500 w-full"
		/>
		<input
			type="email"
			placeholder="email *"
			required
			value={form?.email ?? ''}
			class="input placeholder:text-gray-200 text-white focus-within:placeholder-primary-400 focus-within:text-primary-500 focus-within:border-primary-500 focus-within:bg-transparent bg-primary-500 w-full"
		/>
		<input
			type="text"
			placeholder="phone"
			value={form?.phone ?? ''}
			class="input placeholder:text-gray-200 text-white focus-within:placeholder-primary-400 focus-within:text-primary-500 focus-within:border-primary-500 focus-within:bg-transparent bg-primary-500 w-full"
		/>
		<textarea
			placeholder="Message *"
			rows="4"
			required
			value={form?.message ?? ''}
			class="textarea rounded-3xl placeholder:text-gray-200 text-white focus-within:placeholder-primary-400 focus-within:text-primary-500 focus-within:border-primary-500 focus-within:bg-transparent bg-primary-500 w-full"
		/>
		<button class="btn variant-filled-primary w-full" type="submit">Rendelés</button>
	</form>
</div>
