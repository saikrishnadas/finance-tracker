import {InputLoginProps} from "../pages/Login"

export const ApiService = async (endpointUrl:string,method:string,data?:InputLoginProps,csrfTokenState?:any) => {
    let fetchResponse = await fetch(`${process.env.REACT_APP_LOCAL_URL}${endpointUrl}`, {
        method: method,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "xsrf-token": csrfTokenState,
        },
        credentials: "include",
        mode: 'cors',
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
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        credentials: "include",
        mode: 'cors',
    })
    let parsedResponse = fetchResponse.json();
    return parsedResponse

}