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

    <view class="data-charts">
      <view class="chart-item">
        <view class="chart-title">热量摄取和运动量</view>

        <view class="chart-box">
          <l-echart ref="chart1Ref" @finished="init1" />
        </view>
      </view>

      <view class="chart-item">
        <view class="chart-title">热量缺口</view>

        <view class="chart-box">
          <l-echart ref="chart2Ref" @finished="init2" />
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import * as echarts from '@/uni_modules/lime-echart/static/echarts.min';

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
      option1: {
        title: {
          show: false,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: {
          bottom: 0,
        },
        grid: {
          top: '5%',
          left: '0%',
          right: '0%',
          bottom: '10%',
          containLabel: true,
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
        },
        xAxis: {
          type: 'category',
          data: ['05-12', '05-13', '05-14', '05-15', '05-16', '05-17', '05-18'],
        },
        series: [
          {
            name: '热量摄取',
            type: 'bar',
            data: [100, 100, 100, 100, 100, 100, 100],
            color: '#FFA537',
          },
          {
            name: '运动量',
            type: 'bar',
            data: [100, 100, 100, 100, 100, 100, 100],
            color: '#0ABF92',
          },
        ],
      },
      option2: {
        title: {
          show: false,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: {
          bottom: 0,
        },
        grid: {
          top: '5%',
          left: '0%',
          right: '0%',
          bottom: '10%',
          containLabel: true,
        },
        yAxis: {
          type: 'value',
          position: 'top',
          splitLine: {
            lineStyle: {
              type: 'solid',
            },
          },
        },
        xAxis: {
          type: 'category',
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          data: ['05-12', '05-13', '05-14', '05-15', '05-16', '05-17', '05-17'],
        },
        series: [
          {
            type: 'bar',
            stack: 'Total',
            label: {
              show: true,
              formatter: '{b}',
            },
            color: '#0ABF92',
            data: [
              { value: -200 },
              { value: -300 },
              { value: 100 },
              { value: 400 },
              { value: -150 },
              { value: 180 },
              { value: -320 },
            ],
          },
        ],
      },
    };
  },

  onLoad() {
    this.selectedTime = this.timeList[0];
  },

  methods: {
    back() {
      uni.navigateBack();
    },

    async init1() {
      // chart 图表实例不能存在data里
      const chart = await this.$refs.chart1Ref.init(echarts);
      chart.setOption(this.option1);
    },

    async init2() {
      // chart 图表实例不能存在data里
      const chart = await this.$refs.chart2Ref.init(echarts);
      chart.setOption(this.option2);
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
        background: #0abf92;
        border-radius: 6rpx;
      }
    }
  }

  .data-charts {
    padding: 40rpx 30rpx;

    .chart-item {
      margin-bottom: 50rpx;

      .chart-title {
        font-weight: 500;
        font-size: 30rpx;
        color: #1a1a1a;
        margin-bottom: 28rpx;
      }

      .chart-box {
        background: #ffffff;
        border-radius: 20rpx;
        padding: 40rpx 20rpx 30rpx;
      }
    }
  }
}
</style>
