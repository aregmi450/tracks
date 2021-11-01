import axios from "axios";

export default axios.create({
    baseURL: 'http://c53d-163-47-149-193.ngrok.io', 
    //change the URL every 2 hours
});