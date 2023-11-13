<template>
     <NuxtLink :to="to" class="inline-block text-white text-sm uppercase font-medium p-3 rounded-md border border-lime-400 hover:bg-lime-400 hover:text-gray-800 transition-all whitespace-nowrap">{{ label }}</NuxtLink>
</template>
<script setup>
const props = defineProps({
    label: String,
    to: String
})
</script>
