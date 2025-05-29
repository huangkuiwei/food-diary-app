<template>
  <custom-dialog ref="redemptionDialog" title="兑换码" :shop-close="false">
    <view class="content">
      <view class="input-box">
        <input :value="code" @input="code = $event.detail.value" placeholder="请复制兑换码" />

        <view class="options">
          <text @click="pasteCode">粘贴兑换码</text>
          <text class="line">|</text>
          <text @click="getCode">获取兑换码</text>
        </view>
      </view>

      <view class="btn">
        <text @click="close">取消</text>
        <text @click="submit">确定</text>
      </view>
    </view>
  </custom-dialog>
</template>

<script>
import customDialog from '@/components/customDialog.vue';

export default {
  name: 'redemptionDialog',

  components: {
    customDialog,
  },

  data() {
    return {
      code: undefined,
      clipboardData: undefined,
      hasGetClipboardData: false,
    };
  },

  methods: {
    open() {
      this.$refs.redemptionDialog.open();
    },

    close() {
      this.$refs.redemptionDialog.close();
    },

    getCode() {
      wx.getClipboardData({
        success: (res) => {
          this.hasGetClipboardData = true;
          this.clipboardData = res.data;
        },
      });
    },

    pasteCode() {
      if (!this.hasGetClipboardData) {
        uni.showToast({
          title: '请先获取兑换码',
          icon: 'none',
          mask: true,
        });

        return;
      }

      uni.showModal({
        content: '立即粘贴文案',
        cancelColor: '#333333',
        confirmColor: '#0ABF92',
        success: (res) => {
          if (res.confirm) {
            this.code = this.clipboardData;
          }
        },
      });
    },

    submit() {},
  },
};
</script>

<style scoped lang="scss">
.content {
  .input-box {
    margin-bottom: 54rpx;

    input {
      width: 100%;
      height: 103rpx;
      text-align: center;
      background: #f6f7fb;
      border-radius: 20rpx;
      margin-bottom: 40rpx;
    }

    .options {
      font-size: 30rpx;
      color: #333333;
      display: flex;
      align-items: center;
      justify-content: center;

      .line {
        margin: 0 10rpx;
      }
    }
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: space-around;

    text {
      width: 284rpx;
      height: 90rpx;
      border-radius: 45rpx;
      font-size: 30rpx;
      display: flex;
      align-items: center;
      justify-content: center;

      &:nth-child(1) {
        background: #ffffff;
        border: 2px solid #0abf92;
        color: #0abf92;
      }

      &:nth-child(2) {
        background: #0abf92;
        color: #ffffff;
      }
    }
  }
}
</style>
