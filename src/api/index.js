import axios from 'axios';
import ecode from './ecode';
import config from '../config';

// 取消请求
const CancelToken = axios.CancelToken

//  判断传入参数的类型，以字符串的形式返回

const dataType = (obj) => {
  if (obj === null) return 'Null';
  if (obj === undefined) return 'Undefined';
  return Object.prototype.toString.call(obj).slice(8, -1);
};

// 处理对象参数值，排除对象参数值为""、null、undefined,并返回一个新对象
const dealObjectValue = (obj) => {
  const param = {};
  if (obj === null || obj === undefined || obj === '') return param;
  Object.keys(obj).forEach((item, index) => {
    if (dataType(obj[item]) === 'Object') {
      param[item] = dealObjectValue(obj[item]);
    } else if (obj[item] !== null && obj[item] !== undefined && obj[item] !== '') {
      param[item] = obj[item];
    }
  })
  return param;
};

// 新建一个 axios 实例
const instance = axios.create({
  baseURL: config.apiHost,
  withCredentials: true,
});

// 设置默认请求头
instance.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest'
}

// 请求超时的时间限制
instance.defaults.timeout = 20000
// 开始设置请求 发起的拦截处理
// request 代表发起请求的参数的实体
instance.interceptors.request.use((request) => {
  // 得到参数中的 requestName 字段，用于决定下次发起请求，取消对应的 相同字段的请求
  // 如果没有 requestName 就默认添加一个 不同的时间戳
  let requestName
  if (request.method === 'post') {
    if (request.data && request.data.requestName) {
      requestName = request.data.requestName
    } else {
      requestName = new Date().getTime()
    }
  } else if (request.method !== 'post') {
    if (request.params && request.params.requestName) {
      requestName = request.params.requestName
    } else {
      requestName = new Date().getTime()
    }
  }
  // 判断，如果这里拿到的参数中的 requestName 在上一次请求中已经存在，就取消上一次的请求
  if (requestName) {
    if (axios[requestName] && axios[requestName].cancel) {
      axios[requestName].cancel()
    }
    request.cancelToken = new CancelToken((c) => {
      axios[requestName] = {}
      axios[requestName].cancel = c
    })
  }
  // 设置默认选项
  const accessToken = request.params && 'access_token' in request.params ? request.params.access_token : config.getToken();
  const axiosRequest = {
    ...request,
    params: {
      ...request.params,
      access_token: accessToken
    },
  };
  // 排除对象参数值为""、null、undefined
  axiosRequest.params = dealObjectValue(axiosRequest.params)
  return axiosRequest
}, (error) => Promise.reject(error));

// 请求到结果的拦截处理
instance.interceptors.response.use((response) => {
  if (response.data.code !== 0) {
    // config.removeToken();
    // console.log('报错了报错了')
  }
  // 返回请求正确的结果
  return response
}, (error) => {
  // 错误的请求结果处理，这里的代码根据后台的状态码来决定错误的输出信息
  if (error && error.response) {
    // config.removeToken();
    error.message = error.response.status in ecode ? `连接错误${error.response.status}` : ecode[error.response.status]
  } else {
    error.message = '连接到服务器失败';
  }
  return Promise.reject(error.message)
})

// 用Promise处理请求接口
const promiseInstance = {
  get: (url, params) => (new Promise((resolve, reject) => {
    instance.get(url, params).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })),

  post: (url, params) => (new Promise((resolve, reject) => {
    instance.get(url, params).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })),

  instance,
}

export default promiseInstance;
