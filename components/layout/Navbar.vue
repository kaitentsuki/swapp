<template>
    <div class="flex items-center pb-4 pt-4 md:pt-0 absolute left-0 top-0 w-full px-5 lg:px-20">
            <NuxtLink to="/">
            <img src="@/assets/images/logo.png" alt="" class="max-w-[150px]">
        </NuxtLink>
        
        <div class="h-md text-white p-3 space-x-3 ml-auto flex-wrap hidden md:flex">
            <a href="tel:+420731105037" class="inline-flex items-center font-medium ml-auto mb-2 p-2 rounded-md text-gray-800 bg-gradient-to-bl from-lime-400 to-lime-600 hover:scale-105 origin-right transition-all">
                <Icon name="fa6-solid:phone" size="15" class="mr-2"/>
                <span>+420 731 105 037</span>
            </a>
            <div class="space-x-2 w-full flex justify-end">
                <LayoutNavbarItem v-for="item in menu" :label="item.label" :to="item.to"/>
            </div>
        </div>
        <div class="md:hidden ml-auto">
            <button @click="toggleMenu" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-lime-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div v-show="menuOpen" class="w-full h-screen bottom-0 top-20 z-50 mt-5 bg-gray-900 fixed left-0 p-4">
        <div class="space-y-2 w-full flex flex-col justify-end mb-10">
                <LayoutNavbarItem v-for="item in menu" :label="item.label" :to="item.to"/>
            </div>
            <a href="tel:+420731105037" class="inline-flex items-center font-medium ml-auto mb-2 p-2 rounded-md text-gray-800 bg-gradient-to-bl from-lime-400 to-lime-600 hover:scale-105 origin-right transition-all">
                <Icon name="fa6-solid:phone" size="15" class="mr-2"/>
                <span>+420 731 105 037</span>
            </a>
    </div>
        </div>
        </div>
</template>
<script setup>
const menuOpen = ref(false);

const route = useRoute();
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
];

watch(() => route.path, () => {
    console.log('aaa');
    menuOpen.value = false;
}, {
    deep: true
})

const toggleMenu = () => menuOpen.value = !menuOpen.value;
</script>