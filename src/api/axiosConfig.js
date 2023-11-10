import axios from 'axios';
import {createContext, useContext, useEffect, useState} from "react";


export const instance =  axios.create({
    baseURL:'http://192.168.79.224:8080/',
    withCredentials: true,
});

instance.interceptors.request.use(
    (config) => {
        if (localStorage.getItem("token") !== "undefined" &&  localStorage.getItem("token") !== null && localStorage.getItem("token") !== "null") {
            config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
        }
        return config
    }
)


instance.interceptors.response.use(
    (resp)=>{
        if (resp.data["jwt-token"] !== null && resp.data["jwt-token"] !== undefined){

        localStorage.setItem("token", resp.data["jwt-token"]);
        localStorage.setItem("username", resp.data["username"]);
        }

        return resp;
    }
)
