import store from '@/store';

let baseApi = '/';

if (process.env.VUE_APP_PLATFORM === 'h5') {
  baseApi = process.env.VUE_APP_REQUEST_PROXY_BASE_API_URL;
} else {
  baseApi = process.env.VUE_APP_REQUEST_BASE_API_URL;
}

const $http = {
  post: (url, data, config = {}) => {
    let token = uni.getStorageSync('foodDiaryToken').value;

    if (!url.includes('http')) {
      url = baseApi + url;
    }

    return new Promise((resolve, reject) => {
      uni.request({
        method: 'POST',
        withCredentials: true,
        url: url,
        data,
        dataType: 'json',
        header: {
          token,
        },
        ...config,
        success: (res) => {
          if (config.responseType === 'blob') {
            resolve(res);
            return;
          }

          if (res.data.code === 0 || res.data.Code === 0) {
            resolve(res.data);
          } else {
            if (res.data.Code !== -100) {
              if (!config.hiddenErrorMessage) {
                uni.showToast({
                  title: res.data.msg || res.data.Msg,
                  icon: 'none',
                  mask: true,
                });
              }

              reject(res.data);
            } else {
              // 清除过期 token
              uni.removeStorageSync('foodDiaryToken');
              store.commit('app/_setIsLogin', false);
              reject(res.data);
            }
          }
        },
        fail: () => {
          if (!config.hiddenErrorMessage) {
            uni.showToast({
              title: '接口异常',
              icon: 'none',
              mask: true,
            });
          }

          reject();
        },
      });
    });
  },

  get: (url, data, config = {}) => {
    let token = uni.getStorageSync('foodDiaryToken').value;

    if (!url.includes('http')) {
      url = baseApi + url;
    }

    return new Promise((resolve, reject) => {
      uni.request({
        method: 'GET',
        withCredentials: true,
        url: url,
        data,
        dataType: 'json',
        header: {
          token,
        },
        ...config,
        success: (res) => {
          if (config.responseType === 'blob') {
            resolve(res);
            return;
          }

          if (res.data.code === 0 || res.data.Code === 0) {
            resolve(res.data);
          } else {
            if (res.data.Code !== -100) {
              if (!config.hiddenErrorMessage) {
                uni.showToast({
                  title: res.data.msg || res.data.Msg,
                  icon: 'none',
                  mask: true,
                });
              }

              reject(res.data);
            } else {
              // 清除过期 token
              uni.removeStorageSync('foodDiaryToken');
              store.commit('app/_setIsLogin', false);
              reject(res.data);
            }
          }
        },
        fail: () => {
          if (!config.hiddenErrorMessage) {
            uni.showToast({
              title: '接口异常',
              icon: 'none',
              mask: true,
            });
          }

          reject();
        },
      });
    });
  },
};

export default $http;
