<script lang="ts">
	import bagelBg from '$lib/assets/bagel_bg.png';
	import bagelBgMobil from '$lib/assets/bagel_bg_mobil.png';
</script>

<div class="relative w-screen h-[calc(100vh-86px)] mt-[86px] bg-white">
	<img
		class="absolute !inset-0 w-full h-full !object-cover portrait:block landscape:hidden"
		src={bagelBgMobil}
		alt="bagel"
	/>
	<img
		class="absolute !inset-0 w-full h-full !object-cover portrait:hidden landscape:block"
		src={bagelBg}
		alt="bagel"
	/>
	<div
		class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-primary-500"
	>
		<h1 class="h1 md:whitespace-nowrap">Üdvözlünk a bagel mennyországban!</h1>
		<br />
		<h2 class="h3">Budapest egyetlen kóser bagelezője</h2>
	</div>
</div>
