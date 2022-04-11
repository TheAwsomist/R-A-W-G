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

export const searchdataset = (data) =>{
    return {
        type:"searchdataset",
        payload : data
    }
}

export const clearsearch = () =>{
    return {
        type:"clearsearch"
    }
}