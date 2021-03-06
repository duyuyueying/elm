import axios from 'axios'

const CODE_OK = 200

function get(url) {
  return function(params) {
    axios.get(url, { params }).then((res) => {
      const { data, code } = res
      if (code === CODE_OK) {
        return data
      }
    })
  }
}

export { get }
