import axios from 'axios'
import router from '../router'

const DOMAIN = 'http://localhost:3000'
const UNAUTHORIZED = 401
const onUnauthorized = () => {
    router.push("/login").catch(() => { });
}

const request = (method, url, data) => {
    return axios({
        method,
        url: DOMAIN + url,
        data
    }).then(result => result.data)
        .catch(result => {
            const { status } = result.response
            console.log("status", status);
            if (status === UNAUTHORIZED) onUnauthorized()
            throw result.response
        })
}

export const setAuthInHeader = token => {
    axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null;
}

const { token } = localStorage // localhost에서 token 정보 읽어오기 
if (token) setAuthInHeader(token) // ajax를 보내기 위한 request header에 token을 저장함


export const board = {
    fetch() {
        return request('get', '/boards')
    },
    create(title) {
        return request('post', '/boards', { title })
    }
}

export const auth = {
    login(email, password) {
        return request('post', '/login', { email, password })
    }
}