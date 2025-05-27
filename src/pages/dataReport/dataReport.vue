<template>
  <view class="data-report-page">
    <view class="banner">
      <view class="title">
        <text>数据报告</text>

        <view class="back" @click="back">
          <uni-icons class="back" color="#1A1A1A" type="left" size="22"></uni-icons>
        </view>
      </view>
    </view>

    <view class="nav-tab">
      <view
        class="nav-item"
        :class="{ active: selectedTime.id === item.id }"
        v-for="item of timeList"
        :key="item.id"
        @click="selectedTime = item"
      >
        <text class="name">{{ item.name }}</text>
        <text class="highlight" v-if="selectedTime.id === item.id" />
      </view>
    </view>

    <view class="data-detail">
      <view class="data-item">
        <view class="data-title">
          <text>身体指标</text>
          <text>共2天</text>
        </view>

        <view class="data-info">
          <view class="data-info-item">
            <view class="info-title">体重</view>

            <view class="change-list">
              <view class="day1">
                <text>55公斤</text>
                <text>05-13</text>
              </view>

              <view class="line"></view>

              <view class="day2">
                <text>55公斤</text>
                <text>05-13</text>
              </view>
            </view>
          </view>

          <view class="data-info-item">
            <view class="info-title">BMI</view>

            <view class="change-list">
              <view class="day1">
                <text>20.4</text>
                <text>05-13</text>
              </view>

              <view class="line"></view>

              <view class="day2">
                <text>20.4</text>
                <text>05-13</text>
              </view>
            </view>

            <view class="summary">本周体重无明显变化</view>
          </view>
        </view>
      </view>

      <view class="data-item">
        <view class="data-title">
          <text>饮食</text>
          <text>共2天</text>
        </view>

        <view class="data-info">
          <view class="data-info-item">
            <view class="info-title">平均摄入</view>

            <view class="change-list1">
              <view class="day">
                <text class="time">本周</text>
                <text class="progress"></text>
                <text class="number">260千卡</text>
              </view>

              <view class="day">
                <text class="time">上周</text>
                <text class="progress"></text>
                <text class="number">0千卡</text>
              </view>
            </view>

            <view class="summary">本周平均摄入热量260千卡，最高的一天摄入322千卡</view>
          </view>

          <view class="data-info-item">
            <view class="info-title">食物种类</view>

            <view class="change-list1">
              <view class="day">
                <text class="time">本周</text>
                <text class="progress"></text>
                <text class="number">2种</text>
              </view>

              <view class="day">
                <text class="time">上周</text>
                <text class="progress"></text>
                <text class="number">0种</text>
              </view>
            </view>

            <view class="summary">本周摄入食物2种</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'dataReport',

  data() {
    return {
      timeList: [
        {
          id: 1,
          name: '本周',
          value: 1,
        },
        {
          id: 2,
          name: '本月',
          value: 1,
        },
        {
          id: 3,
          name: '近三个月',
          value: 1,
        },
        {
          id: 4,
          name: '近半年',
          value: 1,
        },
      ],
      selectedTime: {},
    };
  },

  onLoad() {
    this.selectedTime = this.timeList[0];
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
.data-report-page {
  .banner {
    padding: calc(var(--status-bar-height) + 60rpx) 0 30rpx;
    background: #ffffff;

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

  .nav-tab {
    background: #ffffff;
    padding: 40rpx 56rpx 32rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .nav-item {
      position: relative;

      &.active {
        .name {
          color: #1a1a1a;
        }
      }

      .name {
        color: #999999;
        font-size: 30rpx;
        position: relative;
        z-index: 1;
      }

      .highlight {
        position: absolute;
        left: 0;
        right: 0;
        bottom: -2rpx;
        height: 12rpx;
        background: #0abf92;
        border-radius: 6rpx;
      }
    }
  }

  .data-detail {
    padding: 40rpx 30rpx;

    .data-item {
      margin-bottom: 44rpx;

      .data-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 28rpx;

        text {
          &:nth-child(1) {
            font-weight: 500;
            font-size: 30rpx;
            color: #1a1a1a;
          }

          &:nth-child(2) {
            font-size: 24rpx;
            color: #333333;
          }
        }
      }

      .data-info {
        background: #ffffff;
        border-radius: 20rpx;
        padding: 30rpx 25rpx;
        display: flex;
        flex-direction: column;
        gap: 44rpx;

        .data-info-item {
          .info-title {
            padding-left: 30rpx;
            font-size: 24rpx;
            color: #999999;
            margin-bottom: 30rpx;
            position: relative;

            &::after {
              content: '';
              position: absolute;
              left: 0;
              top: 0;
              width: 10rpx;
              height: 26rpx;
              background: #0abf92;
              border-radius: 5rpx;
            }
          }

          .change-list {
            background: #f5f6fa;
            border-radius: 10rpx;
            padding: 30rpx 52rpx;
            display: flex;
            align-items: center;

            .day1,
            .day2 {
              flex-shrink: 0;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;

              text {
                &:nth-child(1) {
                  font-size: 28rpx;
                  color: #1a1a1a;
                  margin-bottom: 20rpx;
                }

                &:nth-child(2) {
                  font-size: 26rpx;
                  color: #666666;
                }
              }
            }

            .line {
              flex-grow: 1;
              border-top: 2rpx dashed #cbe1ff;
              margin: 0 40rpx;
            }
          }

          .change-list1 {
            background: #f5f6fa;
            border-radius: 10rpx;
            padding: 30rpx 52rpx;
            display: flex;
            flex-direction: column;
            gap: 16rpx;

            .day {
              display: flex;
              align-items: center;
              font-size: 28rpx;
              color: #1a1a1a;

              .progress {
                flex-grow: 1;
                margin: 0 34rpx;
              }
            }
          }

          .summary {
            margin-top: 32rpx;
            font-size: 25rpx;
            color: #666666;
          }
        }
      }
    }
  }
}
</style>
