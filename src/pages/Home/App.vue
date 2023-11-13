<script setup lang="ts">
import {
  onMounted,
} from 'vue';

import gif from '../../assets/twca.gif';


onMounted(async () => {
  // @ts-ignore
  window['twca_cn'] = 'test.com';

  // @ts-ignore
  console.log('twca_cn', window['twca_cn']);

  const script = document.createElement('script');
  script.src = '//ssllogo.twca.com.tw/twcaseal_v3.js';
  script.charset = 'utf-8';
  script.type = 'text/javascript';

  document.body.append(script);
});
</script>

<template>
  <div id="twcaseal" class="SMALL">
    <img :src="gif">
  </div>
</template>
