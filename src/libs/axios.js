import axios from "axios";

const API_URL = "https://uniontracking-3.frogi.dev/api/";

export const http = axios.create({
  baseURL: API_URL
});

export const httpAuth = (token) => axios.create({
    baseURL: API_URL,
    headers: {
      ContentType: "application/json",
      Authorization: "Bearer " + token,
      'X-CSRF-TOKEN': "abcedef"
    },
});
// LOGIN
// developer@ceawebsystems.com
// uniontracking