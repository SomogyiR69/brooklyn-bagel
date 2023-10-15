/* import '@inlang/sdk-js/no-transforms';
import { initLoadWrapper } from '@inlang/sdk-js/adapter-sveltekit/shared';
import type { PageLoad } from './$types.js';

import directus from '$lib/directus';

export const load = initLoadWrapper<PageLoad>().use(async ({ params }) => {
	const { data } = await directus.items('hamszaContact_translations').readByQuery({
		fields: ['*'],
		filter: {
			languages_code: params.lang
		}
	});

	return {
		props: {
			data: data
		}
	};
}) satisfies PageLoad;
 */
