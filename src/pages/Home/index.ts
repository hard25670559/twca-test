import { defineAsyncComponent } from 'vue';

import Page from './App.vue';

// declare global {
//   interface Window {
//     twca_cn: string;
//   }
// }

// window['twca_cn'] = 'test.com';

// console.log('twca_cn', window['twca_cn']);
// const script = document.createElement('script');
// script.src = '//ssllogo.twca.com.tw/twcaseal_v3.js';
// script.charset = 'utf-8';
// script.type = 'text/javascript';

// document.body.append(script);


export default defineAsyncComponent(async () => {
  await initData();
  return Page;
});


declare type ShowPostMessageData = 'be463f48-01fa-49a1-bcd5-545795acab2b';

// for test
// window.postMessage('be463f48-01fa-49a1-bcd5-545795acab2b', '*');
/**
 * 等待電商將初始化資料傳過來
 */
async function initData() {
  await new Promise<void>((resolve) => {
    const handleInit = (e: MessageEvent<ShowPostMessageData>) => {
      console.log('main page~', e.data);

      if (e.data !== 'be463f48-01fa-49a1-bcd5-545795acab2b') {
        return ;
      }

      resolve();

      console.log('post message', e.data);
      // 初始化完成，即可移除監聽
      window.removeEventListener('message', handleInit);
    }
    window.addEventListener('message', handleInit);
  });
}
