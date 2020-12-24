import { axios } from '../utils/request'

const API = 'http://localhost:3000'

const passwordLogin = (params: any) =>
    axios.post(API + '/user/passwordLogin', params)

const myInfo = () => axios.get(API + '/user/myInfo')

export default {
    passwordLogin,
    myInfo,
}
