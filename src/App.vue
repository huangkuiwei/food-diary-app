<script>
import { mapMutations } from 'vuex';

export default {
  name: 'app',

  globalData: {},

  data() {
    return {};
  },

  methods: {
    ...mapMutations('app', ['_setSystemInfo']),
  },

  onLaunch() {
    // 小程序版本更新
    const updateManager = uni.getUpdateManager();

    updateManager.onUpdateReady(() => {
      uni.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启小程序？',
        success(res) {
          if (res.confirm) {
            updateManager.applyUpdate();
          }
        },
      });
    });

    updateManager.onUpdateFailed((err) => {
      console.log('版本下载失败原因', err);

      uni.showToast({
        title: '新版本下载失败，请稍后再试',
        icon: 'none',
      });
    });

    // 获取系统信息
    let systemInfo = uni.getDeviceInfo();
    this._setSystemInfo(systemInfo);
  },
};
</script>

<style lang="scss">
@import './common/styles/reset.scss';
@import './common/styles/global.scss';
</style>
