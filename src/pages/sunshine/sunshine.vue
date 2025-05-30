<template>
  <view class="sunshine-page">
    <view class="banner">
      <view class="title">领积分</view>
      <view class="container">
        <image
          class="tree"
          mode="widthFix"
          src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/sunshine/tree.png"
        />

        <view class="progress">
          <text class="progress-title">树苗</text>
          <view class="progress-box">
            <text>成长值：50/100</text>
          </view>
        </view>
      </view>

      <image
        class="rule-icon"
        mode="widthFix"
        @click="openRuleDialog"
        src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/sunshine/rule-icon.png"
      />

      <view class="points">
        <image
          mode="widthFix"
          src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/sunshine/points-icon.png"
        />

        <text>50</text>
      </view>

      <image
        class="recode-icon"
        @click="openRecodeDialog"
        mode="widthFix"
        src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/sunshine/recode-icon.png"
      />

      <image
        class="exchange-icon"
        @click="goExchangeCenter"
        mode="widthFix"
        src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/sunshine/exchange-icon.png"
      />
    </view>

    <view class="get-points">
      <view class="sign-in">
        <view class="title">每天连续签到，可随机额外获取奖励</view>

        <view class="days">
          <text>已连续签到</text>
          <text>2</text>
          <text>天</text>
        </view>

        <view class="day-list">
          <view
            class="day-item"
            :class="{ 'sign-in-item': item.signIn }"
            v-for="item of signInDayList"
            :key="item.index"
          >
            <view class="icon">
              <image
                mode="heightFix"
                :src="
                  item.signIn
                    ? 'https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/sunshine/checked.png'
                    : 'https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/sunshine/sum.png'
                "
              />

              <text>+{{ item.points }}</text>
            </view>

            <text class="day">{{ item.signIn ? '已签到' : `第${item.index}天` }}</text>
          </view>
        </view>

        <view class="sign-in-btn">立即签到</view>
      </view>

      <view class="task">
        <view class="task-item" v-for="(item, index) of taskList" :key="index">
          <image mode="widthFix" src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/sunshine/sum2.png" />

          <view class="points-info">
            <view class="title">{{ item.name }}（{{ item.finishNumber }}/{{ item.totalNumber }}）</view>

            <view class="tip">
              <text>完成任务，</text>
              <text>得{{ item.points }}个积分</text>
            </view>
          </view>

          <view class="get-btn" :class="{ finish: item.finishNumber === item.totalNumber }">去完成</view>
        </view>
      </view>
    </view>

    <rule-dialog ref="ruleDialog" />
    <recode-dialog ref="recodeDialog" />
  </view>
</template>

<script>
import RuleDialog from '@/pages/sunshine/ruleDialog.vue';
import RecodeDialog from '@/pages/sunshine/recodeDialog.vue';

export default {
  name: 'sunshinePage',

  components: {
    RecodeDialog,
    RuleDialog,
  },

  data() {
    return {
      signInDayList: [
        {
          index: 1,
          signIn: true,
          points: 5,
        },
        {
          index: 2,
          signIn: true,
          points: 5,
        },
        {
          index: 3,
          signIn: false,
          points: 10,
        },
        {
          index: 4,
          signIn: false,
          points: 10,
        },
        {
          index: 5,
          signIn: false,
          points: 30,
        },
        {
          index: 6,
          signIn: false,
          points: 30,
        },
        {
          index: 7,
          signIn: false,
          points: 30,
        },
      ],
      taskList: [
        {
          name: '每日签到',
          totalNumber: 1,
          finishNumber: 1,
          points: 10,
        },
        {
          name: '每日记录',
          totalNumber: 1,
          finishNumber: 0,
          points: 10,
        },
        {
          name: '记录体重',
          totalNumber: 1,
          finishNumber: 0,
          points: 10,
        },
        {
          name: '广告激励',
          totalNumber: 1,
          finishNumber: 0,
          points: 10,
        },
        {
          name: '关注账号',
          totalNumber: 1,
          finishNumber: 0,
          points: 10,
        },
      ],
    };
  },

  onShow() {
    let goSignIn = uni.getStorageSync('goSignIn');

    if (goSignIn) {
      uni.removeStorageSync('goSignIn');

      uni.pageScrollTo({
        scrollTop: 300,
        duration: 300,
      });
    }
  },

  methods: {
    openRuleDialog() {
      this.$refs.ruleDialog.open();
    },

    openRecodeDialog() {
      this.$refs.recodeDialog.open();
    },

    goExchangeCenter() {
      uni.navigateTo({
        url: '/pages/exchangeCenter/exchangeCenter',
      });
    },
  },
};
</script>

<style scoped lang="scss">
.sunshine-page {
  background: url('https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/sunshine/bg.png') left top/100% auto
    no-repeat;

  .banner {
    padding: calc(var(--status-bar-height) + 60rpx) 0 74rpx;
    position: relative;

    .title {
      text-align: center;
      color: #ffffff;
      font-size: 32rpx;
      font-weight: bold;
      margin-bottom: 263rpx;
    }

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .tree {
        width: 369rpx;
        margin-bottom: 89rpx;
      }

      .progress {
        position: relative;
        width: 481rpx;
        height: 68rpx;
        background: url('https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/sunshine/progress.png') left
          top/100% 100% no-repeat;
        padding: 0 10rpx 0 24rpx;
        display: flex;
        align-items: center;

        .progress-title {
          font-size: 26rpx;
          color: #7b5740;
          padding-right: 14rpx;
        }

        .progress-box {
          flex-grow: 1;
          height: 48rpx;
          border-radius: 24rpx;
          background: linear-gradient(to bottom, #fe9843, #fe4e05);
          font-size: 26rpx;
          color: #7b5740;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          top: -4rpx;
        }
      }
    }

    .rule-icon {
      position: absolute;
      top: 193rpx;
      left: 30rpx;
      width: 88rpx;
    }

    .points {
      position: absolute;
      top: 193rpx;
      right: 0;
      width: 165rpx;
      height: 71rpx;
      border-radius: 36rpx 0 0 36rpx;
      background: #ffffffaa;
      padding-right: 30rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;

      image {
        width: 74rpx;
        margin-right: 24rpx;
      }

      text {
        font-weight: 500;
        font-size: 36rpx;
        color: #ff9300;
      }
    }

    .recode-icon {
      position: absolute;
      top: 391rpx;
      left: 30rpx;
      width: 88rpx;
    }

    .exchange-icon {
      position: absolute;
      top: 380rpx;
      right: 30rpx;
      width: 101rpx;
    }
  }

  .get-points {
    background: #5bbb59;
    padding: 12rpx 14rpx 44rpx;

    .sign-in {
      background: url('https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/sunshine/get-points-bg.png') left
        top/100% 100% no-repeat;
      padding: 30rpx 30rpx 32rpx;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 26rpx;

      .title {
        font-size: 24rpx;
        color: #999999;
        align-self: flex-end;
        margin-bottom: 40rpx;
      }

      .days {
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 34rpx;
        color: #111111;
        margin-bottom: 40rpx;

        text {
          &:nth-child(2) {
            color: #44c014;
            padding: 0 4rpx;
          }
        }
      }

      .day-list {
        display: flex;
        align-items: center;
        gap: 18rpx;
        margin-bottom: 38rpx;

        .day-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          &.sign-in-item {
            .icon {
              background: #bef05430;

              text {
                color: #3abc14;
              }
            }

            .day {
              color: #666666;
            }
          }

          .icon {
            width: 78rpx;
            height: 110rpx;
            background: #f6f6f6;
            border-radius: 10rpx;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-bottom: 10rpx;

            image {
              height: 38rpx;
              margin-bottom: 20rpx;
            }

            text {
              font-size: 28rpx;
              color: #666666;
            }
          }

          .day {
            font-size: 22rpx;
            color: #999999;
          }
        }
      }

      .sign-in-btn {
        width: 482rpx;
        height: 88rpx;
        background: linear-gradient(90deg, #fe9f49 0%, #fe4c03 100%);
        border-radius: 44rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        font-size: 34rpx;
        color: #ffffff;
      }
    }

    .task {
      background: url('https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/sunshine/get-points-bg2.png') left
        top/100% 100% no-repeat;
      padding: 131rpx 32rpx 44rpx;
      display: flex;
      flex-direction: column;
      gap: 20rpx;

      .task-item {
        display: flex;
        align-items: center;
        background: #ffffff;
        border-radius: 20rpx;
        padding: 26rpx 13rpx 26rpx 0;

        image {
          width: 90rpx;
          margin-right: 10rpx;
        }

        .points-info {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 12rpx;

          .title {
            font-weight: 500;
            font-size: 32rpx;
            color: #222222;
          }

          .tip {
            text {
              font-size: 24rpx;

              &:nth-child(1) {
                color: #999999;
              }

              &:nth-child(2) {
                color: #fe6625;
              }
            }
          }
        }

        .get-btn {
          width: 160rpx;
          height: 60rpx;
          background: linear-gradient(90deg, #fe9f49 0%, #fe4c03 100%);
          border-radius: 30rpx;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30rpx;
          color: #ffffff;

          &.finish {
            background: #d9d9d9;
            color: #ffffff;
          }
        }
      }
    }
  }
}
</style>
