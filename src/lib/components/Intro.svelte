<script lang="ts">
	import { language, i } from '@inlang/sdk-js';
	import pic from '$lib/assets/bagels.webp';
</script>

<div class="overflow-hidden bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl md:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
			<div class="px-6 lg:px-0 lg:pr-4">
				<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
					<p class=" text-lg leading-8 text-gray-600">
						Bagelezőnk Budapest egyik legszebb részén, a Jászai Mari tértől pár perc sétára, az
						Újpesti rakparton, a Zsilip Kulturális Központ szomszédságában helyezkedik el. Lépj be
						hozzánk a nyugalom szigetére, és felejtsd el az újlipótvárosi nyüzsgést! A Duna-parti
						panoráma pedig csak hab a tortán!
					</p>
					<p class="mt-6 text-lg leading-8 text-gray-600">
						Fedezd fel kínálatunkat, amely a bagelek mellett olyan különleges ínyencségeket ígér,
						mint a bulgursaláta, shakshuka, vagy a pasta pomodoro. Akkor is érdemes beugrani
						hozzánk, ha sütit, kávét, vagy ízletes koktélokat kóstolnál! Ha szülinap közeleg,
						rendeld meg tőlünk az ünnepi tortát! Személyre szabottan segítünk vendégeinknek
						kiválasztani a legmegfelelőbb ízeket. Ha pedig helyszínt is keresel a szülinapi bulihoz,
						vagy egyéb összejövetelhez, végképp jó helyen jársz! A bagelező ugyanis
						rendezvényhelyszínként is funkcionál.
					</p>
					<p class="mt-6 text-lg leading-8 text-gray-600">
						A Brooklyn Bagel Budapest egyedi és feledhetetlen helyszíne, ahol az ízek és a hangulat
						egyesülnek. Látogass el hozzánk, és engedd meg, hogy elkápráztassunk!
					</p>
					<div class="flex gap-x-4 mt-6">
						<a
							href="http://bit.ly/brooklynbagelfoglalas"
							class="btn btn-lg w-full variant-filled-primary">{i('asztalfoglalas')}</a
						>
						<a href="/" class="btn btn-lg w-full variant-filled-primary">{i('etlap')}</a>
					</div>
				</div>
			</div>
			<div class="sm:px-6 lg:px-0">
				<div class="relative overflow-hidden sm:mx-auto sm:max-w-2xl sm:rounded-3xl lg:max-w-none">
					<div class="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
						<img
							src={pic}
							alt="Product screenshot"
							width="2432"
							height="1442"
							class=" w-[57rem] max-w-none"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
