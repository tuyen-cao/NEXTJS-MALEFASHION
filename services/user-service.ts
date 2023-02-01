import { LoginPayload } from '@/models'
import { API_CONSTANTS } from 'constants/api.constant'
import { REQUEST_METHOD } from 'constants/methodRequest.constant'
import { request } from 'utilities/axiosUtils'


export const login = async (payload: LoginPayload) => {
    return request({
        url: API_CONSTANTS.API_LOGIN,
        method: REQUEST_METHOD.POST,
        data: payload
    })
}
