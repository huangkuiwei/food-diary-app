<template>
  <view class="history-plan-page">
    <view class="banner">
      <view class="title">
        <text>历史方案</text>

        <view class="back" @click="back">
          <uni-icons class="back" color="#1A1A1A" type="left" size="22"></uni-icons>
        </view>
      </view>
    </view>

    <view class="current-plan">
      <view class="plan-title">当前方案</view>

      <view class="plan-box">
        <view class="data">
          <view class="progress"></view>

          <view class="time">
            <text>2025-05-13</text>
            <text>2025-06-13</text>
          </view>

          <view class="value">
            <view class="value-item">
              <text>初始</text>
              <text>55公斤</text>
            </view>

            <view class="value-item">
              <text>已减重</text>
              <text>0.01公斤</text>
            </view>

            <view class="value-item">
              <text>目标</text>
              <text>50公斤</text>
            </view>
          </view>
        </view>

        <view class="tip">
          <text class="progress-tip">最新体重55公斤，当前进度0%</text>
          <uni-icons class="back" color="#999999" type="right" size="18"></uni-icons>
        </view>
      </view>
    </view>

    <view class="history-plan">
      <view class="plan-title">历史方案</view>

      <view class="plan-box">
        <view class="data">
          <view class="progress"></view>

          <view class="time">
            <text>2025-05-13</text>
            <text>2025-06-13</text>
          </view>

          <view class="value">
            <view class="value-item">
              <text>初始</text>
              <text>55公斤</text>
            </view>

            <view class="value-item">
              <text>已减重</text>
              <text>0.01公斤</text>
            </view>

            <view class="value-item">
              <text>目标</text>
              <text>50公斤</text>
            </view>
          </view>
        </view>

        <view class="tip">
          <text class="progress-tip">方案结束时体重：55公斤</text>
          <uni-icons class="back" color="#999999" type="right" size="18"></uni-icons>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'historyPlan',

  methods: {
    back() {
      uni.navigateBack();
    },
  },
};
</script>

<style lang="scss">
page {
  background: #f6f7fb;
}
</style>

<style scoped lang="scss">
.history-plan-page {
  .banner {
    padding: calc(var(--status-bar-height) + 60rpx) 0 67rpx;

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

  .current-plan,
  .history-plan {
    padding: 0 30rpx;
    position: relative;
    margin-bottom: 52rpx;

    &.current-plan {
      &::after {
        content: '';
        position: absolute;
        left: 30rpx;
        top: 10rpx;
        width: 12rpx;
        height: 12rpx;
        border-radius: 50%;
        background: #0abf92;
      }
    }

    &.history-plan {
      &::after {
        content: '';
        position: absolute;
        left: 30rpx;
        top: 10rpx;
        width: 12rpx;
        height: 12rpx;
        border-radius: 50%;
        background: #d0d0d0;
      }
    }

    .plan-title {
      font-weight: 500;
      font-size: 30rpx;
      color: #1a1a1a;
      padding-left: 30rpx;
      margin-bottom: 30rpx;
    }

    .plan-box {
      background: #ffffff;
      border-radius: 20rpx;

      .data {
        padding: 30rpx 25rpx 44rpx;

        .progress {
          width: 100%;
          height: 15rpx;
          background: #0abf92;
          border-radius: 8rpx;
          margin-bottom: 22rpx;
        }

        .time {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 50rpx;

          text {
            font-size: 24rpx;
            color: #999999;
          }
        }

        .value {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 90rpx;

          .value-item {
            &:nth-child(1),
            &:nth-child(3) {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: 30rpx;

              text {
                &:nth-child(1) {
                  width: 97rpx;
                  height: 48rpx;
                  background: #eeeeee;
                  border-radius: 10rpx;
                  font-size: 26rpx;
                  color: #333333;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }

                &:nth-child(2) {
                  font-weight: 500;
                  font-size: 32rpx;
                  color: #1a1a1a;
                }
              }
            }

            &:nth-child(2) {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: 30rpx;

              text {
                &:nth-child(1) {
                  width: 97rpx;
                  height: 48rpx;
                  background: #f2fff4;
                  border-radius: 10rpx;
                  border: 1px solid #0abf92;
                  font-size: 26rpx;
                  color: #0abf92;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }

                &:nth-child(2) {
                  font-weight: 500;
                  font-size: 32rpx;
                  color: #0abf92;
                }
              }
            }
          }
        }
      }

      .tip {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 30rpx 23rpx;
        border-top: 2rpx solid #efeff1;

        .progress-tip {
          font-size: 26rpx;
          color: #333333;
        }
      }
    }
  }
}
</style>
