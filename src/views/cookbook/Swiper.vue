<script setup>
import {ref,onMounted} from 'vue'
import axios from 'axios'
import swiper1 from '@/assets/images/swiper-1.jpg'
import swiper2 from '@/assets/images/swiper-2.jpg'
import swiper3 from '@/assets/images/swiper-3.jpg'

const list = ref([])

onMounted( async () => { 
    const result = await axios.get('http://localhost:9000/list')
    list.value = result.data.data.slice(0,5)
})

</script>
<template>
    <div class="swiper-container">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="li in list">
                <img :src="li.img" :alt="li.name">
            </van-swipe-item>
        </van-swipe>
    </div>

</template>
<style lang="scss">
.swiper-container {
    height: 0;
    font-size:0;
    padding-bottom: 66.6666667%;
}

.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    text-align: center;
    background-color: #39a9ed;

    img {
        width: 100%;
        height: 200;
    }
}
</style>