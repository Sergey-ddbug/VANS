const router = require("express").Router();
const Meeting = require('../../models').Meeting;

// Matches with "/api/books"
// router.route("/")
//     .post(postController.create);


router.get('/', async (req, res) => {
    try {
        await Meeting.create(req.body)
            .then(dbModel => res.json(dbModel))

    } catch {
        err => res.status(422).json(err);
    }
});

module.exports = router;

// create: function(req, res) {
//     db.Book
//         .create(req.body)
//         .then(dbModel => res.json(dbModel))
// }
