import { axiosInstance } from "../config/axios-config";
import { cLog } from "../utils/c-log";


export const getCatList = async (): Promise<CatDataType[]> => {
    const response = await axiosInstance.get("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&page=0&limit=20");

    return response.data
}