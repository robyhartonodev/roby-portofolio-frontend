<template>
  <div>
    <q-img
      class="img-bg"
      :src="quoteImgUrl"
    />

    <div class="row text-h3 items-center">
      <div class="col-xs-12 col-md-3 text-center">
        <q-select
          v-model="selectedGenre"
          :options="genreOptions"
          label="Genre"
          outlined
          color="grey-8"
        />

        <q-btn
          flat
          @click="getQuote"
          class="full-width"
        >
          New Quotes
        </q-btn>
      </div>

      <div class="col-xs-12 col-md-9 align-right serif-font">
        <div
          class="q-mb-lg text-right"
          :class="quoteAnimationClass"
        >
          {{ quoteMessage }}
        </div>
        <div
          class="text-right"
          :class="quoteAnimationClass"
        >
          - {{ quoteAuthor }} -
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, onMounted, Ref, ref,
} from '@vue/composition-api';
import axios, { AxiosResponse } from 'axios';
import useHelper from 'src/hooks/helper';

export interface ApiQuote {
  _id: string,
  quoteText: string,
  quoteAuthor: string,
  quoteGenre: string,
  __v: number
}

export interface ApiPayload<T> {
  statusCode: number,
  message: string,
  data: T[]
}

export default defineComponent({
  name: 'QuoteComponent',
  setup() {
    const { errorNotification } = useHelper();

    const selectedGenre: Ref<string|undefined> = ref('');
    const genreOptions: Ref<string[]> = ref([]);

    const quoteMessage = ref('');
    const quoteAuthor = ref('');

    const quoteAnimationClass = ref('');
    const quoteImgUrl = ref('');

    const imageResolutions: Ref<string[]> = ref(['1920', '1680', '1685', '1670', '1720']);

    function getGenreOptions() {
      axios({
        url: 'https://quote-garden.herokuapp.com/api/v3/genres',
        method: 'get',
        headers: {
          Accept: 'application/json',
        },
        data: {
        },
      })
        .then((response: AxiosResponse<ApiPayload<string>>) => {
          response.data.data.forEach((item) => {
            genreOptions.value.push(item);
          });
        })
        .catch(() => {
          errorNotification('Something went wrong! Cannot get genres :(');
        });
    }

    function getQuote() {
      quoteAnimationClass.value = '';
      quoteImgUrl.value = '';

      axios({
        url: 'https://quote-garden.herokuapp.com/api/v3/quotes/random',
        method: 'get',
        headers: {
          Accept: 'application/json',
        },
        params: {
          genre: selectedGenre.value,
        },
      })
        .then((response: AxiosResponse<ApiPayload<ApiQuote>>) => {
          quoteMessage.value = response.data.data[0].quoteText;
          quoteAuthor.value = response.data.data[0].quoteAuthor;
        })
        .catch(() => {
          errorNotification('Something went wrong! Cannot get quotes :(');
        })
        .finally(() => {
          quoteAnimationClass.value = 'animated slideInUp slower';
          quoteImgUrl.value = 'https://placeimg.com/1920/1080/nature';
        });
    }

    onMounted(() => {
      getGenreOptions();
      getQuote();

      setInterval(() => {
        const imgArray = imageResolutions.value;
        const randomResolution = imgArray[Math.floor(Math.random() * imgArray.length)];

        quoteImgUrl.value = `https://placeimg.com/${randomResolution}/1080/nature`;
      }, 10000);
    });

    return {
      selectedGenre,
      genreOptions,
      getGenreOptions,
      getQuote,
      quoteMessage,
      quoteAuthor,
      quoteImgUrl,
      quoteAnimationClass,
    };
  },
});
</script>

<style lang="scss" scoped>
.img-bg {
  position: fixed;
  top: 0;
  left: 0;

  opacity: 0.5;

  /* Preserve aspet ratio */
  min-width: 100%;
  min-height: 100%;
}
</style>
