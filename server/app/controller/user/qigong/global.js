
const express = require('express');
const router = express.Router();


const reg = require('./reg');
const login = require('./login');
const index = require('./index');

const my = require('./my');
const safe = require('./safe');
const msg = require('./msg');
//会员登录状态
router.use((req, res, next)=>{
	res.locals.user = req.signedCookies.user;
	res.locals.uid = req.signedCookies.uid;
	next();
});

//必须登录才能进入会员中心
router.use((req, res, next)=>{

	console.log(req.signedCookies)

	if(!req.signedCookies.user && req.url != '/login'){
		res.redirect('/user/login');
	}else{
		next();
	}


});
//注册
router.use('/reg',reg);
//登陆
router.use('/login',login);
//会员首页
router.use('/index',index);
//会员基本信息
router.use('/my',my);
//安全中心
router.use('/safe',safe);
//消息中心
router.use('/msg',msg);
module.exports = router;