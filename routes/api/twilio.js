const express = require('express');
const passport = require('../../passport');
const { User } = require('../../models');
const router = express.Router();
const { videoToken } = require('../../utilities/tokens');
const config = require('../../utilities/twilio-config');


const sendTokenResponse = (token, res) => {
    res.set('Content-Type', 'application/json');
    res.send(
        JSON.stringify({
            token: token.toJwt()
        })
    );
};

router.get('/token/:room', (req, res) => {
    console.log("REQ", req)
    const identity = req.user.username;
    const room = req.params.room;
    const token = videoToken(identity, room, config);
    sendTokenResponse(token, res);
});

router.post('/token', (req, res) => {
    const identity = req.body.identity;
    const room = req.body.room;
    const token = videoToken(identity, room, config);
    sendTokenResponse(token, res);
});

module.exports = router;
