<template>
  <div>
    <q-item clickable tag="a" target="_blank" v-for="item in menu" :key="item.label" :class="{active:item.routeName == routerStore.activeTab}">
      <template v-if="Array.isArray(item.children) && item.children.length > 0">
        <q-expansion-item :default-opened="true" dense dense-toggle expand-separator style="width: 100%">
          <template #header>
            <div class="menu-item">
              <span>{{ item.label }}</span>
            </div>
          </template>
          <menu-item :menu="item.children" />
        </q-expansion-item>
      </template>
      <template v-else>
        <div @click="jumpFromMenu(item)" class="menu-item">
          <span>{{ item.label }}</span>
        </div>
      </template>
    </q-item>
  </div>
</template>

<script lang="ts" setup>
import { Menu } from 'src/interface/menu.interface';
import { useRouter,Router } from 'vue-router';
import { useRouterStore } from 'src/stores/router';

const routerStore = useRouterStore()
const router:Router = useRouter()

const jumpFromMenu = (data:Menu) => {
  router.push({name: data.routeName})
}
const { menu } = defineProps({
  menu: {
    type: Array<Menu>,
    default: () => [],
  }
})
</script>

<style lang="scss" scoped>
:deep(.q-item) {
  padding: 0;
}

.menu-item {
  width: 200px;
  height: 48px;
  position: relative;
  span{
    position: absolute;
    left: 100px;
    top: 50%;
    transform: translate(-50%,-50%);
  }
}

.active{
  background-color: #409eff;
  color: #ffffff;
}
</style>
