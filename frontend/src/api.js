import axios from "axios";

export const api = axios.create({
  baseURL: "https://web-dev-task-eto4.onrender.com/api",
});
