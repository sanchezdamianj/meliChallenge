import axios from "axios";

const basePath = 'https://api.mercadolibre.com';

export const axiosClient = axios.create({
    baseURL: `${basePath}/sites/MLA/search?q=:`
});

export const axiosClientDetail = axios.create({
    baseURL: `${basePath}/items`
});


