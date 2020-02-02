import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-58c42.firebaseio.com/'
});

export default instance;