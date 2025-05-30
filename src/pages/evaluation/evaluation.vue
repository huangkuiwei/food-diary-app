<template>
  <view class="evaluation-page">
    <view class="banner">
      <view class="title">
        <text>测评</text>

        <view class="back" @click="back">
          <uni-icons class="back" color="#1A1A1A" type="left" size="22"></uni-icons>
        </view>
      </view>
    </view>

    <view class="evaluation-container">
      <view class="evaluation-box">
        <view class="tip">完成数据，为您生成专属方案</view>
        <view class="progress">
          <text :style="{ width: ((stepIndex + 1) / 4) * 100 + '%' }"></text>
        </view>

        <view class="evaluation-title">
          <text>{{ evaluationList[stepIndex].title }}</text>
          <text>{{ evaluationList[stepIndex].subTitle }}</text>
        </view>

        <view class="evaluation evaluation1" v-if="stepIndex === 0">
          <view class="gender">
            <view class="gender-item" @click="gender = 1">
              <image
                mode="widthFix"
                src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/evaluation/gender1.png"
              />
              <text>男生</text>
              <view class="checked" v-if="gender === 1">
                <uni-icons color="#3dff00" type="checkmarkempty" size="30"></uni-icons>
              </view>
            </view>

            <view class="gender-item" @click="gender = 2">
              <image
                mode="widthFix"
                src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/evaluation/gender2.png"
              />
              <text>女生</text>
              <view class="checked" v-if="gender === 2">
                <uni-icons color="#3dff00" type="checkmarkempty" size="30"></uni-icons>
              </view>
            </view>
          </view>

          <picker-view :value="age">
            <picker-view-column>
              <view class="age-item" v-for="(item, index) in ageList" :key="index">{{ item }}岁</view>
            </picker-view-column>
          </picker-view>
        </view>

        <view class="evaluation evaluation2" v-if="stepIndex === 1">
          <view class="evaluation-item">
            <view class="evaluation-item-title">身高</view>

            <view class="evaluation-item-value">
              170
              <text class="unit">CM</text>
            </view>

            <view class="ruler-line">
              <view
                class="ruler-line-item"
                :class="{ 'int-line': item % 10 === 0 }"
                v-for="item of rulerLineList"
                :key="item"
              >
                <text v-if="item % 10 === 0">{{ item }}</text>
              </view>
            </view>
          </view>

          <view class="evaluation-item">
            <view class="evaluation-item-title">当前体重</view>

            <view class="evaluation-item-value">
              50
              <text class="unit">公斤</text>
            </view>

            <view class="ruler-line">
              <view
                class="ruler-line-item"
                :class="{ 'int-line': item % 10 === 0 }"
                v-for="item of rulerLineList"
                :key="item"
              >
                <text v-if="item % 10 === 0">{{ item }}</text>
              </view>
            </view>
          </view>

          <view class="evaluation-item">
            <view class="evaluation-item-title">目标体重</view>

            <view class="evaluation-item-value">
              45
              <text class="unit">公斤</text>
            </view>

            <view class="ruler-line">
              <view
                class="ruler-line-item"
                :class="{ 'int-line': item % 10 === 0 }"
                v-for="item of rulerLineList"
                :key="item"
              >
                <text v-if="item % 10 === 0">{{ item }}</text>
              </view>
            </view>
          </view>
        </view>

        <view class="evaluation evaluation3" v-if="stepIndex === 2">
          <calendar />

          <view class="expected">
            <view class="line1">
              <view class="left">
                预计
                <text>2</text>
                周
              </view>

              <view class="right">
                每周减重约
                <text>1</text>
                公斤
              </view>
            </view>

            <view class="line2">
              <text>适中模式：</text>
              <text>适合绝大多数人，你一也定可以的！ 加油！</text>
            </view>
          </view>
        </view>

        <view class="evaluation evaluation4" v-if="stepIndex === 3">
          <view class="habit-list">
            <view
              class="habit-item"
              :class="{ active: item.active }"
              @click="selectHabit(item)"
              v-for="item of habitList"
              :key="item.id"
            >
              <text>{{ item.text }}</text>
            </view>
          </view>
        </view>

        <view class="next" @click="next">{{ stepIndex > 2 ? '生成方案' : '继续' }}</view>
      </view>
    </view>
  </view>
</template>

<script>
import Calendar from '@/components/calendar.vue';

export default {
  name: 'evaluation',

  components: {
    Calendar,
  },

  data() {
    let ageList = [];

    for (let i = 1; i < 101; i++) {
      ageList.push(i);
    }

    let rulerLineList = [];

    for (let i = 100; i < 201; i++) {
      rulerLineList.push(i);
    }

    return {
      evaluationList: [
        {
          title: '请选择你的性别年龄',
          subTitle: '用来准确的计算你的BMI值',
        },
        {
          title: '请选择你的身高体重和目标体重',
          subTitle: '用来准确的计算你的BMI值',
        },
        {
          title: '预计达成时间',
          subTitle: '',
        },
        {
          title: '请选择你的运动量',
          subTitle: '用来准确的计算你的BMI值',
        },
      ],
      stepIndex: 0,
      gender: null,
      age: [17],
      ageList: ageList,
      rulerLineList: rulerLineList,
      habitList: [
        {
          id: 0,
          text: '几乎不动，长时间久坐',
          active: true,
        },
        {
          id: 1,
          text: '偶尔活动，每周1-3天',
          active: false,
        },
        {
          id: 2,
          text: '经常活动，每周3-5天',
          active: false,
        },
        {
          id: 3,
          text: '活动频繁，每周6-7天',
          active: false,
        },
        {
          id: 4,
          text: '高强度活动，长时间体力工作',
          active: false,
        },
      ],
    };
  },

  onLoad() {},

  methods: {
    back() {
      uni.navigateBack();
    },

    next() {
      if (this.stepIndex > 2) {
        // TODO 生成方案
        return;
      }

      this.stepIndex += 1;
    },

    selectHabit(item) {
      this.habitList.forEach((x) => (x.active = false));
      item.active = true;
    },
  },
};
</script>

<style lang="scss">
page {
  height: 100%;
}
</style>

<style scoped lang="scss">
.evaluation-page {
  height: 100%;
  background: linear-gradient(to bottom, #ccffee, #fbffff, #f6f7fb);
  padding-bottom: 40rpx;
  display: flex;
  flex-direction: column;

  .banner {
    padding: calc(var(--status-bar-height) + 60rpx) 0 70rpx;
    flex-shrink: 0;

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

  .evaluation-container {
    padding: 0 30rpx;
    flex-grow: 1;
    overflow: hidden;

    .evaluation-box {
      height: 100%;
      padding: 52rpx 30rpx;
      background: #ffffff;
      border-radius: 8rpx;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .tip {
        flex-shrink: 0;
        font-size: 24rpx;
        color: #999999;
        margin-bottom: 20rpx;
      }

      .progress {
        flex-shrink: 0;
        width: 100%;
        height: 15rpx;
        background: #f5f6fa;
        border-radius: 8rpx;
        position: relative;
        margin-bottom: 48rpx;

        text {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          background: #0abf92;
          border-radius: 8rpx;
        }
      }

      .evaluation-title {
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30rpx;

        text {
          &:nth-child(1) {
            font-weight: 500;
            font-size: 32rpx;
            color: #333333;
          }

          &:nth-child(2) {
            font-size: 24rpx;
            color: #999999;
          }
        }
      }

      .evaluation {
        flex-grow: 1;
      }

      .evaluation1 {
        margin-top: 58rpx;

        .gender {
          display: flex;
          align-items: center;
          gap: 110rpx;
          margin-bottom: 100rpx;

          .gender-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20rpx;
            position: relative;

            image {
              width: 148rpx;
              border-radius: 50%;
            }

            text {
              font-size: 24rpx;
              color: #333333;
            }

            .checked {
              position: absolute;
              left: 0;
              width: 148rpx;
              top: 0;
              height: 148rpx;
              background: #00000080;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        }

        picker-view {
          height: 300rpx;

          .age-item {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30rpx;
            color: #111111;
          }
        }
      }

      .evaluation2 {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .evaluation-item {
          .evaluation-item-title {
            font-weight: 500;
            font-size: 26rpx;
            color: #1a1a1a;
            text-align: center;
            margin-bottom: 18rpx;
          }

          .evaluation-item-value {
            font-weight: 500;
            font-size: 30rpx;
            color: #333333;
            text-align: center;
            margin-bottom: 20rpx;

            .unit {
              color: #666666;
              font-size: 24rpx;
              margin-left: 4rpx;
            }
          }

          .ruler-line {
            padding: 0 30rpx 50rpx;
            display: flex;
            gap: 10rpx;
            width: 100%;
            overflow: auto;

            &::-webkit-scrollbar {
              display: none;
            }

            .ruler-line-item {
              flex-shrink: 0;
              width: 2rpx;
              height: 34rpx;
              background: #0abf9240;
              border-radius: 2rpx;
              position: relative;

              &.int-line {
                width: 4rpx;
                height: 66rpx;
                background: #0abf92aa;
              }

              text {
                position: absolute;
                left: 0;
                right: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                bottom: -40rpx;
                font-size: 22rpx;
                color: #666666;
              }
            }
          }
        }
      }

      .evaluation3 {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .expected {
          background: #ffffff;
          border-radius: 25rpx;
          border: 2px solid #0abf92;
          padding: 32rpx;

          .line1 {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-weight: 500;
            font-size: 28rpx;
            color: #1a1a1a;
            margin-bottom: 50rpx;

            view {
              display: flex;
              align-items: center;

              text {
                width: 78rpx;
                height: 60rpx;
                background: #0abf92;
                border-radius: 10rpx;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 48rpx;
                color: #ffffff;
                margin: 0 10rpx;
              }
            }
          }

          .line2 {
            color: #1a1a1a;
            font-size: 28rpx;

            text {
              &:nth-child(1) {
                font-weight: 500;
              }
            }
          }
        }
      }

      .evaluation4 {
        margin-top: 66rpx;

        .habit-list {
          display: flex;
          flex-direction: column;
          gap: 20rpx;

          .habit-item {
            width: 592rpx;
            height: 103rpx;
            background: #f6f6f8;
            border-radius: 20rpx;
            font-size: 32rpx;
            color: #555555;
            border: 6rpx solid transparent;
            padding-left: 40rpx;
            display: flex;
            align-items: center;

            &.active {
              background: #f1fffc;
              color: #1a1a1a;
              border: 6rpx solid #0abf92;
            }
          }
        }
      }

      .next {
        flex-shrink: 0;
        width: 592rpx;
        height: 103rpx;
        background: #0abf92;
        border-radius: 52rpx;
        font-weight: 500;
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
