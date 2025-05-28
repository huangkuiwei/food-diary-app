<template>
  <view class="feedback-page">
    <view class="banner">
      <view class="title">
        <text>意见反馈</text>

        <view class="back" @click="back">
          <uni-icons class="back" color="#1A1A1A" type="left" size="22"></uni-icons>
        </view>
      </view>
    </view>

    <view class="feedback-container">
      <view class="feedback-box">
        <view class="feedback-title">我要反馈</view>

        <view class="input-box">
          <textarea placeholder="你想说点什么？" :maxlength="1000" />

          <view class="upload-box">
            <view class="add">+</view>
          </view>
        </view>

        <view class="feedback-title2">
          <text>联系方式</text>
          <text>注：手机号/微信/QQ</text>
        </view>

        <view class="input-box2">
          <input type="text" placeholder="请留下任意一个联系方式" />
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'feedback',

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
.feedback-page {
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

  .feedback-container {
    padding: 20rpx 30rpx;

    .feedback-box {
      padding: 34rpx 22rpx;
      border-radius: 20rpx;
      background: #ffffff;

      .feedback-title {
        font-weight: 500;
        font-size: 30rpx;
        color: #1a1a1a;
        margin-bottom: 30rpx;
      }

      .input-box {
        background: #f5f6fa;
        height: 500rpx;
        border-radius: 20rpx;
        padding: 30rpx 20rpx;
        display: flex;
        flex-direction: column;
        margin-bottom: 50rpx;

        textarea {
          background: #f5f6fa;
          width: 100%;
          flex-grow: 1;
          font-size: 26rpx;
          margin-bottom: 20rpx;
        }

        .upload-box {
          flex-shrink: 0;

          .add {
            width: 90rpx;
            height: 90rpx;
            border-radius: 20rpx;
            border: 1px dashed #bfbfbf;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 50rpx;
            color: #bfbfbf;
          }
        }
      }

      .feedback-title2 {
        display: flex;
        align-items: center;
        gap: 20rpx;
        margin-bottom: 30rpx;

        text {
          &:nth-child(1) {
            font-weight: 500;
            font-size: 30rpx;
            color: #1a1a1a;
          }

          &:nth-child(2) {
            font-size: 22rpx;
            color: #999999;
          }
        }
      }

      .input-box2 {
        background: #f5f6fa;
        height: 120rpx;
        border-radius: 20rpx;
        padding: 30rpx 20rpx;
        display: flex;
        align-items: center;

        input {
          width: 100%;
          font-size: 26rpx;
        }
      }
    }
  }
}
</style>
