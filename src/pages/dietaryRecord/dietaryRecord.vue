<template>
  <view class="dietary-record-page">
    <view class="banner">
      <view class="title">
        <text>饮食记录</text>

        <view class="back" @click="back">
          <uni-icons class="back" color="#1A1A1A" type="left" size="22"></uni-icons>
        </view>
      </view>
    </view>

    <view class="container">
      <view class="dialogue">
        <view>一个鸡蛋一杯豆浆</view>
        <view>分析完成！以下为分析结果</view>
      </view>

      <view class="res1">
        <view class="header">
          <view>早餐建议<text>349~488</text>千卡</view>
          <view>吃少了</view>
        </view>

        <view class="line"></view>

        <view class="chart-box">
          <view class="chart">
            <l-echart ref="chartRef" @finished="init" />
            <view class="number">
              <text>230</text>
              <text>千卡</text>
            </view>
          </view>
          <view class="component">
            <view class="item">
              <text></text>
              <text>碳水化合物</text>
              <text>12%</text>
              <text>10克</text>
            </view>

            <view class="item">
              <text></text>
              <text>蛋白质</text>
              <text>56%</text>
              <text>21.5克</text>
            </view>

            <view class="item">
              <text></text>
              <text>脂肪</text>
              <text>32%</text>
              <text>12.5克</text>
            </view>
          </view>
        </view>
      </view>

      <view class="res2">
        <view class="title">
          <text>早餐评价</text>
          <text>一般</text>
        </view>

        <view class="measure">
          <view class="line">
            <view class="line-item">
              <text></text>
              <text></text>
              <text>过少</text>
            </view>

            <view class="line-item">
              <text></text>
              <text></text>
              <text>一般</text>
            </view>

            <view class="line-item">
              <text></text>
              <text></text>
              <text class="line-item">合适</text>
            </view>

            <view class="line-item">
              <text></text>
              <text></text>
              <text>偏多</text>
            </view>

            <view class="line-item">
              <text></text>
              <text></text>
              <text>过量</text>
            </view>
          </view>
        </view>
      </view>

      <view class="res3">
        <view class="title">摄入食物</view>

        <view class="food-list">
          <view class="food-item">
            <image
              class="left"
              mode="widthFix"
              src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/recode/head01.png"
            />

            <view class="middle">
              <view>鸡蛋</view>

              <view>1个 50克</view>

              <view>
                <text>3.5克</text>
                <text>14.7克</text>
                <text>6.2克</text>
              </view>
            </view>

            <view class="right">
              <view>209千卡<text>（合适）</text></view>

              <view>
                <image
                  mode="widthFix"
                  src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/dietaryRecord/edit.png"
                />

                <image
                  mode="widthFix"
                  src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/dietaryRecord/delete.png"
                />
              </view>
            </view>
          </view>

          <view class="food-item">
            <image
              class="left"
              mode="widthFix"
              src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/recode/head01.png"
            />

            <view class="middle">
              <view>豆浆</view>

              <view>1杯 300ml</view>

              <view>
                <text>3.5克</text>
                <text>14.7克</text>
                <text>6.2克</text>
              </view>
            </view>

            <view class="right">
              <view>209千卡<text>（合适）</text></view>

              <view>
                <image
                  mode="widthFix"
                  src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/dietaryRecord/edit.png"
                />

                <image
                  mode="widthFix"
                  src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/dietaryRecord/delete.png"
                />
              </view>
            </view>
          </view>
        </view>

        <view class="add-food">
          <uni-icons color="#0ABF92" type="plus-filled" size="22"></uni-icons>
          <text>继续添加食物</text>
        </view>

        <view class="summarize">
          <view><text>优点：</text>豆浆是植物蛋白的良好来源，含有丰富的矿物质和维生素，对健康有益。 </view>
          <view
            ><text>缺点：</text
            >肉包子虽然提供了蛋白质和能量，但150g的分量较大，且可能含有较多的油脂和盐分，不利于健康。</view
          >
        </view>
      </view>

      <view class="save">保存记录</view>
    </view>
  </view>
</template>

<script>
import * as echarts from '@/uni_modules/lime-echart/static/echarts.min';

export default {
  name: 'dietaryRecord',

  data() {
    return {
      option: {
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
                color: [[1, '#FFB66E']],
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

  methods: {
    async init() {
      const chart = await this.$refs.chartRef.init(echarts);
      chart.setOption(this.option);
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
.dietary-record-page {
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
    padding: 27rpx 29rpx 100rpx;

    .dialogue {
      display: flex;
      flex-direction: column;
      gap: 44rpx;
      margin-bottom: 39rpx;

      view {
        padding: 18rpx 22rpx;
        max-width: 400rpx;
        font-size: 26rpx;
        line-height: 40rpx;

        &:nth-child(2n) {
          background: #ffffff;
          border-radius: 5rpx 25rpx 25rpx 25rpx;
          color: #111111;
        }

        &:nth-child(2n-1) {
          background: #0abf92;
          border-radius: 25rpx 5rpx 25rpx 25rpx;
          color: #ffffff;
          align-self: flex-end;
        }
      }
    }

    .res1 {
      background: #ffffff;
      border-radius: 20rpx;
      padding: 0 15rpx;
      margin-bottom: 20rpx;

      .header {
        padding: 30rpx 15rpx;
        display: flex;
        align-items: center;
        justify-content: space-between;

        view {
          font-size: 28rpx;

          &:nth-child(1) {
            color: #111111;

            text {
              color: #fe5b1f;
            }
          }

          &:nth-child(2) {
            color: #fe5b1f;
          }
        }
      }

      .line {
        height: 2rpx;
        width: 100%;
        background: #f5f5f6;
      }

      .chart-box {
        padding: 22rpx 15rpx;
        display: flex;
        align-items: center;

        .chart {
          width: 160rpx;
          height: 160rpx;
          margin-right: 56rpx;
          position: relative;

          .number {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 18rpx;

            text {
              &:nth-child(1) {
                font-weight: 500;
                font-size: 34rpx;
                color: #111111;
              }

              &:nth-child(2) {
                font-size: 22rpx;
                color: #999999;
              }
            }
          }
        }

        .component {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 25rpx;

          .item {
            display: flex;
            align-items: center;

            &:nth-child(1) {
              text {
                &:nth-child(1) {
                  background: #bef054;
                }
              }
            }

            &:nth-child(2) {
              text {
                &:nth-child(1) {
                  background: #fe5b1f;
                }
              }
            }

            &:nth-child(3) {
              text {
                &:nth-child(1) {
                  background: #ffb66e;
                }
              }
            }

            text {
              font-size: 24rpx;
              color: #666666;

              &:nth-child(1) {
                width: 15rpx;
                height: 15rpx;
                border-radius: 2rpx;
                margin-right: 12rpx;
              }

              &:nth-child(2) {
                width: 46%;
              }

              &:nth-child(3) {
                flex-grow: 1;
              }
            }
          }
        }
      }
    }

    .res2 {
      padding: 30rpx;
      background: #ffffff;
      border-radius: 20rpx;
      margin-bottom: 20rpx;

      .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20rpx;

        text {
          font-size: 28rpx;

          &:nth-child(1) {
            color: #111111;
          }

          &:nth-child(2) {
            color: #fe5b1f;
          }
        }
      }

      .measure {
        .line {
          display: flex;
          align-items: center;

          .line-item {
            width: 20%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;

            text {
              &:nth-child(1) {
                width: 100%;
                height: 6rpx;
              }

              &:nth-child(2) {
                border-left: 16rpx solid transparent;
                border-right: 16rpx solid transparent;
                border-top: 16rpx solid transparent;
                border-bottom: 16rpx solid #ffb66e;
                margin-bottom: 16rpx;
              }

              &:nth-child(3) {
                font-size: 20rpx;
                color: #bfbfbf;
                white-space: nowrap;
              }
            }

            &:nth-child(1) {
              text {
                &:nth-child(1) {
                  background: #fe5b1f;
                }
              }
            }

            &:nth-child(2) {
              text {
                &:nth-child(1) {
                  background: #ffb66e;
                }
              }
            }

            &:nth-child(3) {
              text {
                &:nth-child(1) {
                  background: #bef054;
                }
              }
            }

            &:nth-child(4) {
              text {
                &:nth-child(1) {
                  background: #ffb66e;
                }
              }
            }

            &:nth-child(5) {
              text {
                &:nth-child(1) {
                  background: #fe5b1f;
                }
              }
            }
          }
        }
      }
    }

    .res3 {
      padding: 30rpx;
      background: #ffffff;
      border-radius: 20rpx;
      margin-bottom: 40rpx;

      .title {
        font-size: 28rpx;
        color: #111111;
        margin-bottom: 40rpx;
      }

      .food-list {
        display: flex;
        flex-direction: column;
        gap: 50rpx;
        margin-bottom: 50rpx;

        .food-item {
          display: flex;
          align-items: center;

          .left {
            width: 105rpx;
            margin-right: 20rpx;
          }

          .middle {
            display: flex;
            flex-direction: column;
            gap: 16rpx;
            flex-grow: 1;

            view {
              &:nth-child(1) {
                font-size: 28rpx;
                color: #111111;
              }

              &:nth-child(2) {
                font-size: 22rpx;
                color: #999999;
              }

              &:nth-child(3) {
                font-size: 22rpx;
                color: #999999;
                display: flex;
                align-items: center;
                gap: 30rpx;
              }
            }
          }

          .right {
            align-self: stretch;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            view {
              &:nth-child(1) {
                font-size: 22rpx;
                color: #999999;

                text {
                  color: #0abf92;
                }
              }

              &:nth-child(2) {
                align-self: flex-end;
                display: flex;
                align-items: center;
                gap: 30rpx;

                image {
                  width: 26rpx;
                }
              }
            }
          }
        }
      }

      .add-food {
        font-weight: 500;
        font-size: 28rpx;
        color: #0abf92;
        text-align: center;
        margin-bottom: 70rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10rpx;
      }

      .summarize {
        display: flex;
        flex-direction: column;
        gap: 40rpx;

        view {
          font-size: 24rpx;
          color: #111111;

          text {
            line-height: 40rpx;
          }

          &:nth-child(1) {
            text {
              color: #0abf92;
            }
          }

          &:nth-child(2) {
            text {
              color: #fe5b1f;
            }
          }
        }
      }
    }

    .save {
      width: 590rpx;
      margin: 0 auto;
      height: 100rpx;
      background: #0abf92;
      border-radius: 50rpx;
      font-weight: 500;
      font-size: 32rpx;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
