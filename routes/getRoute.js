const express = require("express");
const router = express.Router();
const data = require('../Scheme/imageScheme');

router.get('/', (req, res) => {
    data.find().then((data) => {
        if(data){
            res.send(data);
        }
    })
})

module.exports = router;