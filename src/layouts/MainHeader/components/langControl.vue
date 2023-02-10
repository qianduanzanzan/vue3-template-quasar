<script lang="ts" setup>
import { useAppStore } from 'stores/app'
import { reactive } from 'vue';
import { Langs } from 'src/interface/lang.interface';

const langs:Langs[] = reactive([
  {
    label: '中文',
    lang: 'zh-CN'
  },
  {
    label: 'English',
    lang: 'en-US'
  }
])

const langsObj:any = {
  'zh-CN': '中文',
  'en-US': 'English'
}

const appStore = useAppStore()
const changeLang = (lang:string) => {
  appStore.setLang(lang)
}
</script>

<template>
  <q-btn size="10px" round color="amber" :label="langsObj[appStore.lang][0]">
    <q-menu>
      <q-list dense style="min-width: 100px">
        <q-item @click="changeLang(item.lang)" v-for="item in langs" :key="item.label" clickable v-close-popup>
          <q-item-section>
            <div style="text-align: center;">{{ item.label }}</div>
          </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>
