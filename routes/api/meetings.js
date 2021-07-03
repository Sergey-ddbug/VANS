const express = require('express');
const router = express.Router();
const { Meeting, User, UserMeeting, Category } = require('../../models');
const { Op } = require('sequelize');

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
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

router.post('/addAJoin', async (req, res) => {
    try {
        // if (await UserMeeting.findAll({ where: { UserId: req.user.id, MeetingId: req.body.id } }) === undefined) {
        //     console.log("hello")
        // } else {
        //     console.log("goodbye")
        // }

        // console.log(alreadyJoined)

        console.log(req.body)
        const userMeetingData = await UserMeeting.create({
            MeetingId: req.body.MeetingId,
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
            include: [
                {
                    model: Meeting,
                    through: {
                        where: {
                            host: true
                        }
                    },
                    include: [{
                        model: Category

                    }, {
                        model: User
                    }

                    ]
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
            include: [
                {
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
                    },
                    include: [{
                        model: Category

                    },
                    {
                        model: User,
                        where: {
                            id: {
                                [Op.not]: req.user.id
                            }
                        },
                    }
                    ]
                }
            ]
        })

        res.json(userMeetingData)

    } catch (err) {
        console.log(err)
        res.status(422).json(err)
    }
})


router.get('/all', async (req, res) => {
    try {
        const myDate = new Date();
        const newDate = new Date(myDate);
        newDate.setHours(newDate.getHours() - 1);
        console.log(myDate, newDate);
        console.log()

        const meetingData = await Meeting.findAll({
            limit: 10,
            where: {
                timeDate: {
                    [Op.gte]: new Date(newDate)
                }
            },
            include: [{
                model: Category
            },
            {
                model: User
            }
            ]
        });

        // const products = productData.map((data) => data.get({ plain: true }));


        if (req.session.user) {
            const userMeetings =
                meetingData
                    .map(data => data.get({ plain: true }))
                    .map(meeting => {
                        const userIndex = meeting.Users.findIndex(user => user.id === req.session.user.id);

                        if (userIndex !== -1) {
                            return {
                                ...meeting,
                                isUserMeeting: true,
                            }
                        }

                        return meeting;
                    });

            res.json(userMeetings);
        } else {
            res.json(meetingData);
        }

    } catch (err) {
        console.log(err);
        res.status(422).json(err)
    }
});

module.exports = router;