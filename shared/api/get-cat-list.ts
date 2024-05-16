import { CatDataType } from "shared/types/cat-type";
import { axiosInstance } from "../config/axios-config";



export const getCatList = async ({page = 0}:{page:number}): Promise<CatDataType[]> => {
    const response = await axiosInstance.get(`https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&page=0&limit=20&page=${page}`);
    return response.data
}