import axios from "axios";
import { accountService } from "./account_service";

const Axios = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
});

Axios.interceptors.request.use((request) => {
  if (accountService.isLogged()) {
    request.headers.Authorization = "Bearer " + accountService.getToken();
  }
  return request;
});

export default Axios;
