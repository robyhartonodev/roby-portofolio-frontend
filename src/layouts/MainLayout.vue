<template>
  <q-layout view="hhh lpR fFf">
    <q-header
      class="bg-transparent"
      height-hint="98"
    >
      <q-toolbar class="text-center q-py-md">
        <q-toolbar-title>
          <q-avatar
            :color="avatarBgColor"
            :text-color="avatarTextColor"
            size="5rem"
            class="text-bold"
            clickable
            v-ripple
          >
            RH
          </q-avatar>
        </q-toolbar-title>
        <q-btn
          color="warning"
          round
          flat
          :icon="toggleIcon"
          @click="toggleDarkMode"
          class="animated slower slideInRight"
        >
          <q-tooltip>{{ $t('mainLayout.darkMode') }}</q-tooltip>
        </q-btn>
        <q-btn
          round
          :label="language"
          class="animated slower slideInRight text-bold"
          :color="avatarBgColor"
          :text-color="avatarTextColor"
          @click="toggleLanguage"
        />
      </q-toolbar>

      <q-tabs class="text-grey-5">
        <q-route-tab
          to="/aboutme"
          :label="$t('aboutMe.title')"
          icon="fas fa-user-circle"
        />
        <q-route-tab
          to="/education"
          :label="$t('educationAndExperience.title')"
          icon="fas fa-book"
        />
        <q-route-tab
          to="/skillandframework"
          :label="$t('skill.title')"
          icon="fas fa-wrench"
        />
        <q-route-tab
          to="/demoapp"
          :label="$t('demo.title')"
          icon="fas fa-code"
        />
        <q-route-tab
          to="/contactme"
          :label="$t('contactMe.title')"
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
import { Dark } from 'quasar';
import useHelper from 'src/hooks/helper';
import { i18n } from '../boot/i18n';

export default defineComponent({
  name: 'MainLayout',
  components: {},
  setup(props, root) {
    const { showLoading } = useHelper();

    const leftDrawerOpen = ref(false);

    const toggleIcon = ref('fas fa-sun');
    const avatarBgColor = ref('black');
    const avatarTextColor = ref('white');

    const language = ref('en-us');

    function toggleDarkMode() {
      if (Dark.isActive) {
        toggleIcon.value = 'fas fa-sun';
        avatarBgColor.value = 'black';
        avatarTextColor.value = 'white';
      }

      if (!Dark.isActive) {
        toggleIcon.value = 'fas fa-moon';
        avatarBgColor.value = 'white';
        avatarTextColor.value = 'black';
      }

      Dark.toggle();
    }

    function toggleLanguage() {
      showLoading(<string> root.parent?.$t('loading'));

      if (language.value === 'en-us') {
        language.value = 'de';
        i18n.locale = 'de';
      } else {
        language.value = 'en-us';
        i18n.locale = 'en-us';
      }
    }

    return {
      leftDrawerOpen,
      language,
      avatarBgColor,
      avatarTextColor,
      toggleDarkMode,
      toggleLanguage,
      toggleIcon,
    };
  },
});
</script>
