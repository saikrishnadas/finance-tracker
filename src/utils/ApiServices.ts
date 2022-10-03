const ApiService = async (endpointUrl:any,method:any) => {
    let fetchResponse = await fetch(`${process.env.REACT_APP_LOCAL_URL}${endpointUrl}`, {
        method: method,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        credentials: "include",
        mode: 'cors'
    })
    let parsedResponse = fetchResponse.json();
    return parsedResponse

}

export default ApiService;