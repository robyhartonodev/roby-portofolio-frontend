<template>
  <q-layout view="hhh lpR fFf">
    <q-header
      class="bg-white text-black"
      height-hint="98"
    >
      <q-toolbar class="text-center q-py-md text-white">
        <q-toolbar-title>
          <q-avatar
            color="black"
            size="3rem"
            square
          >
            RH
          </q-avatar>
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs>
        <q-route-tab
          to="/aboutme"
          label="About Me"
          icon="fas fa-user-circle"
        />
        <q-route-tab
          to="/education"
          label="Education"
          icon="fas fa-book"
        />
        <q-route-tab
          to="/skillandframework"
          label="Skills & Frameworks"
          icon="fas fa-wrench"
        />
        <q-route-tab
          to="/experience"
          label="Experiences"
          icon="fas fa-user-plus"
        />
        <q-route-tab
          to="/demoapp"
          label="Demo App"
          icon="fas fa-code"
        />
        <q-route-tab
          to="/contactme"
          label="Contact me"
          icon="fas fa-mail-bulk"
        />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'MainLayout',
  components: {},
  setup() {
    const leftDrawerOpen = ref(false);

    return { leftDrawerOpen };
  },
});
</script>
