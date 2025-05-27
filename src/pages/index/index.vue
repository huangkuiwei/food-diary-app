<template>
  <view class="index-page">
    <view class="banner">
      <view class="title">首页</view>

      <view class="score">
        <view class="left">
          <view class="number">
            <text>1.8</text>
            <text>公斤</text>
          </view>

          <view class="tip">「已减重」</view>
        </view>

        <view class="right">
          <view class="detail" v-if="markPlan">
            <view class="item">
              <text>30天</text>
              <text>计划倒计时</text>
            </view>

            <view class="item">
              <text>55KG</text>
              <text>目标体重</text>
            </view>
          </view>

          <view class="mark-plan" v-else>
            <text class="add-icon">+</text>
            <text class="add-text">创建计划</text>
            <view class="tip">
              <text>科学合理的计划</text>
              <text>是减脂成功的第一步哦</text>
            </view>
          </view>
        </view>
      </view>

      <view class="progress-container">
        <view class="progress">
          <view class="img">
            <image mode="widthFix" src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/home/doctor.png" />
            <image mode="widthFix" src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/home/tip-btn.png" />
          </view>

          <view class="current">当前</view>
          <view class="target">目标</view>
        </view>

        <view class="progress-chart">
          <view style="width: 750rpx">
            <l-echart ref="chartRef" @finished="init" />
          </view>
        </view>
      </view>
    </view>

    <view class="get-way-btn">
      <image mode="widthFix" src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/home/get-way-btn.png" />
    </view>

    <view class="ai">
      <view class="ai-title">
        <image mode="widthFix" src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/home/ai-icon.png" />
      </view>

      <view class="ai-list">
        <view class="item1">
          <view>
            <text>减肥食谱</text>
          </view>
          <view>
            <text>营养专家</text>
          </view>
          <view>
            <text>健康食谱</text>
          </view>
        </view>

        <view class="item2">
          <view>
            <text>健身教练</text>
            <image
              mode="widthFix"
              src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/home/ai-icon-bg4.png"
            />
          </view>

          <view>
            <text>配料表快查</text>
            <image
              mode="widthFix"
              src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/home/ai-icon-bg5.png"
            />
          </view>

          <view>
            <text>BMI计算器</text>
            <image
              mode="widthFix"
              src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/home/ai-icon-bg6.png"
            />
          </view>

          <view>
            <text>BMR计算器</text>
            <image
              mode="widthFix"
              src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/home/ai-icon-bg7.png"
            />
          </view>

          <view>
            <text>热量计算器</text>
            <image
              mode="widthFix"
              src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/home/ai-icon-bg8.png"
            />
          </view>

          <view>
            <text>热量缺口测算</text>
            <image
              mode="widthFix"
              src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/home/ai-icon-bg9.png"
            />
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import * as echarts from '@/uni_modules/lime-echart/static/echarts.min';

export default {
  name: 'indexPage',

  data() {
    return {
      markPlan: false,
      option: {
        series: [
          {
            type: 'gauge',
            startAngle: 210,
            endAngle: -30,
            min: 0,
            max: 100,
            splitNumber: 12,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#0ABF92', // 起始颜色
                },
                {
                  offset: 1,
                  color: '#9AE9CC', // 结束颜色
                },
              ]),
              shadowColor: 'transparent',
              shadowBlur: 10,
              shadowOffsetX: 2,
              shadowOffsetY: 2,
            },
            progress: {
              show: true,
              roundCap: true,
              width: 16,
            },
            pointer: {
              show: false,
            },
            axisLine: {
              roundCap: true,
              lineStyle: {
                width: 16,
                color: [[1, '#9AE9CC']],
              },
            },
            radius: '100%',
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            title: {
              show: false,
            },
            detail: {
              show: false,
            },
            data: [
              {
                value: 20,
              },
            ],
          },
        ],
      },
    };
  },

  onLoad() {},

  methods: {
    async init() {
      // chart 图表实例不能存在data里
      const chart = await this.$refs.chartRef.init(echarts);
      chart.setOption(this.option);
    },
  },
};
</script>

<style scoped lang="scss">
.index-page {
  .banner {
    padding: calc(var(--status-bar-height) + 60rpx) 0 38rpx;
    background: url('https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/home/banner-bg.png') left top/100% auto
      no-repeat;

    .title {
      text-align: center;
      color: #1a1a1a;
      font-size: 32rpx;
      font-weight: bold;
      margin-bottom: 56rpx;
    }

    .score {
      padding: 0 30rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 22rpx;

      .left {
        display: flex;
        flex-direction: column;
        align-items: center;

        .number {
          margin-bottom: 20rpx;
          font-weight: bold;
          color: #111111;

          text {
            &:nth-child(1) {
              font-size: 170rpx;
            }

            &:nth-child(2) {
              font-size: 32rpx;
            }
          }
        }

        .tip {
          font-size: 36rpx;
          color: #1a1a1a;
          font-weight: 500;
        }
      }

      .right {
        background: #ffffff;
        width: 240rpx;
        height: 240rpx;
        border-radius: 20rpx;

        .detail {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 44rpx;

          .item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            text {
              &:nth-child(1) {
                font-size: 28rpx;
                color: #111111;
                font-weight: 500;
                margin-bottom: 16rpx;
              }

              &:nth-child(2) {
                font-size: 22rpx;
                color: #999999;
              }
            }
          }
        }

        .mark-plan {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 24rpx;

          .add-icon {
            background: #bef054;
            border-radius: 50%;
            width: 39rpx;
            height: 39rpx;
            font-size: 28rpx;
            color: #333333;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .add-text {
            font-size: 28rpx;
            color: #111111;
            font-size: 500;
          }

          .tip {
            font-size: 22rpx;
            color: #999999;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            text {
              line-height: 29rpx;
            }
          }
        }
      }
    }

    .progress-container {
      padding: 64rpx 68rpx 0;
      position: relative;

      .progress {
        position: relative;
        padding-bottom: 14rpx;

        .img {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          image {
            &:nth-child(1) {
              width: 244rpx;
            }

            &:nth-child(2) {
              width: 384rpx;
            }
          }
        }

        .current,
        .target {
          position: absolute;
          bottom: 0;
          width: 96rpx;
          height: 50rpx;
          border-radius: 25rpx;
          font-size: 28rpx;
          display: flex;
          align-items: center;
          justify-content: center;

          &.current {
            left: 0;
            color: #111111;
            background: #9ae9cc;
          }

          &.target {
            right: 0;
            color: #ffffff;
            background: #0abf92;
          }
        }
      }

      .progress-chart {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        overflow: hidden;
      }
    }
  }

  .get-way-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40rpx;

    image {
      width: 690rpx;
    }
  }

  .ai {
    background: linear-gradient(0deg, #fcfcfc 0%, #f3f7fa 100%);
    box-shadow: 0 0 40rpx 0 rgba(236, 237, 233, 0.77);
    border-radius: 50rpx 50rpx 0 0;
    border: 2px solid #ffffff;
    padding: 40rpx 52rpx;

    .ai-title {
      margin-bottom: 38rpx;

      image {
        width: 180rpx;
      }
    }

    .ai-list {
      font-weight: 500;

      .item1 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20rpx;

        view {
          width: 202rpx;
          height: 180rpx;
          text-align: center;

          &:nth-child(1) {
            background: url('https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/home/ai-icon-bg1.png') left
              top/100% auto no-repeat;
          }

          &:nth-child(2) {
            background: url('https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/home/ai-icon-bg2.png') left
              top/100% auto no-repeat;
          }

          &:nth-child(3) {
            background: url('https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/home/ai-icon-bg3.png') left
              top/100% auto no-repeat;
          }

          text {
            position: relative;
            top: 124rpx;
            font-size: 28rpx;
            color: #1a1a1a;
          }
        }
      }

      .item2 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;

        view {
          width: 314rpx;
          height: 130rpx;
          padding: 0 30rpx 0 34rpx;
          background: #ffffff;
          border-radius: 20rpx;
          margin-bottom: 20rpx;
          display: flex;
          align-items: center;
          justify-content: space-between;

          text {
            font-size: 28rpx;
            color: #1a1a1a;
          }

          image {
            width: 64rpx;
          }
        }
      }
    }
  }
}
</style>
