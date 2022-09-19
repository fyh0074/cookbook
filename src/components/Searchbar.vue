<script setup>
import { ref } from 'vue'
defineProps(['outer-bg', 'inner-bg', 'has-border'])
</script>
<template>
  <div class="searchbar-wrapper" :style="{backgroundColor:outerBg}">
    <div :style="{backgroundColor:innerBg}" :class="{'border':hasBorder}">
      <van-icon name="search" class="icon-search" />
      <span>想吃什么搜什么</span>
    </div>

  </div>
</template>
<style lang="scss">
  @import '@/assets/border.scss';
.searchbar-wrapper {
  padding: 10px 15px;
  //background-color: #f5f5f5;

  >div {
    width: 100%;
    height: 40px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    &.border {
      //判断上层参数是否为真
      //border: 1px solid #ee7530;

    }
    @include border(1px, #ee7530,solid,10px)
  }

  .icon-search {
    width: 20px;
    color: #ee7530;
  }

  span {
    font-size: 18px;
  }
}
</style>
