<template>
    <div class="flex items-center pb-4 absolute left-0 top-0 w-full px-20">
            <NuxtLink to="/">
            <img src="@/assets/images/logo.png" alt="" class="max-w-[150px]">
        </NuxtLink>
        
        <div class="h-md text-white p-3 space-x-3 ml-auto flex flex-wrap">
            <a href="tel:+420731105037" class="inline-flex items-center font-medium ml-auto mb-2 p-2 rounded-md text-gray-800 bg-gradient-to-bl from-lime-400 to-lime-600 hover:scale-105 origin-right transition-all">
                <Icon name="fa6-solid:phone" size="15" class="mr-2"/>
                <span>+420 731 105 037</span>
            </a>
            <div class="space-x-2 w-full flex justify-end">
                <LayoutNavbarItem v-for="item in menu" :label="item.label" :to="item.to"/>
            </div>
        </div>
        </div>
</template>
<script setup>
const menu = [
    {
        to: '#about',
        label: 'Co děláme'
    },
    {
        to: '#references',
        label: 'Reference'
    },
    {
        to: '#contact',
        label: 'Kontakt'
    }
]
</script>