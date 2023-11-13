<template>
    <div class="flex justify-center items-center space-x-10 py-10">
        <img v-for="image in images" :src="image" class="max-w-md"/>
    </div>
</template>
<script setup>
import hyundaiImg from '@/assets/images/ref/logo_hyundai.jpg';
import repImg from '@/assets/images/ref/p_rep.png';
const images = [hyundaiImg, repImg];
</script>