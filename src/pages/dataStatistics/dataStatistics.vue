<template>
  <view class="data-statistics-page">
    <view class="banner">
      <view class="title">
        <text>数据统计</text>

        <view class="back" @click="back">
          <uni-icons class="back" color="#1A1A1A" type="left" size="22"></uni-icons>
        </view>
      </view>
    </view>

    <view class="nav-tab">
      <view
        class="nav-item"
        :class="{ active: selectedTime.id === item.id }"
        v-for="item of timeList"
        :key="item.id"
        @click="selectedTime = item"
      >
        <text class="name">{{ item.name }}</text>
        <text class="highlight" v-if="selectedTime.id === item.id" />
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'dataStatistics',

  data() {
    return {
      timeList: [
        {
          id: 1,
          name: '本周',
          value: 1,
        },
        {
          id: 2,
          name: '本月',
          value: 1,
        },
        {
          id: 3,
          name: '近三个月',
          value: 1,
        },
        {
          id: 4,
          name: '近半年',
          value: 1,
        },
      ],
      selectedTime: {},
    };
  },

  onLoad() {
    this.selectedTime = this.timeList[0];
  },

  methods: {
    back() {
      uni.navigateBack();
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
.data-statistics-page {
  .banner {
    padding: calc(var(--status-bar-height) + 60rpx) 0 30rpx;
    background: #ffffff;

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

  .nav-tab {
    background: #ffffff;
    padding: 40rpx 56rpx 32rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .nav-item {
      position: relative;

      &.active {
        .name {
          color: #1a1a1a;
        }
      }

      .name {
        color: #999999;
        font-size: 30rpx;
        position: relative;
        z-index: 1;
      }

      .highlight {
        position: absolute;
        left: 0;
        right: 0;
        bottom: -2rpx;
        height: 12rpx;
        background: #78f788;
        border-radius: 6rpx;
      }
    }
  }
}
</style>
