import { API_CONSTANTS } from 'constants/api.constant'
import { REQUEST_METHOD } from 'constants/methodRequest.constant'
import { request } from 'utilities/axiosUtils'


export const fetchProduct = async (urlparams: string = '') => {
    const url = urlparams !== '' ? `?${urlparams}` : ''
    return request({
        url: API_CONSTANTS.API_GET_PRODUCTS + url,
        method: REQUEST_METHOD.GET,
    })
}

export const fetchProductDetail = async (productId: number) => {
    return request({
        url: API_CONSTANTS.API_GET_PRODUCT_DETAIL + productId,
        method: REQUEST_METHOD.GET,
    })
}

