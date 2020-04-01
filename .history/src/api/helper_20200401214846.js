import axios from 'axios'

function get(url) {
  return function(params) {
    axios.get(url, { params }).then((res) => {
      const { data, code } = res
      if (code === 200) {
        return data
      }
    })
  }
}

export { get }
