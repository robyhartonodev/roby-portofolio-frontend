<template>
  <q-page
    padding
    class="row items-center justify-evenly"
  >
    <q-card class="fit">
      <q-card-section>
        <q-card-section class="animated slideInRight slower">
          <q-timeline layout="loose">
            <q-timeline-entry heading>
              2016
            </q-timeline-entry>

            <q-timeline-entry
              title="THM Gießen - Medizinische Informatik - Bachelor of Science (B.Sc.)"
              subtitle="2016-2020"
              avatar="https://pbs.twimg.com/profile_images/790904655811313664/aTtJKhqZ_400x400.jpg"
            >
              <div>
                Medical informatics supports and models healthcare processes with IT tools.
                This includes, for example, the development of hospital information
                and practice management systems
                or new diagnostic-therapeutic procedures.
                Medical informatics specialists are employed in hospitals,
                by physicians in private practice and in industry
                by software and hardware manufacturers.
              </div>
            </q-timeline-entry>

            <q-timeline-entry heading>
              2020
            </q-timeline-entry>

            <q-timeline-entry
              title="THM Gießen - Digitale Medizin - Master of Science (M.Sc.)"
              subtitle="2020-now"
              avatar="https://pbs.twimg.com/profile_images/790904655811313664/aTtJKhqZ_400x400.jpg"
              side="left"
            >
              <div>
                The master's program in Digital Medicine focuses on
                the topics of modern medicine that are necessary for digitization in healthcare.
                It builds on a completed bachelor's or diploma degree in the healthcare sector.
                The master's degree then qualifies students to conduct scientific research
                and to take on strategic and management tasks in the field of digital medicine.
              </div>
            </q-timeline-entry>
          </q-timeline>
        </q-card-section>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'PageEducation',
  setup() {
    const entry = ref([
      { title: 'THM Gießen - Medizinische Informatik - Bachelor of Science (B.Sc.)', subtitle: '2016-2020', description: 'Medical informatics supports and models healthcare processes with IT tools. This includes, for example, the development of hospital information and practice management systems or new diagnostic-therapeutic procedures. Medical informatics specialists are employed in hospitals, by physicians in private practice and in industry by software and hardware manufacturers.' },
      { title: 'THM Gießen - Digitale Medizin (Master)', subtitle: '2020-now', description: "The master's program in Digital Medicine focuses on the topics of modern medicine that are necessary for digitization in healthcare. It builds on a completed bachelor's or diploma degree in the healthcare sector. The master's degree then qualifies students to conduct scientific research and to take on strategic and management tasks in the field of digital medicine." },
    ]);

    return { entry };
  },
});
</script>
