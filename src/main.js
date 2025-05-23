import Vue from 'vue';
import App from './App';
import './uni.promisify.adaptor';

import uniIcons from '@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue';

import store from './store';

Vue.config.productionTip = false;

Vue.component('uniIcons', uniIcons);

App.mpType = 'app';

const app = new Vue({
  ...App,
  store,
});
app.$mount();
