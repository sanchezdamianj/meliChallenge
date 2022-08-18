import { axiosClientDetail } from "./config";

const getItemDetail = (itemId) => axiosClientDetail.get(`${itemId}`);

// const getItemDetailDescription = (itemId) => axiosClientDetail.get(`${itemId}/description`);

export default getItemDetail;
    // , getItemDetailDescription };