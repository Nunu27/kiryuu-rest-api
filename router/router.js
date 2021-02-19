const express = require("express");
const router = express.Router();
const {home} = require("./helper/controller")

router.get('/', async (req, res) => {
    res.json({
        message: "Kiryuu Rest API made for fun",
        author: "Nunu27"
    })
});
router.get('/home', async (req, res) => {
    res.json(await home())
});

module.exports = router;