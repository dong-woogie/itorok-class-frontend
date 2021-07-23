import axios from 'axios'

const api = axios.create({
  withCredentials: true,
  baseURL: process.env.API_URI,
})

export const getAccessToken = async (cookie?: string) => {
  const { data } = await api.get<{ ok: boolean; accessToken?: string; error?: string }>('/api/refresh', {
    headers: {
      ...(cookie && { cookie }),
    },
  })
  return data
}

export default api
