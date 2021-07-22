import axios from 'axios'

const api = axios.create({
  withCredentials: true,
  baseURL: process.env.API_URI,
})

export const getAccessToken = async () => {
  const { data } = await api.get<{ ok: boolean; accessToken?: string; error?: string }>('/api/refresh')
  return data
}

export default api
