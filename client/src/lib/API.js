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
        createMeeting: function (meetingData) {
            return axios.post("/api/meetings", meetingData)
        }
    },

    Categories: {
        getCategories: function () {
            return axios.get('/api/categories')
        }
    },

}