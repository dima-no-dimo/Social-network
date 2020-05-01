import * as axios from 'axios'

const profileData = axios.create({
    baseURL: '/Profile/',
});
const messageData = axios.create({
    baseURL: '/Dialogs/',
});
const usersEndPoint = axios.create({
    baseURL: '/Users/'
});


export function getUserInfo(id, headers) {
    return profileData.get(id, {headers}).then(res => res.data)
}

export function newPost(body, headers) {
    return profileData.put('', body, {headers}).then(res => res.data)
}

export function deletePost(id, postId, headers) {
    return profileData.put(`delete/${id}`, {postId}, {headers}).then(res => res.data)
}

export function getMessageData(id, headers) {
    return messageData.get(id, {headers}).then(res => res.data)
}
export function createMessage(id_toWho, body) {
    return messageData.put(id_toWho, body).then(res => res.data)
}

export function login_registration_req(endpoint, data) {
    return axios.post(`/Users/${endpoint}`, data).then(res => res.data)
}

export function getUsers(query) {
    return usersEndPoint.get(`${query.id}?page=${query.page}&size=${query.size}`).then(res => res.data)
}

export  function subscribeUser(data) {
    return usersEndPoint.put(`${data.id}?toWho=${data.toWho}`, {subscribe: data.subscribe}).then(res => res.data)
}