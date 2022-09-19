<script setup>
    import useListStore from '../../store/listStore'
    const listStore = useListStore()
    const list = listStore.filteredList(3)
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