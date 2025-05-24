<template>
  <custom-dialog ref="ruleDialog" title="攒阳光规则">
    <view class="content">
      <view>1、每天完成签到和每日任务即可获得阳光，连续签到时间越长可获阳光越多；</view>
      <view>2、点击阳光获取额外阳光（阳光随机1-5份阳光不等）；</view>
      <view>3、积攒阳光累积到一定数量可让小树发芽成长开花；</view>
      <view>4、100阳光兑换1朵小花，10朵小花可以兑换相应会员期限；</view>
      <view
        >5、需注意的是，如果连续两天没有记录，健康树会呈现枯萎状态，并扣掉20点阳光；连续5天没有记录，健康树会更加枯萎，扣除40点积分；要是连续7天都没有记录，健康树会严重枯萎，之后每天扣20阳光;</view
      >
      <view>我们的初衷是让每一次记录都成为自身健康的保障，健康树旨在帮助大家养成良好的记录></view>
    </view>
  </custom-dialog>
</template>

<script>
import customDialog from '@/components/customDialog.vue';

export default {
  name: 'ruleDialog',

  components: {
    customDialog,
  },

  methods: {
    open() {
      this.$refs.ruleDialog.open();
    },

    close() {
      this.$refs.ruleDialog.close();
    },
  },
};
</script>

<style scoped lang="scss">
.content {
  view {
    margin-bottom: 20rpx;
    line-height: 32rpx;
    font-size: 24rpx;
    color: #111111;
    text-align: justify;
  }
}
</style>
