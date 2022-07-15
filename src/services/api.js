import axios from 'axios'
export default () => {
  return axios.create({
    baseURL: '@/assets/json/comments.json',
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
}