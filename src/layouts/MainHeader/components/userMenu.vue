<script lang="ts" setup>
import { useUserStore } from 'src/stores/user';
import { UserMenu } from 'src/interface/userMenu.interface'
const userStore = useUserStore()

const userMenu:UserMenu[] = [
  {
    title: '修改信息',
    fn: () => {
      console.log(111)
    }
  },
  {
    title: '修改密码',
    fn: () => {
      console.log(222)
    }
  },
  {
    title: '退出登录',
    fn: () => {
      console.log(333)
    }
  }
]

const triggerFunction = (index:number) => {
  userMenu[index].fn()
}
</script>

<template>
  <div class="user-menu">
    <q-avatar>
      <img :src="userStore.avatar">
    </q-avatar>
    <!-- <q-btn :ripple="false" flat>{{ userStore.username }}</q-btn> -->
    <div class="user-mock-table">
      {{ userStore.username }}
      <q-icon name="arrow_drop_down"></q-icon>
      <q-menu>
        <q-list dense style="min-width: 100px">
          <q-item @click="triggerFunction(index)" v-for="(item,index) in userMenu" :key="item.title" clickable v-close-popup>
            <q-item-section>
              <div style="text-align: center;" data-index="index">{{ item.title }}</div>
            </q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-menu{
  display: flex;
  align-items: center;
}

.user-mock-table{
  margin: 0 10px 0 8px;
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>
