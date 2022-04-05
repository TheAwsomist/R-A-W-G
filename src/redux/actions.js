export const calldata = (data) =>{
    return {
        type:"calldata",
        payload : data
    }
}

export const searchdata = (data) =>{
    return {
        type:"searchdata",
        payload : data
    }
}