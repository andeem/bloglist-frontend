import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = (newToken) => {
  console.log(newToken)
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const addBlog = async (blog) => {
  const config = {
    headers: { 'Authorization': token }
  }

  const request = await axios.post(baseUrl, blog, config)
  return request.data
}

export default { getAll, addBlog, setToken }