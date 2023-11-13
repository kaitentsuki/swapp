<template>
    <div class="grid sm:grid-cols-3 lg:px-10 grid-rows-1 gap-4 my-10">
        <div v-for="item in items" class="bg-gray-900 w-full text-center flex flex-col items-center justify-start py-8 hover:scale-105 transition-all">
            <div class="flex-1 mb-8">
            <Icon :name="item.icon" class="text-white" size="80"/>
            </div>
            <span class="uppercase text-lime-500 font-bold text-xl"> 
                {{item.label}}
            </span>
        </div>
    </div>
</template>
<script lang="ts" setup>
const items = [
    {
        icon: 'fa6-solid:cubes',
        label: 'Skladové systémy'
    },
    {
        icon: 'fa6-solid:laptop-code',
        label: 'Automatizace provozu'
    },
    {
        icon: 'fa6-solid:code',
        label: 'Aplikace na míru'
    }
]
</script>
