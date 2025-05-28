<template>
  <view class="login-page">
    <view class="banner">
      <view class="title">
        <text></text>

        <view class="back" @click="back">
          <uni-icons class="back" color="#1A1A1A" type="left" size="22"></uni-icons>
        </view>
      </view>
    </view>

    <view class="container">
      <view class="title">慧食搭子 记录美好生活</view>

      <view class="input-box">
        <view class="phone">
          <input type="text" placeholder="请输入手机号" />
        </view>

        <view class="password">
          <input type="text" placeholder="请输入验证码" />
          <text class="line"></text>
          <text class="get-code">获取验证码</text>
        </view>
      </view>

      <view class="login">登录</view>

      <view class="agreement">
        <radio />
        <view>
          我已阅读并同意
          <text>《用户协议》</text>
          和
          <text>《隐私政策》</text>
        </view>
      </view>
    </view>

    <view class="kefu">
      <text>联系客服</text>
      <text class="line">｜</text>
      <text> 客服电话：4000000000</text>
    </view>
  </view>
</template>

<script>
export default {
  name: 'login',

  methods: {
    back() {
      uni.navigateBack();
    },
  },
};
</script>

<style lang="scss">
page {
  height: 100%;
}
</style>

<style scoped lang="scss">
.login-page {
  height: 100%;
  background: url('https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/login/login-bg.png') top left/100% 100%
    no-repeat;
  padding-bottom: 20rpx;
  display: flex;
  flex-direction: column;

  .banner {
    flex-shrink: 0;
    padding: calc(var(--status-bar-height) + 60rpx) 0 30rpx;

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
    flex-grow: 1;
    padding-bottom: 180rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title {
      font-weight: 500;
      font-size: 38rpx;
      color: #1a1a1a;
      margin-bottom: 86rpx;
    }

    .input-box {
      margin-bottom: 50rpx;

      .phone {
        width: 590rpx;
        height: 90rpx;
        background: #f6f7fb;
        border-radius: 45rpx;
        font-size: 28rpx;
        margin-bottom: 30rpx;

        input {
          padding: 0 36rpx;
          width: 100%;
          height: 100%;
        }
      }

      .password {
        width: 590rpx;
        height: 90rpx;
        background: #f6f7fb;
        border-radius: 45rpx;
        font-size: 28rpx;
        padding-right: 38rpx;
        display: flex;
        align-items: center;

        input {
          padding: 0 36rpx;
          flex-grow: 1;
          height: 100%;
        }

        .line {
          flex-shrink: 0;
          width: 2rpx;
          height: 50rpx;
          background: #0abf92;
          margin-right: 14rpx;
        }

        .get-code {
          flex-shrink: 0;
          white-space: nowrap;
          font-size: 24rpx;
          color: #0abf92;
        }
      }
    }

    .login {
      width: 560rpx;
      height: 90rpx;
      background: #0abf92;
      border-radius: 45rpx;
      font-weight: 500;
      font-size: 32rpx;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 44rpx;
    }

    .agreement {
      display: flex;
      align-items: center;

      radio {
        transform: scale(0.7);
      }

      view {
        font-size: 22rpx;
        color: #999999;
      }
    }
  }

  .kefu {
    font-size: 22rpx;
    color: #999999;
    align-self: center;

    .line {
      padding: 0 12rpx;
    }
  }
}
</style>
