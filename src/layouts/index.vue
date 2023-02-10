<template>
  <q-layout view="lHh lpr lff" :container="false">
    <mainHeader v-model:leftDrawerOpen="leftDrawerOpen" />
    <AsideMenu :leftDrawerOpen="leftDrawerOpen" />

    <q-page-container>
      <q-page>
        <headerTabs />
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import mainHeader from './MainHeader/index.vue'
import AsideMenu from './AsideMenu/index.vue'
import { Ref, ref } from 'vue';
import { QLayout, QPageContainer } from 'quasar';
import { RouterView } from 'vue-router';
import headerTabs from './HeaderTabs/index.vue';


const leftDrawerOpen:Ref<boolean> = ref(true)
</script>
