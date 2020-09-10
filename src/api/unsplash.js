import axios from 'axios'

const key = '9_XYSaMup16xoKCs6iQNCccI8gdv5dGKvvNGY2hveKM'
axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${key}`
    }
})

export default key