<template>
  <q-card class="animated slideInDown slower fit">
    <q-card-section class="text-h4 text-center">
      {{ $t('demo.title') }}
    </q-card-section>

    <q-separator inset />

    <q-card-section>
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="grey-5"
        navigation
        padding
        arrows
        class="rounded-borders"
      >
        <q-carousel-slide
          name="style"
          class="column no-wrap flex-center"
        >
          <q-icon
            name="style"
            size="112px"
          />
          <div class="q-my-md text-center text-h4">
            Quote Generator
          </div>

          <div class="text-center">
            {{ $t('demo.quoteDescription') }}
            <a href="https://github.com/pprathameshmore/QuoteGarden">Public RESTful API</a>
          </div>

          <div class="text-center">
            <q-btn
              flat
              to="/quoteapp"
            >
              {{ $t('demo.check') }}
            </q-btn>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'DemoComponent',
  setup() {
    const slide = ref('style');

    return { slide };
  },
});
</script>
