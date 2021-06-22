import axios from 'axios';

export default {
    Users: {
        login: function (email, password) {
            return axios.post("/api/users/login", {
                email,
                password
            })
        },

        // creat a user
    },

    Meetings: {
        // need a route that allows a user to create a meeting
        create: function () {
            return axios.post("/api/meetings")
        }

        // need a route that updates a meeting 
    },

    Categories: {
        getCategories: function () {
            return axios.get('/api/categories')
        }
    }
}