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


    async CheckReservationID(ID){
        return axiosAgent.get(`reservation/${ID}`)
    }

    async CheckGuestInformation(lName,fName){
        return axiosAgent.get(`guest/${lName}/${fName}`)
    }

    async CheckRoom(roomNum){
        return axiosAgent.get(`room/${roomNum}`)
    }

    async CheckStaff(ID){
        return axiosAgent.get(`Staff/${ID}`)
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
