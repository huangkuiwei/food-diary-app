import Vue from 'vue';
import uniEasyInput from '@dcloudio/uni-ui/lib/uni-easyinput/uni-easyinput.vue';
import uniIcons from '@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue';
import uniSwiperDot from '@dcloudio/uni-ui/lib/uni-swiper-dot/uni-swiper-dot.vue';
import uniCollapse from '@dcloudio/uni-ui/lib/uni-collapse/uni-collapse.vue';
import uniCollapseItem from '@dcloudio/uni-ui/lib/uni-collapse-item/uni-collapse-item.vue';
import uniRate from '@dcloudio/uni-ui/lib/uni-rate/uni-rate.vue';
import uniPopup from '@dcloudio/uni-ui/lib/uni-popup/uni-popup.vue';
import uniPopupDialog from '@dcloudio/uni-ui/lib/uni-popup-dialog/uni-popup-dialog.vue';
import uniTransition from '@dcloudio/uni-ui/lib/uni-transition/uni-transition.vue';
import uniForm from '@dcloudio/uni-ui/lib/uni-forms/uni-forms.vue';
import uniFormItem from '@dcloudio/uni-ui/lib/uni-forms-item/uni-forms-item.vue';
import uniFilePicker from '@dcloudio/uni-ui/lib/uni-file-picker/uni-file-picker.vue';
import uniList from '@dcloudio/uni-ui/lib/uni-list/uni-list.vue';
import uniListItem from '@dcloudio/uni-ui/lib/uni-list-item/uni-list-item.vue';
import App from './App';
import store from '@/store';

App.mpType = 'app';

// 配置
Vue.config.productionTip = false;

// 注册全局组件
// 可以使用 esaycom 的方式进行全局注册，不过在 webstorm 编辑器的环境下，编辑器无法解析这些全局组件，也就没有了提示，所有这里使用了麻烦些的手动全局注册
Vue.component('uni-easyinput', uniEasyInput);
Vue.component('uni-icons', uniIcons);
Vue.component('uni-swiper-dot', uniSwiperDot);
Vue.component('uni-collapse', uniCollapse);
Vue.component('uni-collapse-item', uniCollapseItem);
Vue.component('uni-rate', uniRate);
Vue.component('uni-popup', uniPopup);
Vue.component('uni-popup-dialog', uniPopupDialog);
Vue.component('uni-transition', uniTransition);
Vue.component('uni-forms', uniForm);
Vue.component('uni-forms-item', uniFormItem);
Vue.component('uni-file-picker', uniFilePicker);
Vue.component('uni-list', uniList);
Vue.component('uni-list-item', uniListItem);

// 创建实例
const app = new Vue({
  ...App,
  store,
});

app.$mount();
