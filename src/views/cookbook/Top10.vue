<script setup>
import useListStore from '../../store/listStore'
const listStore = useListStore()
const list = listStore.filteredList(10)
</script>
<template>
    <ul>
        <li v-for="li in list">
            <img :src="li.img" alt="">
            <div>
                <h1>{{li.name}}</h1>
                <h2>{{li.favorites}}收藏 {{li.all_click}}浏览</h2>
            </div>
        </li>
    </ul>
</template>
<style lang="scss" scoped>
//添加scoped 指定只对当前模板生效
ul {
    display: flex;
    flex-wrap: wrap;
    background-color: #f5f5f5;
    padding-left: 10px;

    &:first-child {
        padding-top: 15px;
    }

    li {
        width: 50%;
        padding-right: 10px;
        padding-bottom: 10px;

        img {
            width: 100%;
            display: block;
        }

        >div {
            background-color: #fff;
            padding: 5px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            h1,
            h2 {
                padding: 0;
                margin: 0;
                font-style: normal;
                font-weight: 40;
            }

            h1 {
                font-size: 20px;
            }

            h2 {
                font-size: 10px;
            }
        }
    }
}
</style>
