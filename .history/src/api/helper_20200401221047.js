import axios from 'axios'

const CODE_OK = 200

function get(url) {
  return async function(params) {
    const result = await axios.get(url, { params }).then((res) => {
      const { data, code } = res
      if (code === CODE_OK) {
        return data
      }
    })
    // console.log(result)
    result.then((data) => {
      console.log(data)
    })
  }
}

export { get }
