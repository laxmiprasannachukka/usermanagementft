import axios from 'axios';

export function Postuserdata(data){
    return axios.post(`https://userregistration12.herokuapp.com/users`,data)
}

export function Getuserdata(){
    return axios.get(`https://userregistration12.herokuapp.com/users`)
}

export function Getuserbyid(id){
    return axios.get(`https://userregistration12.herokuapp.com/users/${id}`)
}

export function Deleteuserbyid(id){
    return axios.delete(`https://userregistration12.herokuapp.com/users/${id}`)
}

export function Updateuserbyid(id,data){
    return axios.put(`https://userregistration12.herokuapp.com/users/${id}`,data)
}

