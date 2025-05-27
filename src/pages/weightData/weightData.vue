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

    <view class="data-charts">
      <view class="chart1-box">
        <view class="chart"></view>

        <view class="detail">
          <view class="item">
            <view class="value">
              <text>初始体重</text>
              <text>55公斤</text>
            </view>

            <image
              mode="widthFix"
              src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/weightData/edit.png"
            />
          </view>

          <view class="item">
            <view class="value">
              <text>目标体重</text>
              <text>50公斤</text>
            </view>

            <image
              mode="widthFix"
              src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/weightData/edit.png"
            />
          </view>

          <view class="item">
            <view class="value">
              <text>最新体重</text>
              <text>54公斤</text>
            </view>

            <image
              mode="widthFix"
              src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/weightData/edit.png"
            />
          </view>
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

<style>
page {
  background: #f6f7fb;
}
</style>

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

  .data-charts {
    padding: 20rpx 30rpx;

    .chart1-box {
      background: #ffffff;
      padding: 30rpx 40rpx;
      display: flex;
      align-items: center;

      .chart {
        width: 60%;
        flex-shrink: 0;
      }

      .detail {
        width: 40%;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        gap: 40rpx;

        .item {
          display: flex;
          align-items: center;

          .value {
            display: flex;
            flex-direction: column;
            margin-right: 70rpx;

            text {
              &:nth-child(1) {
                color: #999999;
                font-size: 24rpx;
                margin-bottom: 10rpx;
              }

              &:nth-child(2) {
                color: #1a1a1a;
                font-size: 30rpx;
              }
            }
          }

          image {
            width: 28rpx;
          }
        }
      }
    }
  }
}
</style>
