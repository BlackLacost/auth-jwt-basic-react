import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.HEROKU_APP_NAME
    ? `${process.env.HEROKU_APP_NAME}.herokuapp.com/api`
    : process.env.REACT_APP_API_URL,
})
