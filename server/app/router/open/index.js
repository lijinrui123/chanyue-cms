const express = require('express');
const router = express.Router();
const OpenController = require('../../controller/open/index.js');

//60秒读懂世界 
router.get('/60s', OpenController.news60s);
//每日简报 
router.get('/jianbao',OpenController.jianbao)

module.exports = router;