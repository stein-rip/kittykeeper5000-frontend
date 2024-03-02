import axios from "axios";
import { Cat } from "../models/Cat";


const baseURL: string = "https://api.thecatapi.com/v1";
const key: string = process.env.CAT_API_KEY || "";

export const getCats = async (): Promise<Cat[]> => {
  const response = await axios.get(`${baseURL}/images/search`, {
    params: { api_key: key, limit: 1}
  });
  return response.data; // Return directly the array of Cat objects
};

export const getCatByIdOrName = async (
  id: string | null,
  name: string | null
): Promise<Cat[]> => {
  const params = {
    api_key: key,
    ...(id && { id }),
    ...(name && { name })
  };
  const response = await axios.get(`${baseURL}/images/search`, { params });
  return response.data;
};
