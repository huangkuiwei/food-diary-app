<template>
  <view class="set-reminder-page">
    <view class="banner">
      <view class="title">
        <text>设置提醒</text>

        <view class="back" @click="back">
          <uni-icons class="back" color="#1A1A1A" type="left" size="22"></uni-icons>
        </view>
      </view>
    </view>

    <view class="container">
      <view class="reminder-item">
        <view class="left">一键开启提醒功能，避免错误登记</view>
        <view class="right">开启提醒</view>
      </view>

      <view class="reminder-item">
        <view class="left">
          <text>饮食记录提醒</text>
          <text>早餐、午餐、晚餐未记录时，提醒触发</text>
        </view>
        <switch />
      </view>

      <view class="reminder-item">
        <view class="left">
          <text>运动提醒</text>
          <text>到点未记录时，提醒触发</text>
        </view>

        <switch />
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'setReminder',

  methods: {
    back() {
      uni.navigateBack();
    },
  },
};
</script>

<style>
page {
  background: #f6f7fb;
}
</style>

<style scoped lang="scss">
.set-reminder-page {
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

  .container {
    padding: 20rpx 30rpx;
    display: flex;
    flex-direction: column;
    gap: 20rpx;

    .reminder-item {
      background: #ffffff;
      border-radius: 20rpx;
      padding: 22rpx 20rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .left {
        font-size: 28rpx;
        color: #1a1a1a;
        display: flex;
        flex-direction: column;
        gap: 22rpx;

        text {
          &:nth-child(2) {
            font-size: 22rpx;
            color: #999999;
          }
        }
      }

      .right {
        width: 135rpx;
        height: 55rpx;
        background: #f2fff4;
        border-radius: 28rpx;
        border: 1px solid #0abf92;
        font-size: 24rpx;
        color: #0abf92;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
