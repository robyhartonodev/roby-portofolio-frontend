<template>
  <q-page
    padding
    class="row items-center justify-evenly q-gutter-md"
  >
    <!--About Me-->
    <about-me />

    <!-- Education And Experience -->
    <education-and-experience />

    <!-- Skills And Frameworks-->
    <skill-list />

    <!-- Demo Application -->
    <demo-component />

    <!-- Contact Me -->
    <contact-me />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import AboutMe from 'components/AboutMe.vue';
import EducationAndExperience from 'components/EducationAndExperience.vue';
import SkillList from 'components/SkillList.vue';
import DemoComponent from 'components/DemoComponent.vue';
import ContactMe from 'components/ContactMe.vue';

export default defineComponent({
  name: 'PageIndex',
  components: {
    AboutMe,
    ContactMe,
    DemoComponent,
    EducationAndExperience,
    SkillList,
  },
  setup() {
    const intersectionClass = ref('');

    return { intersectionClass };
  },
});
</script>
