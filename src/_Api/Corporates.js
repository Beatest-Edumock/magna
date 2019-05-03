import axios from 'axios';


function getCorporate(slug) {
    return axios.get(`/corporates/${slug}`);
}

export {getCorporate}
