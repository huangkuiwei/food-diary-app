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
        <view class="progress">
          <view class="chart">
            <l-echart ref="chart1Ref" @finished="init1" />

            <view class="progress-tip">
              <text>累计减重（公斤）</text>
              <text>1.00</text>
              <text>目标完成20%</text>
            </view>
          </view>

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

        <view class="line"></view>

        <view class="bmi">
          <view class="value1">
            <text>初始BMI值为：23.44</text>
            <text>正常</text>
          </view>

          <view class="value2">
            <text>根据您的身高体重测算，推荐BMI范围：</text>
            <text>18.5-24.5</text>
          </view>
        </view>
      </view>

      <view class="plan">
        <view class="btn1">查看计划</view>
        <view class="btn2">+更新最新体重</view>
      </view>

      <view class="chart2-box">
        <view class="chart-title">体重变化曲线</view>

        <view class="chart">
          <l-echart ref="chart2Ref" @finished="init2" />
        </view>
      </view>

      <view class="chart3-box">
        <view class="chart-title">BMI变化曲线</view>

        <view class="chart">
          <l-echart ref="chart3Ref" @finished="init3" />
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import * as echarts from '@/uni_modules/lime-echart/static/echarts.min';

export default {
  name: 'weightData',

  data() {
    return {
      option1: {
        series: [
          {
            type: 'gauge',
            startAngle: 120,
            endAngle: -240,
            min: 0,
            max: 100,
            splitNumber: 12,
            itemStyle: {
              color: '#0ABF92',
              shadowColor: 'transparent',
              shadowBlur: 10,
              shadowOffsetX: 2,
              shadowOffsetY: 2,
            },
            progress: {
              show: true,
              roundCap: true,
              width: 4,
            },
            pointer: {
              show: false,
            },
            axisLine: {
              roundCap: true,
              lineStyle: {
                width: 4,
                color: [[1, '#F6F7FB']],
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
      option2: {
        title: {
          show: false,
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          bottom: 0,
        },
        grid: {
          top: '5%',
          left: '5%',
          right: '5%',
          bottom: '10%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          data: ['05-12', '05-13', '05-14', '05-15', '05-16', '05-17', '05-18'],
          boundaryGap: false,
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: '体重',
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
            color: '#FFA537',
            areaStyle: {
              color: '#FFEDD7',
            },
          },
        ],
      },
      option3: {
        title: {
          show: false,
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          bottom: 0,
        },
        grid: {
          top: '5%',
          left: '5%',
          right: '5%',
          bottom: '10%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          data: ['05-12', '05-13', '05-14', '05-15', '05-16', '05-17', '05-18'],
          boundaryGap: false,
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: 'BMI',
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
            color: '#0ABF92',
            areaStyle: {
              color: '#CEF2E9',
            },
          },
        ],
      },
    };
  },

  methods: {
    async init1() {
      const chart = await this.$refs.chart1Ref.init(echarts);
      chart.setOption(this.option1);
    },

    async init2() {
      const chart = await this.$refs.chart2Ref.init(echarts);
      chart.setOption(this.option2);
    },

    async init3() {
      const chart = await this.$refs.chart3Ref.init(echarts);
      chart.setOption(this.option3);
    },

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
      border-radius: 20rpx;
      padding: 30rpx 40rpx;
      margin-bottom: 20rpx;

      .progress {
        display: flex;
        align-items: center;

        .chart {
          width: 220rpx;
          height: 220rpx;
          flex-shrink: 0;
          position: relative;

          .progress-tip {
            position: absolute;
            left: 0;
            right: 0;
            top: 20rpx;
            bottom: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20rpx;

            text {
              &:nth-child(1) {
                font-size: 22rpx;
                color: #999999;
              }

              &:nth-child(2) {
                font-size: 36rpx;
                color: #1a1a1a;
              }

              &:nth-child(3) {
                font-size: 22rpx;
                color: #666666;
              }
            }
          }
        }

        .detail {
          flex-grow: 1;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
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

      .line {
        margin: 30rpx 0;
        height: 2rpx;
        background: #f6f7fb;
      }

      .bmi {
        .value1 {
          display: flex;
          align-items: center;
          margin-bottom: 20rpx;

          text {
            &:nth-child(1) {
              font-weight: 500;
              font-size: 28rpx;
              color: #1a1a1a;
              margin-right: 20rpx;
            }

            &:nth-child(2) {
              width: 60rpx;
              height: 32rpx;
              background: #ffa537;
              border-radius: 16rpx;
              font-size: 22rpx;
              color: #ffffff;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        }

        .value2 {
          display: flex;
          align-items: center;

          text {
            font-size: 22rpx;

            &:nth-child(1) {
              color: #999999;
            }

            &:nth-child(2) {
              color: #ffa537;
            }
          }
        }
      }
    }

    .plan {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20rpx;
      margin-bottom: 54rpx;

      view {
        width: 274rpx;
        height: 85rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28rpx;
        color: #ffffff;
        border-radius: 20rpx;

        &:nth-child(1) {
          background: #ffa537;
        }

        &:nth-child(2) {
          background: #0abf92;
        }
      }
    }

    .chart2-box,
    .chart3-box {
      margin-bottom: 52rpx;

      .chart-title {
        font-weight: 500;
        font-size: 30rpx;
        color: #1a1a1a;
        margin-bottom: 30rpx;
      }

      .chart {
        background: #ffffff;
        border-radius: 20rpx;
        padding: 50rpx 20rpx;
      }
    }
  }
}
</style>
