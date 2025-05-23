<template>
  <view class="recode-page">
    <view class="banner">
      <view class="title">记录</view>

      <view class="date">
        <view class="item" :class="{ active: item.active }" v-for="item of dateList" :key="item.day">
          <text>{{ item.day }}</text>
          <text>{{ item.date }}</text>
        </view>
      </view>
    </view>

    <view class="container">
      <view class="manage">
        <view class="top">每日热量管理</view>

        <view class="bottom">
          <view class="item">
            <text>2000</text>
            <text>热量推荐</text>
          </view>

          <view class="item">
            <text>310</text>
            <text>已摄入</text>
          </view>

          <view class="item">
            <text>0</text>
            <text>已消耗</text>
          </view>

          <view class="line"></view>

          <view class="item">
            <text>1690</text>
            <text>今日可吃</text>
          </view>
        </view>
      </view>

      <view class="recode-box">
        <view class="title">每日饮食记录</view>
        <view class="used">已摄入：310千卡</view>

        <view class="recode-list">
          <view v-for="(item, index) in reocedList" :key="index">
            <image mode="heightFix" :src="item.icon" />
            <text class="text">{{ item.text }}</text>
            <text v-if="item.active" class="line"></text>
          </view>
        </view>

        <view class="line"></view>

        <view class="food-list">
          <view>
            <text>燕麦片</text>
            <text>50克</text>
            <text>100千卡</text>
          </view>

          <view>
            <text>鸡蛋</text>
            <text>50克</text>
            <text>100千卡</text>
          </view>

          <view>
            <text>豆浆</text>
            <text>50克</text>
            <text>100千卡</text>
          </view>
        </view>
      </view>

      <view class="other-info">
        <view class="left">
          <view class="title">体重</view>
          <view class="update">1天前更新</view>

          <view class="number">
            <text>45.5</text>
            <text>kg</text>
          </view>

          <view class="add">+</view>
        </view>

        <view class="right">
          <view class="title">运动</view>

          <view class="motion-list">
            <view class="item">
              <text>·跑步</text>
              <text>30分钟</text>
              <text>-1200千卡</text>
            </view>

            <view class="item">
              <text>·跑步</text>
              <text>30分钟</text>
              <text>-1200千卡</text>
            </view>
          </view>

          <view class="total">总消耗2400千卡</view>

          <view class="add">+</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { getRecentWeekDates } from '@/utils';

export default {
  name: 'recodePage',

  data() {
    return {
      dateList: [],
      reocedList: [
        {
          icon: 'https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/recode/food-icon1.png',
          text: '早餐',
          active: true,
        },
        {
          icon: 'https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/recode/food-icon2.png',
          text: '午餐',
          active: false,
        },
        {
          icon: 'https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/recode/food-icon3.png',
          text: '晚餐',
          active: false,
        },
        {
          icon: 'https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/recode/food-icon4.png',
          text: '运动',
          active: false,
        },
        {
          icon: 'https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/recode/food-icon5.png',
          text: '加餐',
          active: false,
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
};
</script>

<style>
page {
  background: #f6f7fb;
}
</style>

<style scoped lang="scss">
.recode-page {
  .banner {
    padding: calc(var(--status-bar-height) + 60rpx) 0 15rpx;
    background: #ffffff;
    border-radius: 0 0 30rpx 30rpx;

    .title {
      text-align: center;
      color: #1a1a1a;
      font-size: 32rpx;
      font-weight: bold;
      margin-bottom: 65rpx;
    }

    .date {
      display: flex;
      align-items: center;
      justify-content: space-around;

      .item {
        &.active {
          text {
            &:nth-child(1) {
              color: #000000;
            }

            &:nth-child(2) {
              background: #c8f370;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        }

        text {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          &:nth-child(1) {
            color: #999999;
            font-size: 22rpx;
            margin-bottom: 30rpx;
          }

          &:nth-child(2) {
            width: 45rpx;
            height: 45rpx;
            color: #111111;
            font-size: 26rpx;
          }
        }
      }
    }
  }

  .container {
    padding: 22rpx 30rpx 100rpx;

    .manage {
      background: url('https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/recode/recode-bg1.png') left top/100%
        100% no-repeat;
      padding: 30rpx 40rpx 60rpx;
      display: flex;
      flex-direction: column;
      margin-bottom: 20rpx;

      .top {
        width: 191rpx;
        height: 64rpx;
        background: #111111;
        border-radius: 32rpx;
        font-weight: bold;
        font-size: 26rpx;
        color: #fafcff;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 52rpx;
      }

      .bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          text {
            &:nth-child(1) {
              font-weight: bold;
              font-size: 36rpx;
              color: #111111;
              margin-bottom: 24rpx;
            }

            &:nth-child(2) {
              font-size: 26rpx;
              color: #111111;
            }
          }
        }

        .line {
          align-self: stretch;
          border-right: 2px dashed #111111;
        }
      }
    }

    .recode-box {
      background: #ffffff;
      padding: 30rpx 32rpx 44rpx;
      border-radius: 20rpx;
      margin-bottom: 20rpx;

      .title {
        font-size: 30rpx;
        color: #1a1a1a;
        margin-bottom: 20rpx;
      }

      .used {
        font-size: 26rpx;
        color: #999999;
        margin-bottom: 60rpx;
      }

      .recode-list {
        display: flex;
        justify-content: space-between;

        view {
          display: flex;
          flex-direction: column;
          align-items: center;

          image {
            height: 48rpx;
            margin-bottom: 14rpx;
          }

          .text {
            font-size: 24rpx;
            color: #1a1a1a;
            margin-bottom: 10rpx;
          }

          .line {
            width: 60rpx;
            height: 5rpx;
            background: #78f788;
            border-radius: 3rpx;
          }
        }
      }

      .line {
        width: 100%;
        height: 4rpx;
        background: #f5f5f6;
        margin-bottom: 42rpx;
      }

      .food-list {
        display: flex;
        flex-direction: column;
        gap: 24rpx;

        view {
          display: flex;
          align-items: center;

          text {
            &:nth-child(1) {
              font-size: 26rpx;
              color: #333333;
              margin-right: 6rpx;
            }

            &:nth-child(2) {
              font-size: 24rpx;
              color: #999999;
              flex-grow: 1;
            }

            &:nth-child(3) {
              font-size: 24rpx;
              color: #999999;
            }
          }
        }
      }
    }

    .other-info {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .left,
      .right {
        width: 334rpx;
        height: 336rpx;

        &.left {
          background: url('https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/recode/recode-bg2.png') left
            top/100% 100% no-repeat;
          padding: 32rpx 28rpx 40rpx 26rpx;
          display: flex;
          flex-direction: column;
          position: relative;

          .title {
            font-size: 30rpx;
            color: #1a1a1a;
            margin-bottom: 18rpx;
          }

          .update {
            font-size: 24rpx;
            color: #666666;
            flex-grow: 1;
          }

          .number {
            display: flex;
            align-items: center;

            text {
              &:nth-child(1) {
                font-weight: bold;
                font-size: 48rpx;
                color: #1a1a1a;
              }

              &:nth-child(2) {
                font-size: 24rpx;
                color: #1a1a1a;
                position: relative;
                top: 6rpx;
              }
            }
          }
        }

        &.right {
          background: #ffffff;
          border-radius: 25rpx;
          padding: 32rpx 28rpx 20rpx 26rpx;
          display: flex;
          flex-direction: column;
          position: relative;

          .title {
            font-size: 30rpx;
            color: #1a1a1a;
            margin-bottom: 37rpx;
          }

          .motion-list {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            gap: 24rpx;

            .item {
              display: flex;
              align-items: center;

              text {
                &:nth-child(1) {
                  color: #333333;
                  font-size: 26rpx;
                  margin-right: 10rpx;
                }

                &:nth-child(2) {
                  color: #666666;
                  font-size: 24rpx;
                  flex-grow: 1;
                }

                &:nth-child(3) {
                  font-size: 22rpx;
                  color: #666666;
                }
              }
            }
          }

          .total {
            align-self: center;
            width: 212rpx;
            height: 48rpx;
            background: #78f788;
            border-radius: 24rpx;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24rpx;
            color: #333333;
          }
        }

        .add {
          position: absolute;
          top: 15rpx;
          right: 28rpx;
          width: 54rpx;
          height: 54rpx;
          background: #efefef;
          border-radius: 50%;
          font-size: 36rpx;
          color: #1a1a1a;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
}
</style>
