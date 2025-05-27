<template>
  <view class="my-page">
    <view class="banner">
      <view class="title">个人中心</view>

      <view class="info">
        <view class="left">
          <view class="username">
            <text class="name">我不吃香菜</text>
            <image
              mode="widthFix"
              src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/recode/edit-icon.png"
            />
            <text class="edit" @click="jump('/pages/userCenter/userCenter')">编辑资料</text>
          </view>

          <view class="time">会员到期：2025-06-30</view>
        </view>

        <view class="right">
          <image mode="widthFix" src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/recode/head01.png" />
        </view>
      </view>

      <view class="vip-icon" @click="jump('/pages/vip/vip')">
        <image mode="widthFix" src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/recode/vip-icon.png" />
      </view>

      <view class="data">
        <view class="item" @click="jump('/pages/dataStatistics/dataStatistics')">
          <view class="data-title">数据统计</view>
          <view class="number">
            <text>1454</text>
            <text>千卡</text>
          </view>
          <view class="tip">近7天的热量缺口数据</view>

          <view class="arrow">
            <uni-icons color="#C0C0C0" type="right" size="14"></uni-icons>
          </view>
        </view>

        <view class="item" @click="jump('/pages/weightData/weightData')">
          <view class="data-title">体重数据</view>
          <view class="number">
            <text>5.00</text>
            <text>公斤</text>
          </view>
          <view class="tip">累计减重（公斤）</view>

          <view class="arrow">
            <uni-icons color="#C0C0C0" type="right" size="14"></uni-icons>
          </view>
        </view>
      </view>
    </view>

    <view class="nav-container">
      <view class="nav">
        <view class="nav-item">
          <image
            mode="widthFix"
            src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/recode/nav-icon01.png"
          />
          <text class="nav-title">我的数据</text>
          <uni-icons color="#999999" type="right" size="14"></uni-icons>
        </view>

        <view class="nav-item" @click="jump('/pages/dataReport/dataReport')">
          <image
            mode="widthFix"
            src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/recode/nav-icon02.png"
          />
          <text class="nav-title">数据报告</text>
          <uni-icons color="#999999" type="right" size="14"></uni-icons>
        </view>

        <view class="nav-item">
          <image
            mode="widthFix"
            src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/recode/nav-icon03.png"
          />
          <text class="nav-title">提醒设置</text>
          <uni-icons color="#999999" type="right" size="14"></uni-icons>
        </view>

        <view class="nav-item" @click="showRedemptionDialog">
          <image
            mode="widthFix"
            src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/recode/nav-icon04.png"
          />
          <text class="nav-title">兑换码</text>
          <uni-icons color="#999999" type="right" size="14"></uni-icons>
        </view>

        <view class="nav-item">
          <image
            mode="widthFix"
            src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/recode/nav-icon05.png"
          />
          <text class="nav-title">意见和反馈</text>
          <uni-icons color="#999999" type="right" size="14"></uni-icons>
        </view>

        <view class="nav-item">
          <image
            mode="widthFix"
            src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/recode/nav-icon06.png"
          />
          <text class="nav-title">联系客服</text>
          <uni-icons color="#999999" type="right" size="14"></uni-icons>
        </view>
      </view>
    </view>

    <redemption-dialog ref="redemptionDialog" />
  </view>
</template>

<script>
import RedemptionDialog from '@/pages/my/redemptionDialog.vue';

export default {
  name: 'myPage',

  components: {
    RedemptionDialog,
  },

  methods: {
    jump(url) {
      uni.navigateTo({
        url: url,
      });
    },

    showRedemptionDialog() {
      this.$refs.redemptionDialog.open();
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
.my-page {
  padding-bottom: 60rpx;

  .banner {
    padding: calc(var(--status-bar-height) + 60rpx) 30rpx 22rpx;
    background: linear-gradient(180deg, rgba(182, 239, 63, 0.9) 0%, rgba(243, 255, 217, 0.95) 54%, #f6f7fb 100%);

    .title {
      text-align: center;
      color: #1a1a1a;
      font-size: 32rpx;
      font-weight: bold;
      margin-bottom: 64rpx;
    }

    .info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30rpx;

      .left {
        display: flex;
        flex-direction: column;
        gap: 32rpx;

        .username {
          display: flex;
          align-items: center;

          .name {
            font-weight: bold;
            font-size: 32rpx;
            color: #1a1a1a;
          }

          image {
            width: 26rpx;
            margin: 0 8rpx 0 24rpx;
          }

          .edit {
            font-size: 22rpx;
            color: #555555;
          }
        }

        .time {
          font-size: 26rpx;
          color: #1a1a1a;
        }
      }

      .right {
        image {
          width: 135rpx;
          border-radius: 50%;
          display: block;
        }
      }
    }

    .vip-icon {
      width: 100%;
      margin-bottom: 20rpx;

      image {
        width: 100%;
      }
    }

    .data {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .item {
        width: 335rpx;
        height: 160rpx;
        background: #ffffff;
        border-radius: 25rpx;
        padding: 20rpx 30rpx;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;

        .data-title {
          font-size: 28rpx;
          color: #1a1a1a;
          font-weight: 500;
        }

        .number {
          display: flex;
          align-items: center;

          text {
            &:nth-child(1) {
              font-size: 34rpx;
              color: #78f788;
              margin-right: 6rpx;
            }

            &:nth-child(2) {
              font-size: 26rpx;
              color: #333333;
            }
          }
        }

        .tip {
          font-size: 22rpx;
          color: #999999;
        }

        .arrow {
          position: absolute;
          top: 26rpx;
          right: 16rpx;
        }
      }
    }
  }

  .nav-container {
    padding: 0 30rpx;

    .nav {
      background: #ffffff;
      border-radius: 20rpx;
      padding: 40rpx 30rpx;
      display: flex;
      flex-direction: column;

      .nav-item {
        display: flex;
        align-items: center;

        &:not(:last-child) {
          padding-bottom: 34rpx;
          margin-bottom: 34rpx;
          border-bottom: 2rpx solid #f2f2f2;
        }

        image {
          width: 60rpx;
          margin-right: 20rpx;
        }

        .nav-title {
          font-weight: 500;
          font-size: 26rpx;
          color: #1a1a1a;
          flex-grow: 1;
        }
      }
    }
  }
}
</style>
