import axios from 'axios'

function get(url) {
  return function(params) {
    axios.get(url, { params })
  }
}
