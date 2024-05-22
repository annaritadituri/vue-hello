'use strict';

//////////////////////////////////////////////////////////

const { createApp } = Vue

  createApp({
    data() {
      return {
        title: 'Hello Vue!',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjoeMUlwIDt_k2nFOxfHwbxKthS_SdhF7amncZY-SKxQ&s'
      }
    }
  }).mount('#app')