import { axios } from '../utils/request'

const API = 'http://localhost:3000'

export const getActivitys = (params: any) =>
    axios.get(API + '/activity', { params })

export default {
    getActivitys,
}
