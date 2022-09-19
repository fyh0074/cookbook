<script setup>
import { ref } from 'vue'
import Swiper from './swiper.vue';
import Searchbar from '@/components/Searchbar.vue'
import Hotcate from './Hotcate.vue'
import Top10 from './Top10.vue';
</script>
<template>
    <Swiper></Swiper>
    <Searchbar outer-bg="#f5f5f5" inner-bg="#ffffff" :has-border="true">
    </Searchbar>
    <Hotcate></Hotcate>
    <Top10></Top10>
</template>
<style lang="scss">

</style>