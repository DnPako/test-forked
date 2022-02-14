import axios from "axios";

export const getAddresses = (searchValue) => {
    return axios.get('/search', {
        params: {
            q: searchValue || '',
            limit: 15,
        },
    });
};
