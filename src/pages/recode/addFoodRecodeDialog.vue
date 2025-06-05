<template>
  <uni-popup ref="addRecodePopup" type="bottom" :safe-area="false">
    <view class="add-recode-dialog">
      <view class="title">
        <text class="title-text">饮食记录</text>
        <uni-icons type="closeempty" color="#999999" size="24" @click="$refs.addRecodePopup.close()" />
      </view>

      <view class="input-box">
        <textarea :maxlength="-1" placeholder="都吃了些什么？ 例如：1个鸡蛋、1杯豆浆、2片土司" />
        <view class="tools">
          <image mode="widthFix" src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/recode/icon1.png" />
          <image mode="widthFix" src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/recode/icon3.png" />
          <image mode="widthFix" src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/recode/icon2.png" />
        </view>
      </view>

      <view class="recode-list">
        <view v-for="(item, index) in recodeList" :key="index">
          <image mode="heightFix" :src="item.icon" />
          <text class="text">{{ item.text }}</text>
          <text v-if="item.active" class="line"></text>
        </view>
      </view>

      <view class="submit">确定</view>
    </view>
  </uni-popup>
</template>

<script>
export default {
  name: 'addFoodRecodeDialog',

  data() {
    return {
      recodeList: [
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
          icon: 'https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/recode/food-icon5.png',
          text: '加餐',
          active: false,
        },
      ],
    };
  },

  methods: {
    open() {
      this.$refs.addRecodePopup.open();
    },

    close() {
      this.$refs.addRecodePopup.close();
    },
  },
};
</script>

<style scoped lang="scss">
.add-recode-dialog {
  width: 100%;
  background: #ffffff;
  border-radius: 30rpx 30rpx 0 0;
  padding: 40rpx 35rpx 46rpx;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24rpx;

    .title-text {
      font-weight: 500;
      font-size: 32rpx;
      color: #111111;
    }
  }

  .input-box {
    height: 540rpx;
    background: #f8f8f8;
    border-radius: 20rpx;
    display: flex;
    flex-direction: column;
    padding: 32rpx 20rpx 0;
    margin-bottom: 60rpx;

    textarea {
      width: 100%;
      flex-grow: 1;
      font-size: 26rpx;
      line-height: 40rpx;
    }

    .tools {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20rpx 10rpx;

      image {
        &:nth-child(1),
        &:nth-child(3) {
          width: 50rpx;
        }

        &:nth-child(2) {
          width: 90rpx;
        }
      }
    }
  }

  .recode-list {
    display: flex;
    justify-content: center;
    gap: 120rpx;
    margin-bottom: 52rpx;

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
        background: #0abf92;
        border-radius: 3rpx;
      }
    }
  }

  .submit {
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
</style>
