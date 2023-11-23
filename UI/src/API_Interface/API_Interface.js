import axios from 'axios';

const AxiosConfigured = () => {
    // Indicate to the API that all requests for this app are AJAX
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

    // Set the baseURL for all requests to the API domain instead of the current domain
    // axios.defaults.baseURL = `http://localhost:8443/api/v1`;
    axios.defaults.baseURL = `http://localhost:8443/api/v1`;


    // Allow the browser to send cookies to the API domain (which include auth_token)
    axios.defaults.withCredentials = true;

    

//    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrf_token;

    return axios;
};


const axiosAgent = AxiosConfigured();

export default class APIInterface {

    async getUserInfo(user_id) {
        return axiosAgent.get(`login/${user_id}`)
            .then(userInfo => userInfo.data)
            .catch(error => (
                {
                    error,
                    user: undefined
                }));
    }


    async getHotelsInCity(city){
        return axiosAgent.get(`search/${city}`)
    }

    async getHotelsByID(ID){
        return axiosAgent.get(`search/id/${ID}`)
    }

    async getReviewsByHotelID(HotelID){
        return axiosAgent.get(`reviews/getbyhotelid/${HotelID}`)
    }
     async registerUser(userData) {
        return axiosAgent.post(`sign-up/${userData.username}`, userData)
            .then(userData => userData.data)
            .catch(error => (
                {
                    status: 'Failed',
                    error,
                }
            ));
    }

    async deleteUser(user_id){
        return axiosAgent.post(`delete-account/${user_id}`)
            .then(userInfo => userInfo.data)
            .catch(error => (
                {
                    error,
                    user:undefined
                }
            ));

    }


    
    
}
