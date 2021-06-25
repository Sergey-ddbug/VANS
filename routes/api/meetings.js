const express = require('express');
const router = express.Router();
const { Meeting, User, UserMeeting } = require('../../models');
const { Op } = require('sequelize');

router.post('/', async (req, res) => {
    try {
        const meetingData = await Meeting.create(req.body);
        const userMeetingData = await UserMeeting.create({
            host: true,
            MeetingId: meetingData.id,
            UserId: req.user.id
        })

        res.json(userMeetingData)
    } catch (err) {
        console.log(err)
        res.status(422).json(err)
    }
});

router.get('/host', async (req, res) => {
    try {
        const userMeetingData = await User.findOne({
            where: {
                id: req.user.id
            },
            include: [{
                model: Meeting,
                through: {
                    where: {
                        host: true
                    }
                }
            }]
        })

        res.json(userMeetingData)

    } catch (err) {
        console.log(err)
        res.status(422).json(err)
    }
})

router.get('/future/nonhost', async (req, res) => {
    try {
        const userMeetingData = await User.findOne({
            where: {
                id: req.user.id
            },
            include: [{
                model: Meeting,
                where: {
                    timeDate: {
                        [Op.gte]: new Date()
                    }
                },
                through: {
                    where: {
                        host: false
                    }
                }
            }]
        })

        res.json(userMeetingData)

    } catch (err) {
        console.log(err)
        res.status(422).json(err)
    }
})


router.get('/all', async (req, res) => {
    try {
        const meetingData = await Meeting.findAll({
            limit: 10
        });

        res.json(meetingData)

    } catch (err) {
        console.log(err);
        res.status(422).json(err)
    }
    // res.json(meetingData)
});

module.exports = router;