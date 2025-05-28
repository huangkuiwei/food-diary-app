<template>
  <view class="weight-management-plan-page">
    <view class="banner">
      <view class="title">
        <text>体重管理方案</text>

        <view class="back" @click="back">
          <uni-icons class="back" color="#1A1A1A" type="left" size="22"></uni-icons>
        </view>
      </view>
    </view>

    <view class="plan-box">
      <view class="plan-title">我的定制体重管理方案</view>
      <view class="plan-tip">
        <text>目标在</text>
        <text>9月09日</text>
        <text>达到</text>
        <text>46KG</text>
      </view>

      <view class="chart-box">
        <view class="chart-item1">
          <view class="chart-title">
            <text>初始BMI值为：23.44</text>
            <text @click="jump('/pages/historyPlan/historyPlan')">历史记录</text>
          </view>

          <view class="chart-tip">
            根据您的身高体重测算，推荐BMI范围：
            <text>18.5-24.5</text>
          </view>
        </view>

        <view class="chart-item2">
          <view class="time">
            <text class="time1">2025-05-13</text>

            <view class="time2">
              <text class="value">2025-06-13</text>
              <uni-icons color="#666666" type="right" size="18"></uni-icons>
            </view>
          </view>

          <view class="chart"></view>

          <view class="expected">
            <text>一周后</text>
            <text>的理想变化</text>
            <text>-1.25kg</text>
          </view>

          <view class="recode">记录体重》</view>

          <view class="options">
            <text>重置方案</text>
            <text>删除方案</text>
          </view>
        </view>
      </view>

      <view class="cookbook-box">
        <view class="cookbook-title">每日食谱</view>

        <view class="time-nav">
          <view class="time-item" v-for="item of dateList" :key="item.day">
            <text class="date">{{ item.date }}</text>
            <text class="line" v-if="item.active"></text>
          </view>
        </view>

        <view class="cookbook-list">
          <view class="cookbook-item" v-for="item of cookbookList" :key="item.id">
            <view class="cookbook-title">
              <text>{{ item.type }}</text>
              <text>{{ item.totalEnergy }}（{{ item.ratio }}）</text>
            </view>

            <view class="food-list">
              <view class="food-item" v-for="(item1, index) of item.cookbook" :key="index">
                <text>{{ item1.name }}</text>
                <text>{{ item1.energy }}/{{ item1.weight }}</text>
              </view>
            </view>
          </view>
        </view>
      </view>

      <view class="plan-item motion-plan">
        <view class="plan-name">定制化运动方案</view>

        <view class="no-permission">
          <image
            mode="widthFix"
            src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/weightManagementPlan/lock.png"
          />

          <text>会员专享</text>
        </view>
      </view>

      <view class="plan-item life-plan">
        <view class="plan-name">定制化生活方案</view>

        <view class="no-permission">
          <image
            mode="widthFix"
            src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/weightManagementPlan/lock.png"
          />

          <text>会员专享</text>
        </view>
      </view>

      <view class="unlock">
        <text @click="jump('/pages/vip/vip')">解锁会员体验更多功能</text>
      </view>
    </view>
  </view>
</template>

<script>
import { getRecentWeekDates } from '@/utils';

export default {
  name: 'weightManagementPlan',

  data() {
    return {
      dateList: [],
      cookbookList: [
        {
          id: 1,
          type: '早餐',
          totalEnergy: '300千卡',
          ratio: '30%',
          cookbook: [
            {
              name: '燕麦片',
              energy: '100千卡',
              weight: '50克',
            },
            {
              name: '鸡蛋',
              energy: '85千卡',
              weight: '50克',
            },
            {
              name: '豆浆',
              energy: '125千卡',
              weight: '200克',
            },
          ],
        },
        {
          id: 2,
          type: '午餐',
          totalEnergy: '300千卡',
          ratio: '30%',
          cookbook: [
            {
              name: '燕麦片',
              energy: '100千卡',
              weight: '50克',
            },
            {
              name: '鸡蛋',
              energy: '85千卡',
              weight: '50克',
            },
            {
              name: '豆浆',
              energy: '125千卡',
              weight: '200克',
            },
          ],
        },
        {
          id: 3,
          type: '晚餐',
          totalEnergy: '300千卡',
          ratio: '30%',
          cookbook: [
            {
              name: '燕麦片',
              energy: '100千卡',
              weight: '50克',
            },
            {
              name: '鸡蛋',
              energy: '85千卡',
              weight: '50克',
            },
            {
              name: '豆浆',
              energy: '125千卡',
              weight: '200克',
            },
          ],
        },
      ],
    };
  },

  onLoad() {
    this.dateList = getRecentWeekDates();

    this.dateList = this.dateList.map((item) => {
      // 对当天日期进行标识
      let active = item.numberDay === new Date().getDay();

      return {
        ...item,
        active,
      };
    });
  },

  methods: {
    back() {
      uni.navigateBack();
    },

    jump(url) {
      uni.navigateTo({
        url: url,
      });
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
.weight-management-plan-page {
  .banner {
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

  .plan-box {
    background: linear-gradient(to bottom, #ffdecf, #fcebbf, #e3ffcf) left top/100% 620rpx no-repeat;
    padding: 64rpx 30rpx;
    display: flex;
    flex-direction: column;
    align-items: center;

    .plan-title {
      font-weight: bold;
      font-size: 46rpx;
      color: #333333;
      margin-bottom: 24rpx;
    }

    .plan-tip {
      font-size: 30rpx;
      color: #1a1a1a;
      margin-bottom: 67rpx;

      text {
        &:nth-child(2) {
          color: #b36408;
        }

        &:nth-child(4) {
          color: #b36408;
          font-size: 40rpx;
          font-weight: bold;
        }
      }
    }

    .chart-box {
      background: #ffffff;
      box-shadow: 0 2rpx 23rpx 7rpx rgba(241, 203, 151, 0.24);
      border-radius: 20rpx;
      align-self: stretch;
      margin-bottom: 22rpx;

      .chart-item1 {
        padding: 32rpx 25rpx 34rpx;
        border-bottom: 2rpx dashed #dddddd;

        .chart-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20rpx;

          text {
            &:nth-child(1) {
              font-weight: 500;
              font-size: 28rpx;
              color: #1a1a1a;
            }

            &:nth-child(2) {
              font-size: 26rpx;
              color: #b97420;
            }
          }
        }

        .chart-tip {
          font-size: 22rpx;
          color: #999999;

          text {
            color: #ffa537;
          }
        }
      }

      .chart-item2 {
        padding: 32rpx 14rpx;

        .time {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .time1 {
            font-size: 26rpx;
            color: #333333;
          }

          .time2 {
            display: flex;
            align-items: center;

            .value {
              font-size: 26rpx;
              color: #333333;
            }
          }
        }

        .chart {
          margin-bottom: 35rpx;
        }

        .expected {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 45rpx;

          text {
            &:nth-child(1) {
              width: 120rpx;
              height: 51rpx;
              background: #ffa537;
              border-radius: 15rpx;
              font-weight: 500;
              font-size: 30rpx;
              color: #ffffff;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-right: 22rpx;
            }

            &:nth-child(2) {
              color: #1a1a1a;
              font-size: 28rpx;
              margin-right: 10rpx;
            }

            &:nth-child(3) {
              color: #b56505;
              font-size: 32rpx;
            }
          }
        }

        .recode {
          width: 100%;
          height: 86rpx;
          background: #fef7dd;
          border-radius: 40rpx;
          font-weight: bold;
          font-size: 32rpx;
          color: #b46408;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 42rpx;
        }

        .options {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20rpx;

          text {
            width: 274rpx;
            height: 85rpx;
            background: #f7f6fb;
            border-radius: 20rpx;
            font-size: 28rpx;
            color: #333333;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }

    .cookbook-box {
      padding: 43rpx 25rpx;
      align-self: stretch;
      background: #ffffff;
      border-radius: 20rpx;
      margin-bottom: 20rpx;

      .cookbook-title {
        font-weight: 500;
        font-size: 28rpx;
        color: #1a1a1a;
        margin-bottom: 33rpx;
      }

      .time-nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 18rpx;

        .time-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .date {
            font-size: 24rpx;
            color: #1a1a1a;
            padding-bottom: 14rpx;
          }

          .line {
            width: 60rpx;
            height: 5rpx;
            background: #0abf92;
          }
        }
      }

      .cookbook-list {
        display: flex;
        flex-direction: column;
        gap: 20rpx;

        .cookbook-item {
          background: #e1faff;
          border-radius: 20rpx;
          padding: 24rpx;

          .cookbook-title {
            display: flex;
            align-items: center;
            margin-bottom: 26rpx;

            text {
              &:nth-child(1) {
                font-size: 28rpx;
                color: #1a1a1a;
                margin-right: 14rpx;
              }

              &:nth-child(2) {
                font-size: 22rpx;
                color: #fe5b1f;
              }
            }
          }

          .food-list {
            display: flex;
            flex-direction: column;
            gap: 20rpx;

            .food-item {
              display: flex;
              align-items: center;
              justify-content: space-between;

              text {
                font-size: 22rpx;
                color: #1a1a1a;
              }
            }
          }
        }
      }
    }

    .plan-item {
      align-self: stretch;
      background: #ffffff;
      border-radius: 20rpx;
      padding: 40rpx 25rpx;
      margin-bottom: 20rpx;

      &.life-plan {
        margin-bottom: 30rpx;
      }

      .plan-name {
        font-weight: 500;
        font-size: 28rpx;
        color: #1a1a1a;
      }

      .no-permission {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 50rpx 0;

        image {
          width: 60rpx;
          margin-bottom: 20rpx;
        }

        text {
          font-size: 26rpx;
          color: #333333;
        }
      }
    }

    .unlock {
      display: flex;
      align-items: center;
      justify-content: center;

      text {
        width: 590rpx;
        height: 100rpx;
        background: #0abf92;
        border-radius: 50rpx;
        font-size: 32rpx;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
