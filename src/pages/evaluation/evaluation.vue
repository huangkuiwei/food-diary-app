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
        <view class="progress"></view>

        <view class="evaluation-title">
          <text>{{ evaluationList[selectIndex].title }}</text>
          <text>{{ evaluationList[selectIndex].subTitle }}</text>
        </view>

        <view class="evaluation evaluation1" v-if="selectIndex === 0">
          <view class="gender">
            <view class="gender-item">
              <image
                mode="widthFix"
                src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/recode/head01.png"
              />

              <text>男生</text>
            </view>

            <view class="gender-item">
              <image
                mode="widthFix"
                src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/recode/head01.png"
              />

              <text>女生</text>
            </view>
          </view>

          <picker-view :value="age">
            <picker-view-column>
              <view class="age-item" v-for="(item, index) in ageList" :key="index">{{ item }}岁</view>
            </picker-view-column>
          </picker-view>
        </view>

        <view class="evaluation evaluation2" v-if="selectIndex === 1"> </view>

        <view class="next" @click="next">继续</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'evaluation',

  data() {
    let ageList = [];

    for (let i = 1; i < 101; i++) {
      ageList.push(i);
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
      selectIndex: 0,
      age: [17],
      ageList: ageList,
    };
  },

  onLoad() {},

  methods: {
    back() {
      uni.navigateBack();
    },

    next() {
      this.selectIndex += 1;
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
    padding: calc(var(--status-bar-height) + 60rpx) 0 80rpx;
    flex-shrink: 0;
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
        margin-bottom: 48rpx;
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

            image {
              width: 148rpx;
              border-radius: 50%;
            }

            text {
              font-size: 24rpx;
              color: #333333;
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
