import axios from 'axios'

// 创建 axios 实例
const service = axios.create({
    // api base_url
    timeout: 10000, // 请求超时时间
})

const err = (error: any) => {
    if (error.response) {
    }
    return Promise.reject(error)
}

// request interceptor
service.interceptors.request.use((config) => {
    if (localStorage.getItem('token')) {
        config.headers['Access-Token'] = localStorage.getItem('token')
    }

    return config
}, err)

// response interceptor
service.interceptors.response.use((response) => {
    // if (response.data && response.data.responseCode == 20001) {
    //   // console.log("没权限")
    //   // router.push({ path: '/404' })
    // }
    return response.data
}, err)

export { service as axios }
