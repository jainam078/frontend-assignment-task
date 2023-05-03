import axios from "axios";
const Apiurl = "https://reqres.in/api/";

export const AuthApi = {
  login(data: any) {
    return axios.post(`${Apiurl}login`, data);
  },
};
