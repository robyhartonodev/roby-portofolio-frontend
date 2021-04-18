<template>
  <div>
    <!--About Me-->
    <q-card class="fit">
      <q-card-section class="text-h4 text-center">
        {{ $t('aboutMe.title') }}
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <div class="row items-center">
          <div class="col-xs-12 col-md-3 q-py-lg">
            <q-img
              class="animated slideInLeft slower"
              style="border-radius:50%;"
              :src="imgUrl"
            />
          </div>

          <div class="col-xs-12 col-md-9">
            <q-card-section
              class="animated slideInRight slower"
            >
              <div class="text-h4">
                Roby Hartono
              </div>

              <div
                class="text-subtitle1 text-bold"
              >
                {{ $t('aboutMe.subtitle') }}
              </div>

              <div class="text-body1 text-justify">
                {{ $t('aboutMe.description') }}
              </div>
            </q-card-section>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'AboutMe',
  setup() {
    const imgUrl = 'https://profile-images.xing.com/images/6396ab7e3aa2e61987e9151bf4da884b-1/roby-hartono.1024x1024.jpg';

    return { imgUrl };
  },
});
</script>
