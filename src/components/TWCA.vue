<script lang="ts">
declare global {
  interface Window {
    twcasealcb: Function;
    twca_cn: string;
  }
}
</script>


<script setup lang="ts">
import {
  onMounted,
  defineProps,
} from 'vue';

import gif from '../assets/twca.gif';

type Version = 'v4' | 'v3';
type LogoType = 'BIG' | 'MEDIUM' | 'MINI' | 'SMALL';

const props = defineProps<{
  version: Version,
  logoType: LogoType,
}>();


const twcaSealJsUrl: { [key in Version]: string } = {
  'v3': '//ssllogo.twca.com.tw/twcaseal_v3.js',
  'v4': '//ssllogo.twca.com.tw/v4/twcaseal_v4.js'
};

function attachTwcaSealJs() {
  if (typeof window.twcasealcb === 'function') {
    console.log('twcaseal script has already loaded.');
    // runTwcaSeal();
  } else {
    console.log('twcaseal script has not loaded.');
    const js = document.createElement('script');
    js.src = twcaSealJsUrl[props.version];
    js.onload = runTwcaSeal;
    document.body.appendChild(js);
  }
}

function runTwcaSeal() {
  setTimeout(() => {
    if (document.querySelector('#twcaseal #twcad1') === null) {
      // trigger window load event ref by twcaseal_v4.js
      dispatchEvent(new Event('load'))
    }
  }, 300)
}



onMounted(() => {
  // window.twca_cn = window.twca_cn || props.cn
  attachTwcaSealJs();
});
</script>

<template>
  <div id="twcaseal" :class="logoType" >
    <img :src="gif" />
  </div>
</template>
