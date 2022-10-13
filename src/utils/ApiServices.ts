import {InputLoginProps} from "../pages/Login"

export const ApiService = async (endpointUrl:string,method:string,data?:any,csrfTokenState?:any) => {
    let fetchResponse = await fetch(`${process.env.REACT_APP_LOCAL_URL}${endpointUrl}`, {
        method: method,
        headers: {
            "Content-Type": "application/json",
            // "xsrf-token": csrfTokenState,
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