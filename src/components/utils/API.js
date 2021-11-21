import axios from "axios";

const APIKEY = process.env.REACT_APP_APIKEY;
const BASEURL = "https://api.giphy.com/v1/gifs/search?"

const search = async (query) => {
    return axios.get(`${BASEURL}api_key=${APIKEY}&q=${query}&limit=1&rating=g&lang=en`);
}

export default {search};