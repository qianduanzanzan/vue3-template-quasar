<script lang="ts" setup>
import { watch } from 'vue';
import { useRouter, useRoute, RouteLocationNormalizedLoaded } from 'vue-router';
import { useRouterStore } from 'src/stores/router';

const routerStore = useRouterStore()
const router = useRouter(), route = useRoute();
let tabIndex = 0

watch(route,
  (newVal: RouteLocationNormalizedLoaded) => {
    routerStore.setActiveTab(newVal.name as string)
  }, {
  immediate: true,
  deep: true
})

const delTab = (index: number) => {
  routerStore.delHeaderTab(index)
}

const jumpTo = (routeName: string) => {
  router.push({ name: routeName })
}

const tabContextMenu = (index: number) => {
  tabIndex = index
}

const closeRight = () => {
  routerStore.clearRight(tabIndex)
}

const closeLeft = () => {
  routerStore.clearLeft(tabIndex)
}

const closeOther = () => {
  routerStore.clearOther(tabIndex)
}

const closeAll = () => {
  routerStore.clearAll()
}
</script>

<template>
  <q-tabs @contextmenu.prevent active-color="red" style="background-color: #cccccc;"
    :model-value="routerStore.activeTab" dense class="text-teal" align="left">
    <q-tab id="homePage" :to="{ name: 'homePage' }" @click="jumpTo('homePage')" name="homePage" label="首页" />
    <q-tab @contextmenu="tabContextMenu(index)" v-for="(item, index) in routerStore.headerTabs"
      @click="jumpTo(item.routeName)" :key="item.routeName" content-class="clearable" :name="item.routeName"
      :label="item.label">
      <q-btn size="6px" @click.stop="delTab(index)" color="red" class="close-btn" icon="close" round />
    </q-tab>
    <q-menu context-menu>
      <q-list dense style="min-width: 100px">
        <q-item v-show="tabIndex > 0" @click="closeLeft" clickable v-close-popup>
          <q-item-section>关闭左侧</q-item-section>
        </q-item>
        <q-item v-show="tabIndex < routerStore.headerTabs.length - 1" @click="closeRight" clickable v-close-popup>
          <q-item-section>关闭右侧</q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="closeOther">
          <q-item-section>关闭其他</q-item-section>
        </q-item>
      </q-list>
      <q-item clickable v-close-popup @click="closeAll">
        <q-item-section>关闭全部</q-item-section>
      </q-item>
    </q-menu>

    <q-menu touch-position context-menu target="#homePage">
      <q-list dense style="min-width: 100px">
        <q-item clickable v-close-popup>
          <q-item-section>关闭全部</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-tabs>
</template>

<style lang="scss" scoped>
:deep(.clearable) {
  padding: 0 16px 0 10px;

  .close-btn {
    display: none;
    opacity: 0.5;
    position: absolute;
    right: -10px;
  }
}

:deep(.q-tab) {
  &:hover .close-btn {
    display: flex;
  }
}
</style>
