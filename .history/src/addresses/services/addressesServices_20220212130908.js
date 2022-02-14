import axios from "axios";

export const getAddresses = () => {
    return axios.get('search', {
        params: {
            q: '8 bd du port',
            limit: 15,
        },
    });
};
