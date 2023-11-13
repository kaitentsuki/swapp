<template>
    <div class="py-10">
        <p>
            Jsme mladá dynamicky se rozvíjející společnost poskytující individuální řešení v oblasti skladových systémů, automatizace provozu a softwaru vytvořeného na míru. Vyvíjíme špičkové moderní informační systémy pro podniky všech oborů činnosti a velikostí. Naším cílem je, aby každý zákazník obdržel optimální, na míru připravené řešení svých požadavků.
        </p>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'landing-page'
})

const pikaData = ref();

onMounted(async () => {
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
    pikaData.value = await resp.json();

    console.log(pikaData.value);
})
</script>
