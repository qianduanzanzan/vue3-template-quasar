<script setup lang="ts">
import { toRef } from "vue";
import langControl from "./components/langControl.vue";
import userMenu from "./components/userMenu.vue";

let props = defineProps({
  leftDrawerOpen: Boolean
})

const leftDrawerOpen = toRef(props, 'leftDrawerOpen')

const emit = defineEmits(['update:leftDrawerOpen'])

function toggleLeftDrawer(): void {
  emit('update:leftDrawerOpen', !leftDrawerOpen.value)
}
</script>

<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
      <q-toolbar-title>
        vue3+quasar+ts
      </q-toolbar-title>

      <lang-control style="margin-right: 16px;" />
      <user-menu />
    </q-toolbar>
  </q-header>
</template>
