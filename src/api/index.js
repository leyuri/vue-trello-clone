import axios from 'axios'
import router from '../router'

const DOMAIN = 'http://localhost:3000'
const UNAUTHORIZED = 401
const NOTFOUND = 404
const onNotfound = () => {
    router.push(`/`)
}
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
            else if (status === NOTFOUND) {
                onNotfound()
            }
            throw result.response
        })
}

export const setAuthInHeader = token => {
    axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null;
}

export const auth = {
    login(email, password) {
        return request('post', '/login', { email, password })
    }
}

export const board = {
    fetch(id) {
        return id ? request('get', `/boards/${id}`) : request('get', '/boards')
    },
    create(title) {
        return request('post', '/boards', { title })
    },
    destory(id) {
        return request('delete', `/boards/${id}`)
    },
    update(id, payload) {
        return request('put', `/boards/${id}`, payload)
    }
}

export const list = {
    create(payload) {
        return request('post', '/lists', payload)
    },
    update(id, payload) {
        return request('put', `/lists/${id}`, payload)
    },
    destory(id) {
        return request('delete', `/lists/${id}`)
    },
}


export const card = {
    create(title, listId, pos) {
        return request('post', '/cards', { title, listId, pos })
    },
    fetch(id) {
        return request('get', `/cards/${id}`)
    },
    update(id, payload) {
        return request('put', `/cards/${id}`, payload)
    },
    destory(id) {
        return request('delete', `/cards/${id}`)
    }
}