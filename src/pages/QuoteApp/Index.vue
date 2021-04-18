<template>
  <q-page
    padding
    class="row items-center"
  >
    <!-- content -->
    <quote-component class="col-xs-12" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import QuoteComponent from 'components/QuoteComponent.vue';

export default defineComponent({
  name: 'PageQuoteAppIndex',
  components: { QuoteComponent },
  setup() {
    return {};
  },
});
</script>
