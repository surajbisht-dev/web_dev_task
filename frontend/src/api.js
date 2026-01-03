import axios from "axios";

export const api = axios.create({
  baseURL: "https://web-dev-task-4gz0.onrender.com/api",
});
