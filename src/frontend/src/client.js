import fetch from 'unfetch';

const checkStatus = response => {
    if (response.ok) {
        return response;
    }
    // convert non-2xx HTTP responses into errors:
    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
}

export const getAllProdutcs = () =>
    fetch("products/all")
        .then(checkStatus);

export const getAllConstumers = () =>
    fetch("products/allConsumers")
        .then(checkStatus);