import axios from "axios";

export const axiosIstance = axios.create({
    baseURL: "https://jer-netflix.herokuapp.com/"
})

