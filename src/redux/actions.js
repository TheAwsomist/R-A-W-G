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

export const searchinputchange = (data) =>{
    return {
        type:"searchinputchange",
        payload : data
    }
}