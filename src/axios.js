import axios from "axios"

const instance = axios.create({
    baseURL: "http://localhost/api/v1"
})

export default instance