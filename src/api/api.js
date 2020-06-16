import axios from "axios";

const Api = () => {
    const instance = axios.create({
        baseURL: `http://localhost:5000/api/products/`
    })

    return instance;
};

export default Api;