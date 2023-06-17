import axios from 'axios'
import { ASSESSMENT_API, BASE_URL, GET_CATEGORIES, GET_SUB_CATEGORIES, GET_PRODUCTS, JSON_EXTENSION } from '../../helpers/APIHelpers'




const fetchCategoryDataAPI = async () => {
    let response = await axios.get(`${BASE_URL}${ASSESSMENT_API}${GET_CATEGORIES}${JSON_EXTENSION}`)
    console.log(response.data, "response data category srvice")
    return response.data
}
const fetchSubCategoryDataAPI = async (Id) => {
    let response = await axios.get(`${BASE_URL}${ASSESSMENT_API}${GET_SUB_CATEGORIES}${Id}${JSON_EXTENSION}`)
    console.log(response.data, "response data category srvice")
    return response.data
}
const fetchProductDataAPI = async (Id) => {
    let response = await axios.get(`${BASE_URL}${ASSESSMENT_API}${GET_PRODUCTS}${Id}${JSON_EXTENSION}`)
    console.log(response.data, "response data category srvice")
    return response.data
}



const productService = {
    fetchCategoryDataAPI,
    fetchSubCategoryDataAPI,
    fetchProductDataAPI
}
export default productService