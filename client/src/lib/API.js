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

    Images: {
        sendProfilePic: function (file) {
            const formData = new FormData();
            formData.append("file", file);
            return axios.post('/api/images/', formData, {
                headers: {
                    "Content-Type": 'multipart/form-data'
                }
            })
        },
        deleteProfilePic: function (file) {
            return axios.post('/api/images/destroy', file);
        }
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
            console.log("SUCCESS")
            return axios.get("/api/meetings/future/nonhost")
        },
        getHostMeetings: function () {
            return axios.get("/api/meetings/host")
        },
        deleteMeeting: function (id) {
            return axios.delete("/api/meetings/delete/" + id)
        },
    },

    Categories: {
        getCategories: function () {
            return axios.get('/api/categories')
        }
    },

}