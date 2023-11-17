<script setup lang="ts">
import {
  onMounted,
} from 'vue';

// import gif from '../../assets/twca.gif';
import twca from '../../components/TWCA.vue';


// onMounted(async () => {
//   // @ts-ignore
//   window['twca_cn'] = 'test.com';

//   // @ts-ignore
//   console.log('twca_cn', window['twca_cn']);

//   const script = document.createElement('script');
//   // script.src = '//ssllogo.twca.com.tw/twcaseal_v3.js';
//   script.src = 'http://127.0.0.1:8080/test2.js';
//   script.charset = 'utf-8';
//   script.type = 'text/javascript';

//   document.body.append(script);
// });
</script>

<template>
<h1>GG</h1>
<twca version="v3" logo-type="SMALL"></twca>
</template>
