import axios from 'axios'

let cancelToken

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  // withCredentials: true
})

instance.interceptors.response.use((response) => {
  // Thrown error for request with OK status code
  const { data } = response
  return data
})

export function getDataApi(url, params, methodName, ms) {
  if (typeof cancelToken != typeof undefined) {
    cancelToken.cancel('Request is canceled!')
  }
  cancelToken = instance.CancelToken.source()
  const config = {
    method: methodName,
    params: params,
    url: url,
    timeout: 5000,
    cancelToken: cancelToken.token,
  }

  //Delay return data Api
  if (ms) {
    return new Promise((resolve, reject) => {
      instance(config)
        .then((result) => {
          setTimeout(() => {
            resolve(result)
          }, ms)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
  return instance(config)
}

export default instance
