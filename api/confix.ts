import axios from "axios";

const resolvedServer = (() => {
  // at the build time, process.env.Server is replaced by value defiened in next.confi.js
  // https://nextjs.org/docs/api-reference/next.config.js/environment-variables
  if (process.env.Server) {
    return process.env.Server;
  }
  return "http://localhost:3000";
})();

export const Axios = axios.create({
  baseURL: resolvedServer,
  timeout: 5000
});
