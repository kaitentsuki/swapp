<template>
    <div class="bg-gray-900 text-white -mx-20 px-20 flex justify-center py-10 !mt-auto">
        <div class="max-w-7xl flex w-full space-x-10">
            <div class="flex flex-col space-y-2 w-1/4">
                <div class="max-h-16 h-full flex-1 pb-8">
                    <img src="@/assets/images/logo_white.png" alt="Logo" class="max-h-[40px]">
                </div>
                <NuxtLink to="#about" class="uppercase link">Co děláme</NuxtLink>
                <NuxtLink to="#references" class="uppercase link">Reference</NuxtLink>
                <NuxtLink to="#contact" class="uppercase link">Co děláme</NuxtLink>
            </div>
            <div class="flex flex-col space-y-2 w-1/4">
                <div class="max-h-16 h-full flex-1 pb-8">
                    <h4 class="font-bold uppercase">Nabídka služeb</h4>
                </div>
                <NuxtLink to="#" class="uppercase link">Skladové systémy</NuxtLink>
                <NuxtLink to="#" class="uppercase link">Automatizace provozu</NuxtLink>
                <NuxtLink to="#" class="uppercase link">Aplikace na míru</NuxtLink>
            </div>
            <div class="flex flex-col space-y-2 flex-1 w-2/4">
                <div class="max-h-16 h-full flex-1 pb-8">
                    <h4 class="font-bold uppercase">Kontakt</h4>
                </div>
               <div class="flex justify-between">
                <span class="uppercase">
                    Obchod
                </span>
                <a href="tel:+420731105037" class="text-lime-500 uppercase hover:underline">+420 731 105 037</a>
                <span class="text-lime-500 uppercase">PO-PÁ: 9:00 - 16:00</span>
               </div>
               <div class="flex justify-between">
                <span class="uppercase">
                    Podpora
                </span>
                <a href="tel:+420739101800" class="text-lime-500 uppercase hover:underline">+420 739 101 800</a>
                <span class="text-lime-500 uppercase">PO-PÁ: 9:00 - 16:00</span>
               </div>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>
<style>
    .link:hover {
        @apply hover:text-lime-500;
    }
</style>
