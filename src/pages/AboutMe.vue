<template>
  <q-page
    padding
    class="row items-center justify-evenly"
  >
    <q-card class="fit">
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
                Web | Frontend | Backend Developer
              </div>

              <div class="text-body1 text-justify">
                Hi! My name is Roby Hartono, a web developer focused on crafting great experiences.
                Designing and Coding has been my passion since
                the day I started working on web developments.
                I enjoy crafting beautifully designed,
                intuitive and secure web applications.

                For over past 3 years, I have worked on some web and digitalization projects. And, I
                hope I could do the same with you as well.
              </div>
            </q-card-section>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'PageAboutMe',
  setup() {
    const show = ref(true);
    const imgUrl = 'https://profile-images.xing.com/images/6396ab7e3aa2e61987e9151bf4da884b-1/roby-hartono.1024x1024.jpg';

    return { show, imgUrl };
  },
});
</script>
