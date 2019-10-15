import axios from 'axios'

const ajax = function(url, data={}, method='GET') {
  return new Promise((resolve, reject) => {
    let promise
    if(method.toUpperCase() === 'GET') {
      promise = axios.get(url, {
        params: data
      })
    } else {
      promise = axios.post(url, {
        data: data
      })
    }
    promise 
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        console.log(error.msg)
      })
  })
}

export default ajax