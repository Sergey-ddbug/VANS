const express = require('express');
const passport = require('../../passport');
const { User, Meeting } = require('../../models');
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
    console.log("REQqqqqq", req)
    const identity = req.user.first_name;
    const room = req.params.room;
    const token = videoToken(identity, room, config);
    sendTokenResponse(token, res);
});

router.post('/participant', async (req, res) => {

    try {
        const identity = req.user.first_name;
        const room = req.body.room;
        const roomId = req.body.roomId
        const searchMeetingStatus = await Meeting.findOne({
            where: {
                id: roomId,
                meetingStatus: true
            }
        })

        console.log(searchMeetingStatus)

        if (!searchMeetingStatus) {
            return res.json({ status: 'Meeting Not Open' })
        }



        console.log("identity", identity, "room", room)
        const token = videoToken(identity, room, config);
        console.log(token)
        sendTokenResponse(token, res);

    } catch (err) {
        console.log(err);
        res.json(err);
    }
});


router.post('/begin', async (req, res) => {

    try {
        const identity = req.user.first_name;
        const room = req.body.room;
        const roomId = req.body.roomId
        const meetingData = await Meeting.findOne({
            where: {
                id: roomId
            },
            include: [
                {
                    model: User,
                    through: {
                        where: {
                            UserId: req.user.id
                        }
                    }
                }
            ]
        });

        console.log(meetingData);
        if (meetingData.dataValues.Users.length <= 0) {
            return res.json({ status: 'No Access' })
        }

        const updateMeetingStatus = await Meeting.update({
            meetingStatus: true,

        }, {
            where: {
                id: meetingData.dataValues.id
            }
        })

        console.log(updateMeetingStatus)

        console.log("identity", identity, "room", room)
        const token = videoToken(identity, room, config);
        console.log(token)
        sendTokenResponse(token, res);

    } catch (err) {
        console.log(err);
        res.json(err);
    }



});


module.exports = router;
