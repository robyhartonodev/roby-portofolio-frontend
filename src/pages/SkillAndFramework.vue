<template>
  <q-page
    padding
    class="row frameworks-center justify-evenly"
  >
    <q-card class="fit">
      <!-- Languages -->
      <q-card-section class="text-center text-h3 bg-blue text-white">
        Languages
      </q-card-section>

      <q-card-section>
        <div class="row q-gutter-lg justify-center">
          <div
            class="col-md-3 col-xs-12"
            v-for="item in languages"
            :key="item.label"
          >
            <q-card class="q-ma-md">
              <q-scroll-area style="height:400px;">
                <q-card-section
                  class="text-h4 text-white"
                  :class="item.bgcolor"
                >
                  {{ item.label }}
                </q-card-section>

                <q-separator />

                <div class="text-center">
                  <q-img
                    class="animated zoomIn slower q-my-md"
                    style="width:100px;height:100px;"
                    :src="item.image"
                  />
                </div>

                <q-card-section class="text-justify">
                  {{ item.description }}
                </q-card-section>
              </q-scroll-area>
            </q-card>
          </div>
        </div>
      </q-card-section>

      <!-- Frameworks -->
      <q-card-section class="text-center text-h3 bg-orange text-white">
        Frameworks
      </q-card-section>

      <q-card-section>
        <div class="row q-gutter-lg justify-center">
          <div
            class="col-md-3 col-xs-12"
            v-for="item in frameworks"
            :key="item.label"
          >
            <q-card class="q-ma-md">
              <q-scroll-area style="height:400px;">
                <q-card-section
                  class="text-h4 text-white"
                  :class="item.bgcolor"
                >
                  {{ item.label }}
                </q-card-section>

                <q-separator />

                <div class="text-center">
                  <q-img
                    class="animated zoomIn slower q-my-md"
                    style="width:100px;height:100px;"
                    :src="item.image"
                  />
                </div>

                <q-card-section class="text-justify">
                  {{ item.description }}
                </q-card-section>
              </q-scroll-area>
            </q-card>
          </div>
        </div>
      </q-card-section>

      <!-- Miscellaneous -->
      <q-card-section class="text-center text-h3 bg-green text-white">
        Miscellaneouses
      </q-card-section>

      <q-card-section>
        <div class="fit wrap row justify-center">
          <q-chip
            v-for="item in miscellaneouses"
            :key="item.label"
            size="18px"
            :icon="item.icon"
            :color="item.color"
            text-color="white"
          >
            {{ item.label }}
          </q-chip>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'PageSkillAndFramework',
  setup() {
    const frameworks = ref([
      {
        label: 'Bootstrap',
        description: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg',
        bgcolor: 'bg-deep-purple',
      },
      {
        label: 'Ionic',
        description: 'Ionic is an open source web framework for building hybrid apps and progressive web apps based on HTML5, CSS, Sass and JavaScript/TypeScript.',
        image: 'https://www.bryntum.com/wp-content/uploads/2019/01/ionic-logo.png',
        bgcolor: 'bg-primary',
      },
      {
        label: 'Vue',
        description: 'Vue.js (commonly referred to as Vue; pronounced /vjuː/, like "view") is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.',
        image: 'https://vuejs.org/images/logo.png',
        bgcolor: 'bg-green-8',
      },
      {
        label: 'Laravel',
        description: 'Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller (MVC) architectural pattern and based on Symfony.',
        image: 'https://laravel.com/img/logomark.min.svg',
        bgcolor: 'bg-red',
      },
      {
        label: 'Spring Boot',
        description: "Spring Boot is Spring's convention-over-configuration solution for creating stand-alone, production-grade Spring-based Applications that you can just run. It is preconfigured with the Spring team's 'opionated view' of the best configuration and use of the Spring platform and third-party libraries so you can get started with minimum fuss. Most Spring Boot applications need very little Spring configuration.",
        image: 'https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png',
        bgcolor: 'bg-green',
      },
      {
        label: 'Quasar',
        description: 'Quasar Framework (commonly referred to as Quasar; pronounced /ˈkweɪ.zɑːr/) is an open-source Vue.JS based framework for building apps, with a single codebase, and deploy it on the Web as a SPA, PWA, SSR, to a Mobile App, using Cordova for iOS & Android, and to a Desktop App, using Electron for Mac, Windows, and Linux.',
        image: 'https://upload.wikimedia.org/wikipedia/en/2/29/Quasar_Logo.png',
        bgcolor: 'bg-primary',
      },
    ]);

    const languages = ref([
      {
        label: 'Javascript',
        description: 'JavaScript (/ˈdʒɑːvəˌskrɪpt/), often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
        bgcolor: 'bg-yellow-14',
      },
      {
        label: 'Typescript',
        description: 'TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png',
        bgcolor: 'bg-blue-8',
      },
      {
        label: 'Java',
        description: 'Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation',
        image: 'https://brandslogos.com/wp-content/uploads/thumbs/java-logo-vector-2.svg',
        bgcolor: 'bg-light-blue-10',
      },
      {
        label: 'PHP',
        description: 'PHP is a general-purpose scripting language especially suited to web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994.',
        image: 'https://logoeps.com/wp-content/uploads/2012/04/php-logo-vector-01.png',
        bgcolor: 'bg-indigo-4',
      },
    ]);

    const miscellaneouses = ref([
      { label: 'git', icon: 'fab fa-git-alt', color: 'orange' },
      { label: 'GitLab', icon: 'fab fa-gitlab', color: 'amber' },
      { label: 'Github', icon: 'fab fa-github', color: 'black' },
      { label: 'MySQL', icon: 'fas fa-database', color: 'light-blue-9' },
      { label: 'PostgreSQL', icon: 'fas fa-database', color: 'light-blue-9' },
      { label: 'Agile (SCRUM)', icon: 'fas fa-running', color: 'purple' },
      { label: 'Ubuntu Server', icon: 'fab fa-ubuntu', color: 'yellow-10' },
      { label: 'REST API', icon: 'fas fa-bezier-curve', color: 'deep-orange' },
      { label: 'Node', icon: 'fab fa-npm', color: 'red' },
      { label: 'Yarn', icon: 'fab fa-yarn', color: 'blue' },
      { label: 'Material Design', icon: 'fab fa-google', color: 'grey' },
      { label: 'Responsive Design', icon: 'fas fa-mobile', color: 'light-green' },
      { label: 'Digital Ocean', icon: 'fab fa-digital-ocean', color: 'blue' },
      { label: 'NGINX', icon: 'fas fa-server', color: 'green' },
    ]);

    return { frameworks, languages, miscellaneouses };
  },
});
</script>
