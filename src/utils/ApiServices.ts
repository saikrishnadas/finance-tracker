import {InputLoginProps} from "../pages/Login"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../store/index';

export const ApiService = async (endpointUrl:string,method:string,data?:any,token?:any) => {
    let fetchResponse = await fetch(`${process.env.REACT_APP_LOCAL_URL}${endpointUrl}`, {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    let parsedResponse = await fetchResponse.json();
    if(fetchResponse.ok){
        console.log(parsedResponse)
        return parsedResponse
    }else{
        throw parsedResponse.error
    }

}


export const getCsrfToken = async (endpointUrl:string,method:string) => {
    let fetchResponse = await fetch(`${process.env.REACT_APP_LOCAL_URL}${endpointUrl}`, {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
    })
    let parsedResponse = fetchResponse.json();
    return parsedResponse

}

export const ApiServicePost = async (endpointUrl:string,method:string,data?:any,token?:any) => {
    let fetchResponse = await fetch(`${process.env.REACT_APP_LOCAL_URL}${endpointUrl}`, {
        method: method,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    })
    let parsedResponse = await fetchResponse.json();
    if(fetchResponse.ok){
        console.log(parsedResponse)
        return parsedResponse
    }else{
        throw parsedResponse.error
    }

}