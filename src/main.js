import Vue from 'vue';
import App from './App';
import './uni.promisify.adaptor';

import uniIcons from '@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue';
import uniPopupDialog from '@dcloudio/uni-ui/lib/uni-popup-dialog/uni-popup-dialog.vue';
import uniPopupMessage from '@dcloudio/uni-ui/lib/uni-popup-message/uni-popup-message.vue';
import uniPopupShare from '@dcloudio/uni-ui/lib/uni-popup-share/uni-popup-share.vue';
import uniTransition from '@dcloudio/uni-ui/lib/uni-transition/uni-transition.vue';
import uniPopup from '@dcloudio/uni-ui/lib/uni-popup/uni-popup.vue';

import store from './store';

Vue.config.productionTip = false;

Vue.component('uniIcons', uniIcons);
Vue.component('uniPopupDialog', uniPopupDialog);
Vue.component('uniPopupMessage', uniPopupMessage);
Vue.component('uniPopupShare', uniPopupShare);
Vue.component('uniTransition', uniTransition);
Vue.component('uniPopup', uniPopup);

App.mpType = 'app';

const app = new Vue({
  ...App,
  store,
});
app.$mount();
