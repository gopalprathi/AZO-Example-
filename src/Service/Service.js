import axios from 'axios';

export default class Service{
    getAutoParts(){
        return axios.get('http://localhost:8081/autoparts');
    }

    getByPartName(partname){
        return axios.get(`http://localhost:8081/autoparts/parts/${partname}`);
    }

    getByCategory(category){
        return axios.get(`http://localhost:8081/autoparts/category/${category}`);
    }
}
