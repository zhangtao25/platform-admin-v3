import { axios } from '../utils/request'

// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

const CanaryAPI = 'https://www.api.rico.org.cn/platformapi-fat'

export const FindActivitys = (params: any) =>
    axios.post(CanaryAPI + '/FindActivitys', params)
