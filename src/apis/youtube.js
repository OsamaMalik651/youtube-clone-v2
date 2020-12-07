import axios from "axios";
const KEY = "AIzaSyAAye7VMDxn469sdG6pRWlIpBuqPrrkxjU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
  },
});
