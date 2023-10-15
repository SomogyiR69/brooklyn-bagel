import { fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

import directus from '$lib/directus';

const schema = z.object({
	name: z.string(),
	email: z.string().email(),
	phone: z.string(),
	message: z.string()
});

export const load = (async ({ params }) => {
	const { data } = await directus.items('hamszaContact_translations').readByQuery({
		fields: ['*'],
		filter: {
			languages_code: params.lang
		}
	});

	const form = await superValidate(schema);

	return {
		props: {
			data: data,
			form: form
		}
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, schema);
		console.log('POST', form);

		// Convenient validation check:
		if (!form.valid) {
			// Again, return { form } and things will just work.
			return fail(400, { form });
		}

		// TODO: Do something with the validated form.data

		// Yep, return { form } here too
		return { form };
	}
} satisfies Actions;
