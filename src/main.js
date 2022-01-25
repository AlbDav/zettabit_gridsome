// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import './index.css';
import VueScreen from 'vue-screen';

export default function (Vue, { router, head, isClient }) {
	head.script.push({
    id: 'twitter-wjs',
    type: 'text/javascript',
    async: true,
    defer: true,
    src: 'https://platform.twitter.com/widgets.js'
  })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.use(VueScreen, 'tailwind');
}
