<template>
  <custom-dialog ref="exchangeDialog" title="兑换记录" :shop-close="false">
    <view class="content">
      <view class="recode-list">
        <view class="recode-item" v-for="item of exchangeList" :key="item.id">
          <text>{{ item.name }}</text>
          <text>{{ item.time }}</text>
        </view>
      </view>

      <view class="btn">
        <text @click="close">知道了</text>
      </view>
    </view>
  </custom-dialog>
</template>

<script>
import customDialog from '@/components/customDialog.vue';

export default {
  name: 'exchangeDialog',

  components: {
    customDialog,
  },

  data() {
    return {
      exchangeList: [
        {
          id: 1,
          name: '3天会员',
          points: 10,
          time: '2025/05/25',
        },
        {
          id: 2,
          name: '7天会员',
          points: 30,
          time: '2025/05/25',
        },
        {
          id: 3,
          name: '15天会员',
          points: 10,
          time: '2025/05/25',
        },
        {
          id: 4,
          name: '30天会员',
          points: 10,
          time: '2025/05/25',
        },
      ],
    };
  },

  methods: {
    open() {
      this.$refs.exchangeDialog.open();
    },

    close() {
      this.$refs.exchangeDialog.close();
    },
  },
};
</script>

<style scoped lang="scss">
.content {
  .recode-list {
    display: flex;
    flex-direction: column;
    margin-bottom: 50rpx;

    .recode-item {
      display: flex;
      align-items: center;

      &:not(:last-child) {
        padding-bottom: 22rpx;
        margin-bottom: 22rpx;
        border-bottom: 1px solid #f5f5f5;
      }

      text {
        &:nth-child(1) {
          font-size: 24rpx;
          color: #111111;
          flex-grow: 1;
        }

        &:nth-child(2) {
          font-size: 22rpx;
          color: #999999;
        }
      }
    }
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;

    text {
      width: 284rpx;
      height: 80rpx;
      background: #0abf92;
      color: #ffffff;
      border-radius: 40rpx;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
