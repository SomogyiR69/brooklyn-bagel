import { Directus } from '@directus/sdk';
const directus = new Directus('https://oc.sudev.hu');
export default directus;

export function getAssetURL(id: string) {
	if (!id) return null;
	return `https://oc.sudev.hu/assets/${id}`;
}
