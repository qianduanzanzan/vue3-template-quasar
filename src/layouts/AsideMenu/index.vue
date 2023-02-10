<template>
  <div>
    <q-drawer :width="200" v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-1">
      <div class="aside-header">
        <!-- <q-input input-style="color: #ffffff" dense label-color="white" color="white"  rounded outlined v-model="routerStore.routerSearchKey" label="关键字" /> -->
        <q-input dark dense standout v-model="routerStore.routerSearchKey" input-class="text-right" class="q-mr-xs q-ml-xs">
          <template v-slot:append>
            <q-icon v-if="routerStore.routerSearchKey === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="routerStore.routerSearchKey = ''" />
          </template>
        </q-input>
      </div>
      <div class="menu">
        <q-list style="width: calc(100% - 1px)" :padding="false">
          <menu-item :menu="menu" />
        </q-list>
      </div>
    </q-drawer>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRef } from 'vue';
import MenuItem from './MenuItem.vue';
import { Props, Menu } from 'src/interface/menu.interface'
import { useRouterStore } from 'src/stores/router';

const routerStore = useRouterStore()

const props: Props = defineProps({
  leftDrawerOpen: {
    type: Boolean
  }
})

const leftDrawerOpen = toRef(props, 'leftDrawerOpen')

const menu: Menu[] = reactive([
  {
    label: '测试',
    routeName: 'test'
  },
  {
    label: '测试1111',
    children: [
      {
        label: '测试1',
        routeName: 'test1',
      }
    ]
  },
  {
    label: '测试2',
    routeName: 'test2'
  },
  {
    label: '测试3',
    routeName: 'test3'
  },
])
</script>

<style lang="scss" scoped>
.menu-header {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--q-color-primary);
  color: #ffffff;
  font-size: 28px;
  font-weight: bold;
  margin-right: -1px;
}

.aside-header {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--q-primary);
}

:deep(.q-drawer--left.q-drawer--bordered) {
  border-right: none;
}

:deep(.q-field--outlined .q-field__control:before){
  border-color: #ffffff;
}

.menu{
  height: calc(100vh - 50px);
  border-right: 1px solid #cccccc;
  overflow: auto;
}
</style>
