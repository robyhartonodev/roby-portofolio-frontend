<template>
  <q-card class="fit">
    <q-card-section
      class="text-h4 text-center animated slideRightIn slower"
    >
      <div :class="dynamicBounceClass">
        {{ $t('contactMe.title') }}
      </div>
      <q-icon
        :class="dynamicBounceClass"
        name="mail"
      />
      <div
        v-show="backupContact"
        class="animated slideInRight slower"
      >
        {{ $t('contactMe.backup') }}
      </div>
    </q-card-section>

    <q-separator inset />

    <q-card-section class="animated slideInUp slower">
      <q-input
        v-model="email"
        filled
        :label="$t('contactMe.email')"
        :disable="isBusy"
        class="q-my-md"
      />
      <q-input
        v-model="message"
        filled
        type="textarea"
        :label="$t('contactMe.message')"
        :disable="isBusy"
        class="q-my-md"
      />

      <q-btn
        @click="sendForm"
        :disable="isBusy"
        class="fit"
        flat
      >
        {{ $t('contactMe.send') }}
      </q-btn>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api';
import axios from 'axios';
import useHelper from 'src/hooks/helper';

export default defineComponent({
  name: 'ContactMe',
  setup() {
    const { successNotification, errorNotification } = useHelper();
    const isBusy = ref(false);
    const backupContact = ref(false);

    const email = ref('');
    const message = ref('');

    const dynamicBounceClass = ref('');

    function sendForm() {
      isBusy.value = !isBusy.value;

      axios({
        url: 'https://formspree.io/f/mzbybowg',
        method: 'post',
        headers: {
          Accept: 'application/json',
        },
        data: {
          email: email.value,
          message: message.value,
        },
      })
        .then(() => {
          successNotification('Message sent successfully. I will contact you as soon as I see your messages.');
          email.value = '';
          message.value = '';
        })
        .catch(() => {
          errorNotification('Something went wrong! Refresh the page or contact the email directly!');
          backupContact.value = true;
        })
        .finally(() => {
          isBusy.value = false;
        });
    }

    onMounted(() => {
      setTimeout(() => {
        dynamicBounceClass.value = 'animated infinite bounce slower';
      }, 1500);
    });

    return {
      isBusy, backupContact, email, message, sendForm, dynamicBounceClass,
    };
  },
});
</script>
