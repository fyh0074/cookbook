<script setup>
import { ref } from 'vue'
import useListStore from '../../store/listStore'
const listStore = useListStore()
const list = ref([])
list.value = listStore.filteredList(10)
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);

const currentPage = ref(1)
const pageSize = ref(Math.ceil(listStore.list.length/10))
const onLoad = () => {
  setTimeout(() => {
    currentPage.value++
    if (refreshing.value) {
      list.value = [];
      currentPage.value = 1
      refreshing.value = false;
    }

    // for (let i = 0; i < 10; i++) {
    //   list.value.push(list.value.length + 1);
    // }
    list.value=listStore.filteredList(currentPage.value * 10)
    loading.value = false;


    if (currentPage.value >= pageSize.value) {
      finished.value = true;
    }
  }, 1000);
};

const onRefresh = () => {
  // 清空列表数据
  finished.value = false;

  // 重新加载数据
  // 将 loading 设置为 true，表示处于加载状态
  loading.value = true;
  onLoad();
};
</script>
<template>
  <div>

    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <ul>
          <li v-for="li in list">
            <div>
              <img :src="li.img" alt="">
            </div>
            <div>
              <h1>{{li.name}}</h1>
              <h2>{{li.burdens}}</h2>
              <h3>{{li.all_click}}浏览 {{li.all_click}}收藏</h3>
            </div>
          </li>
        </ul>
      </van-list>
    </van-pull-refresh>


  </div>
</template>
<style lang="scss" scoped>
@import '../../assets/border.scss';

div {
  ul {
    li {
      display: flex;
      padding-right: 10px;

      &:not(:last-child) {
        @include border(0 0 1px 0);
      }

      >div :first-child {
        padding: 10px 15px 10px 10px;
      }

      img {
        width: 110px;
        height: 70px;
      }

      >div:last-child {
        display: flex;
        flex-direction: column;
        justify-content: center;

        h1,
        h2,
        h3 {
          margin: 0;
          padding: 0;
          font-weight: normal;
        }

        h1 {
          font-size: 20px;
        }

        h2 {
          font-size: 14px;
          color: #a1a1a1;
          display: -webkit-box; //必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。
          -webkit-box-orient: vertical; //必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。
          -webkit-line-clamp: 1;
          overflow: hidden;
        }

        h3 {
          font-size: 12px;
          color: #a1a1a1;
        }
      }
    }
  }
}
</style>
