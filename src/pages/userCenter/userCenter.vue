<template>
  <view class="user-center-page">
    <view class="banner">
      <view class="title">
        <text>个人信息</text>

        <view class="back" @click="back">
          <uni-icons class="back" color="#1A1A1A" type="left" size="22"></uni-icons>
        </view>
      </view>
    </view>

    <view class="userinfo">
      <view class="box">
        <view class="item">
          <text>性别</text>

          <picker @change="bindPickerChange" :value="index" :range="genderList">
            <view class="uni-input">{{ array[index] }}</view>
          </picker>

          <text>女</text>
          <uni-icons class="back" color="#999999" type="right" size="18"></uni-icons>
        </view>

        <view class="item">
          <text>出生年月</text>
          <text>2022-11-08</text>
          <uni-icons class="back" color="#999999" type="right" size="18"></uni-icons>
        </view>

        <view class="item">
          <text>身高</text>
          <text>165厘米</text>
          <uni-icons class="back" color="#999999" type="right" size="18"></uni-icons>
        </view>

        <view class="item">
          <text>当前体重</text>
          <text>49.00公斤</text>
          <uni-icons class="back" color="#999999" type="right" size="18"></uni-icons>
        </view>
      </view>

      <view class="box">
        <view class="item">
          <text>初始体重</text>
          <text>49.00公斤</text>
          <uni-icons class="back" color="#999999" type="right" size="18"></uni-icons>
        </view>

        <view class="item">
          <text>初始日期</text>
          <text>2025-01-08</text>
          <uni-icons class="back" color="#999999" type="right" size="18"></uni-icons>
        </view>
      </view>

      <view class="box">
        <view class="item">
          <text> 目标体重</text>
          <text>46.00公斤</text>
          <uni-icons class="back" color="#999999" type="right" size="18"></uni-icons>
        </view>

        <view class="item">
          <text>减重达成时间</text>
          <text>15周 2025-01-08</text>
          <uni-icons class="back" color="#999999" type="right" size="18"></uni-icons>
        </view>
      </view>

      <view class="box">
        <view class="item">
          <text>运动习惯</text>
          <text>几乎不动</text>
          <uni-icons class="back" color="#999999" type="right" size="18"></uni-icons>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'userCenter',

  data() {
    return {
      genderList: ['男', '女'],
    };
  },

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
.user-center-page {
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

  .userinfo {
    padding: 0 30rpx;

    .box {
      background: #ffffff;
      border-radius: 20rpx;
      padding: 30rpx 24rpx;
      margin-bottom: 20rpx;

      .item {
        display: flex;
        align-items: center;

        &:not(:last-child) {
          padding-bottom: 30rpx;
          margin-bottom: 30rpx;
          border-bottom: 1px solid #f6f7fb;
        }

        text {
          &:nth-child(1) {
            font-size: 28rpx;
            color: #1a1a1a;
            flex-grow: 1;
          }

          &:nth-child(2) {
            font-size: 26rpx;
            color: #666666;
            margin-right: 10rpx;
          }
        }
      }
    }
  }
}
</style>
