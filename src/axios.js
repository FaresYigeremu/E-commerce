import axios from "axios";

const instance = axios.create({
baseURL: 'http://127.0.0.1:5001/clone-a1514/us-central1/api'//api(cloud function) URL
});

export default instance;
