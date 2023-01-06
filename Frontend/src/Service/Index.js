import axios from "axios";

export function authenticatedInstance({ params }) {
  const axiosCreate = axios.create({
    baseURL: '',
    params: params,
  });

  return axiosCreate;
}

export const callGetAPI = async ({ route, params }) => {
  const requestInstance = authenticatedInstance({ params });
  const result = await requestInstance.get(route);
  return result;
};
