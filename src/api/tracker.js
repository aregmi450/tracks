import axios from "axios";

export default axios.create({
    baseURL: 'http://43e1-163-47-149-197.ngrok.io',
    //change the URL every 2 hours
});