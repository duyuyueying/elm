import axios from 'axios'

const CODE_OK = 200

function get(url) {
  return function(params) {
    const result = axios.get(url, { params }).then((res) => {
      const { data, code } = res.data
      console.log(data, code)
      if (code === CODE_OK) {
        return data
      }
    })
    console.log(result)
    // result.then((data) => {
    //   console.log(data)
    // })
  }
}

export { get }
