<template>
  <q-layout view="hHh Lpr fFf">
    <q-header class="bg-transparent q-ma-md">
      <q-toolbar>
        <q-toolbar-title class="text-h5 serif-font">
          Random Quote Generator - Roby Hartono
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'QuoteLayout',

  setup() {
    const leftDrawer = ref(false);
    return { leftDrawer };
  },
});
</script>
