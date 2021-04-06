import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AboutMe.vue') },
      { path: 'aboutme', component: () => import('pages/AboutMe.vue') },
      { path: 'education', component: () => import('pages/Education.vue') },
      { path: 'skillandframework', component: () => import('pages/SkillAndFramework.vue') },
      { path: 'experience', component: () => import('pages/Experience.vue') },
      { path: 'demoapp', component: () => import('pages/DemoApp.vue') },
      { path: 'contactme', component: () => import('pages/ContactMe.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
