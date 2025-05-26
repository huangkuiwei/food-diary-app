<template>
  <custom-dialog ref="redemptionDialog" title="兑换码" :shop-close="false">
    <view class="content">
      <view class="input-box">
        <input v-model="code" placeholder="请复制兑换码" />

        <view class="options">
          <text>粘贴兑换码</text>
          <text class="line">|</text>
          <text>获取兑换码</text>
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
    };
  },

  methods: {
    open() {
      this.$refs.redemptionDialog.open();
    },

    close() {
      this.$refs.redemptionDialog.close();
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
        border: 2px solid #78f788;
        color: #78f788;
      }

      &:nth-child(2) {
        background: #78f788;
        color: #111111;
      }
    }
  }
}
</style>
