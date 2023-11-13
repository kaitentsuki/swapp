<template>
    <div class="flex flex-col">
        <div class="h-full flex pt-40 -mx-5 lg:-mx-20 -mt-3 px-5 lg:px-20 pb-20 banner-wrapper min-h-[500px] justify-center">
        <div class="w-full flex justify-between max-w-7xl">
            <div class="w-full sm:w-1/2 animate-slideLeft delay-750">
            <h1 class="font-bold text-lime-400 text-6xl leading-[1.2]">
            SWAPP SOFTWARE
            </h1>
            <p class="text-2xl mt-10 max-w-xl text-white">
                Nabízíme inteligentní softwarové technologie vyvinuté individuálně na míru tak, aby urychlily jednotlivé procesy a minimalizovaly náklady.
            </p>
        </div>
        <div class="items-start justify-center w-1/2 hidden sm:flex">
            <img src="@/assets/images/laptop.png" alt="" class="max-h-[400px] animate-slideRight">
        </div>
        </div>
    </div>
    <div class="py-10 flex justify-center" id="about">
        <div>
            <div class="max-w-7xl">
            <h2 class="font-medium text-3xl uppercase mb-8">Co děláme</h2>
        <p>
            Jsme mladá dynamicky se rozvíjející společnost poskytující individuální řešení v oblasti skladových systémů, automatizace provozu a softwaru vytvořeného na míru. Vyvíjíme špičkové moderní informační systémy pro podniky všech oborů činnosti a velikostí. Naším cílem je, aby každý zákazník obdržel optimální, na míru připravené řešení svých požadavků.
        </p>
        </div>
        <ServicesList />
        </div>
    </div>
    <div class="py-10 flex justify-center" id="references">
        <div>
            <div class="max-w-7xl">
            <h2 class="font-medium text-3xl uppercase mb-8">Reference</h2>
        <p>
            I přes krátké působení na trhu jsou mezi našimi spokojenými zákazníky významné české i mezinárodní společnosti, se kterými dále spolupracujeme na rozvoji jejich logistických a provozních řešeních.
        </p>
        </div>
        <ReferencesList />
        </div>
    </div>
    <div class="py-10 flex justify-center bg-gray-100 lg:-mx-20" id="contact">
        <div class="text-center">
            <div class="max-w-7xl">
            <h2 class="font-medium text-3xl uppercase mb-4">Zajímá vás řešení SWAPP?</h2>
        <p class="mb-4">
            Chcete se dozvědět více?
        </p>

        <button @click="() => contactModalOpen = true" class="rounded-md bg-lime-500 text-white uppercase py-2 px-4 hover:bg-lime-600" >
            Kontaktujte nás
        </button>
        </div>
        </div>
    </div>

    <ContactModal v-if="contactModalOpen" @close="contactModalOpen = false"/>
    </div>
</template>
<script setup>
const contactModalOpen = ref(false);
</script>
<style scoped>
.banner-wrapper {
    background: url('@/assets/images/top_banner.png');
    background-size: cover;
    background-position: right;
    background-repeat: no-repeat;
}
</style>
