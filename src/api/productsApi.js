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

export const getProduct = () => new Promise((resolve, reject) => {
    axios.get(`${apiEndpoint}/`, apiConfig)
    .then(x => resolve(x.data))
    .catch(x => {
        alert(x);
        reject(x);
    });
});

export const addReview = (productId, review) => new Promise((resolve, reject) => {
    axios.post(`${apiEndpoint}/${productId}/reviews`, review, apiConfig)
    .then(x => resolve(x.data))
    .catch(x => {
        alert(x);
        reject(x);
    });
});