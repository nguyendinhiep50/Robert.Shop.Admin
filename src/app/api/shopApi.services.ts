import axios from "axios";
import {robertShop} from '@/app/api/robertShop.api'
import { readToken } from "@/service/localStorage.service";

axios.defaults.headers.common = {
    Authorization: `Bearer ${readToken()}`,
};

const robertShopApi = new robertShop("https://localhost:7173");

const apiServices = {
    robertShopApi
}

export default apiServices;

export const axiosSetAccessTokenMiddleware = () => {
    axios.defaults.headers.common = {
        Authorization: `Bearer ${readToken()}`,
    };
    apiServices.robertShopApi = new robertShop("https://localhost:7173");
}