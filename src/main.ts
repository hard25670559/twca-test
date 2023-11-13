import {
  createRouter,
  createWebHistory,
} from 'vue-router'

import { createApp } from 'vue'
import Root from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      // beforeEnter() {
      //   // @ts-ignore
      //   window['twca_cn'] = 'test.com';

      //   // @ts-ignore
      //   console.log('twca_cn', window['twca_cn']);

      //   const script = document.createElement('script');
      //   script.src = '//ssllogo.twca.com.tw/twcaseal_v3.js';
      //   script.charset = 'utf-8';
      //   script.type = 'text/javascript';

      //   document.body.append(script);
      // },
      path: '/',
      component: () => import('./pages/Home')
    },
  ],
})

const app = createApp(Root)

app.use(router)
app.mount('#app')
