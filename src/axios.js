import axios from "axios";

window.axios = axios;

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;
const user = JSON.parse(window.localStorage.getItem("user"));
console.log("localStrorge", user);
console.log("Environments", import.meta.env);

if (user) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + user.token;
}

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
