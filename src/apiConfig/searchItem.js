import { axiosClient } from "./config";

const getItems = (query) => {
  const position = query.indexOf("=");
  const parseString = query.substring(position)
  return axiosClient.get(`${parseString}`);
}

export default getItems;