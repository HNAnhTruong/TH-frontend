import axios from "axios";

const commonConfig = {
    headers: {
        "Content-Type": "application/json",
        Accept: "application/jsons"
    },
};

export default (baseURL) => {
    return axios.create({
        baseURL,
        ...commonConfig,
    })
}