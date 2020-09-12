import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 9_XYSaMup16xoKCs6iQNCccI8gdv5dGKvvNGY2hveKM'
    }
})