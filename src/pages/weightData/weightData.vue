<template>
  <view class="weight-data-page">
    <view class="banner">
      <view class="title">
        <text>体重数据</text>

        <view class="back" @click="back">
          <uni-icons class="back" color="#1A1A1A" type="left" size="22"></uni-icons>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'weightData',

  methods: {
    back() {
      uni.navigateBack();
    },
  },
};
</script>

<style scoped lang="scss">
.weight-data-page {
  .banner {
    padding: calc(var(--status-bar-height) + 60rpx) 0 30rpx;
    background: #ffffff;
    margin-bottom: 20rpx;

    .title {
      text-align: center;
      color: #1a1a1a;
      font-size: 32rpx;
      font-weight: bold;
      position: relative;

      .back {
        position: absolute;
        top: -2rpx;
        left: 15rpx;
      }
    }
  }
}
</style>
