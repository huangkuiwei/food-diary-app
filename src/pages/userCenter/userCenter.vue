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
          <text class="label">性别</text>

          <picker
            mode="selector"
            :range="genderList"
            :value="userInfo.gender"
            @change="userInfo.gender = $event.detail.value"
          >
            <view class="value">
              <text class="filed">{{ genderList[userInfo.gender] }}</text>
              <uni-icons class="back" color="#999999" type="right" size="18"></uni-icons>
            </view>
          </picker>
        </view>

        <view class="item">
          <text class="label">出生年月</text>

          <picker mode="date" :value="userInfo.date" @change="userInfo.date = $event.detail.value">
            <view class="value">
              <text class="filed">{{ userInfo.date }}</text>
              <uni-icons class="back" color="#999999" type="right" size="18"></uni-icons>
            </view>
          </picker>
        </view>

        <view class="item">
          <text class="label">身高</text>

          <picker
            mode="selector"
            :range="genderList"
            :value="userInfo.gender"
            @change="userInfo.gender = $event.detail.value"
          >
            <view class="value">
              <text class="filed">{{ genderList[userInfo.gender] }}</text>
              <uni-icons class="back" color="#999999" type="right" size="18"></uni-icons>
            </view>
          </picker>
        </view>

        <view class="item">
          <text class="label">当前体重</text>

          <picker
            mode="selector"
            :range="genderList"
            :value="userInfo.gender"
            @change="userInfo.gender = $event.detail.value"
          >
            <view class="value">
              <text class="filed">{{ genderList[userInfo.gender] }}</text>
              <uni-icons class="back" color="#999999" type="right" size="18"></uni-icons>
            </view>
          </picker>
        </view>
      </view>

      <view class="box">
        <view class="item">
          <text class="label">初始体重</text>

          <picker
            mode="selector"
            :range="genderList"
            :value="userInfo.gender"
            @change="userInfo.gender = $event.detail.value"
          >
            <view class="value">
              <text class="filed">{{ genderList[userInfo.gender] }}</text>
              <uni-icons class="back" color="#999999" type="right" size="18"></uni-icons>
            </view>
          </picker>
        </view>

        <view class="item">
          <text class="label">初始日期</text>

          <picker mode="date" :value="userInfo.date" @change="userInfo.date = $event.detail.value">
            <view class="value">
              <text class="filed">{{ userInfo.date }}</text>
              <uni-icons class="back" color="#999999" type="right" size="18"></uni-icons>
            </view>
          </picker>
        </view>
      </view>

      <view class="box">
        <view class="item">
          <text class="label">目标体重</text>

          <picker
            mode="selector"
            :range="genderList"
            :value="userInfo.gender"
            @change="userInfo.gender = $event.detail.value"
          >
            <view class="value">
              <text class="filed">{{ genderList[userInfo.gender] }}</text>
              <uni-icons class="back" color="#999999" type="right" size="18"></uni-icons>
            </view>
          </picker>
        </view>

        <view class="item">
          <text class="label">减重达成时间</text>

          <picker mode="date" :value="userInfo.date" @change="userInfo.date = $event.detail.value">
            <view class="value">
              <text class="filed">{{ userInfo.date }}</text>
              <uni-icons class="back" color="#999999" type="right" size="18"></uni-icons>
            </view>
          </picker>
        </view>
      </view>

      <view class="box">
        <view class="item">
          <text class="label">运动习惯</text>

          <picker
            mode="selector"
            :range="habitList"
            :value="userInfo.habit"
            @change="userInfo.habit = $event.detail.value"
          >
            <view class="value">
              <text class="filed">{{ habitList[userInfo.habit] }}</text>
              <uni-icons class="back" color="#999999" type="right" size="18"></uni-icons>
            </view>
          </picker>
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
      userInfo: {
        gender: 0,
        date: '2000-01-01',
        habit: 0,
      },
      genderList: ['男', '女'],
      habitList: ['几乎不动，长时间久坐', '偶尔活动，每周1-3天', '经常活动，每周3-5天'],
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

        .label {
          font-size: 28rpx;
          color: #1a1a1a;
          flex-grow: 1;
        }

        picker {
          .value {
            display: flex;
            align-items: center;

            .filed {
              font-size: 26rpx;
              color: #666666;
              margin-right: 10rpx;
            }
          }
        }
      }
    }
  }
}
</style>
