<template>
    <div class="h-full flex justify-center w-full">
        <div class="px-20 w-full flex flex-col">
            <LayoutNavbar />
            <div class="">
                <div class="pt-40 bg-gray-900 -mx-20 -mt-3 px-20 pb-10 flex justify-center">
                    <div class="max-w-7xl w-full">
                        <h1 class="font-bold text-lime-400 text-5xl leading-[1.2] uppercase">Co děláme</h1>
                    </div>
                </div>
            <div class="flex justify-center">
                <div class="max-w-7xl w-full">
                    <NuxtPage />
                </div>
            </div>
            </div>
            <LayoutFooter />
        </div>
    </div>
</template>
<script setup>
</script>
