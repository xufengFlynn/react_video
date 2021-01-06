import axios from "axios";

const KEY = "AIzaSyDi1StXv0ZAQN5QhAkx6rxhxGinHmzrA1E";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
