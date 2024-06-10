import { base_url } from "./baseUrl";
import { commonRequest } from "./commonStructure";

//add movies
export const addMovieApi=async(bodyData)=>{
    return await commonRequest('POST',`${base_url}/movies`,bodyData)
}

//access movies
export const accessMovieApi=async()=>{
    return await commonRequest('GET',`${base_url}/movies`,{})
}

//delete movies
export const deleteMovieApi=async(id)=>{
    return await commonRequest('DELETE',`${base_url}/movies/${id}`,{})
}