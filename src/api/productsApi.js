import axios from "axios";

const apiEndpoint = "https://api.johnlawrimore.com/store/products";
const apiConfig = {
    headers: {
        Authorization: 'rlucas'
    }
};

export const getProductById = (productId) => new Promise((resolve, reject) => {
    axios.get(`${apiEndpoint}/${productId}`, apiConfig)
    .then(x => resolve(x.data))
    .catch(x => {
        alert(x);
        reject(x);
    });
});