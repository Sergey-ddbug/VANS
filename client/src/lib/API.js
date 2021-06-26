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
        },
        getMeeting: function () {
            return axios.get("/api/meetings/all")
        },
        addMeetingsJoin: function (meetingData) {
            return axios.post("/api/meetings/addAJoin", meetingData)
        },
        getFutureNonHost: function () {
            return axios.get("/api/meetings/future/nonhost")
        },
        getHostMeetings: function () {
            return axios.get("/api/meetings/host")
        },
    },

    Categories: {
        getCategories: function () {
            return axios.get('/api/categories')
        }
    },

}