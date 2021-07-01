const express = require('express');
const router = express.Router();
const { User } = require('../../models');
const upload = require('../../utilities/multer');
const cloudinary = require('../../utilities/cloudinary');


router.post('/', upload.single('file'), async (req, res) => {
  try {

    const cloudinaryImageData = await cloudinary.uploader.upload('./uploads/' + req.file.filename)

    const userUpdateData = await User.update({
      profileImgPublicId: cloudinaryImageData.public_id
    }, {
      where: {
        id: req.user.id
      }
    })

    res.status(200).json({ status: 'ok', profileImgPublicId: cloudinaryImageData.public_id });

  } catch (err) {
    res.json(err);
  }
});

module.exports = router;