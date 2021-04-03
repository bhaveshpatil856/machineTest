import axios from 'axios';

let TaskURL = "http://jsonplaceholder.typicode.com/todos"

let config = {
    headers: {
        "Content-type" : "application/json"
    }
}

export const showTasks = () => {
    return axios.get(TaskURL, config);
};