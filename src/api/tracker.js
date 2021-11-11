import axios from "axios";

export default axios.create({
    baseURL: 'http://920a-163-47-149-192.ngrok.io',
    //change the URL every 2 hours
});