import axios from 'axios'

const bffBaseUrl = 'https://localhost:8080'

const bff = axios.create({ baseURL: bffBaseUrl })

export default bff
