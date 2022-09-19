<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
const hotcate = ref([])

onMounted(async () => {
    const result = await axios.get('http://localhost:9000/category')
    hotcate.value = [
        ...result.data.data,
        {
            title:'更多...'
        }
    ]
})
</script>
<template>
    <van-grid :border="false">
        <van-grid-item icon="photo-o" :text="hc.title" v-for="hc in hotcate" class="item">
            <van-image :src="hc.img" />
            <span>{{hc.title}}</span>
        </van-grid-item>
    </van-grid>
</template>
<style lang="scss">
.item{
    img{
        width: 60px;
        border-radius: 5px;
    }
    &:last-child{
        .van-icon{
            display: none;
        }
    }
}

</style>
