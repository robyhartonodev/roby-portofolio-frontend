<template>
  <q-card class="fit">
    <q-card-section class="text-h4 text-center">
      {{ $t('educationAndExperience.title') }}
    </q-card-section>

    <q-separator inset />

    <q-card-section>
      <q-card-section class="animated slideInRight slower">
        <q-timeline layout="loose">
          <q-timeline-entry heading>
            2016
          </q-timeline-entry>

          <q-timeline-entry
            :title="$t('educationAndExperience.firstTitle')"
            subtitle="2016-2020"
            avatar="https://pbs.twimg.com/profile_images/790904655811313664/aTtJKhqZ_400x400.jpg"
          >
            <div class="text-justify">
              {{ $t('educationAndExperience.firstDescription') }}
            </div>
          </q-timeline-entry>

          <q-timeline-entry heading>
            2019
          </q-timeline-entry>

          <q-timeline-entry
            :title="$t('educationAndExperience.secondTitle')"
            subtitle="04.2019-04.2020"
            avatar="https://www.bdh-reha.de/multi-wGlobal/wGlobal/layout/images/weblication/wThumbnails/logo-2490bb171e7af45gce4800d0f9c4041a.gif"
          >
            <div class="text-justify">
              <a href="https://www.mittelhessen.de/lokales/wetzlar/braunfels/ideen-fur-den-hol-und-bringdienst_20743306">Link</a> <br>
              {{ $t('educationAndExperience.secondDescription') }}
            </div>
          </q-timeline-entry>

          <q-timeline-entry heading>
            2020
          </q-timeline-entry>

          <q-timeline-entry
            :title="$t('educationAndExperience.thirdTitle')"
            subtitle="2020-now"
            avatar="https://pbs.twimg.com/profile_images/790904655811313664/aTtJKhqZ_400x400.jpg"
            side="left"
          >
            <div class="text-justify">
              {{ $t('educationAndExperience.thirdDescription') }}
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            :title="$t('educationAndExperience.fourthTitle')"
            subtitle="06.2020-09.2020"
            avatar="https://pilos.thm.de/images/logo.svg"
            side="left"
          >
            <div class="text-justify">
              <a href="https://github.com/THM-Health/PILOS">Github</a> |
              <a href="https://pilos.thm.de/">PILOS</a><br>
              {{ $t('educationAndExperience.fourthDescription') }} <br>
              {{ $t('educationAndExperience.fourthDescriptionTwo') }}
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            :title="$t('educationAndExperience.fifthTitle')"
            :subtitle="$t('educationAndExperience.fifthSubtitle')"
            avatar="https://www.bdh-reha.de/multi-wGlobal/wGlobal/layout/images/weblication/wThumbnails/logo-2490bb171e7af45gce4800d0f9c4041a.gif"
          >
            <div class="text-justify">
              {{ $t('educationAndExperience.fifthDescription') }}
            </div>
          </q-timeline-entry>
        </q-timeline>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'EducationAndExperience',
  setup() {
    return {};
  },
});
</script>
