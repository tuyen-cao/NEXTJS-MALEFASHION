import axios from 'axios'

const client = axios.create(
  {
    baseURL: process.env.SERVER_SERVICE_BASE_URL,
    timeout: 60000, //optional
    headers: {
      'Content-Type': 'application/json'
    }
  }
)

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = "Bearer token"
  //console.log(options)
  const onSuccess = (response: any) => response
  const onError = (error: Error) => {
    //optionally catch errors and ass additional logging here
    return error
  }
  return client(options).then(onSuccess).catch(onError)
}

