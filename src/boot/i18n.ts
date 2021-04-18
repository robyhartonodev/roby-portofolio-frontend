import { boot } from 'quasar/wrappers';
import messages from 'src/i18n';
import Vue from 'vue';
import VueI18n from 'vue-i18n';

declare module 'vue/types/vue' {
  // eslint-disable-next-line no-shadow
  interface Vue {
    i18n: VueI18n;
  }
}

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: 'de',
  fallbackLocale: 'en-us',
  messages,
});

export default boot(({ app }) => {
  // Set i18n instance on app
  app.i18n = i18n;
});
