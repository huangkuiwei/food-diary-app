<template>
  <uni-popup ref="addRecodePopup" type="bottom" :safe-area="false">
    <view class="add-recode-dialog">
      <view class="title">
        <text class="title-text">运动记录</text>
        <uni-icons type="closeempty" color="#999999" size="24" @click="$refs.addRecodePopup.close()" />
      </view>

      <view class="input-box">
        <textarea :maxlength="-1" placeholder="做了些什么运用？ 例如：跑步半小时、呼啦圈10分钟、平板支撑5分钟" />
        <view class="tools">
          <image mode="widthFix" src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/recode/icon1.png" />
          <image mode="widthFix" src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/recode/icon3.png" />
          <image mode="widthFix" src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/recode/icon2.png" />
        </view>
      </view>

      <view class="submit">确定</view>
    </view>
  </uni-popup>
</template>

<script>
export default {
  name: 'addMotionRecodeDialog',

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
