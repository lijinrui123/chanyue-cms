'use strict';
const BaseController = require('./base');
const dayjs = require('dayjs');
const path = require('path');
const { success, fail, } = require('../../extend/api.js');
const { filterBody } = require('../../extend/helper.js');
const MessageService = require('../../service/api/message.js');

class MessageController extends BaseController {

  constructor(props) {
    super(props);
  }

  // 增
  static async create(req, res, next) {
    try {
      const body = req.body;
      body.createdAt = dayjs(body.createdAt).format('YYYY-MM-DD HH:mm:ss');
      const data = await MessageService.create(body);
      res.json({ ...success, data: data })
    } catch (error) {
      next(error);
    }
  }


  // 删除
  static async delete(req, res, next) {
    try {
      const id = req.query.id;
      const data = await MessageService.delete(id);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 改
  static async update(req, res, next) {
    try {
      const body = req.body;
      body.createdAt = dayjs(body.createdAt).format('YYYY-MM-DD HH:mm:ss');
      const data = await MessageService.update(body);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }
  

  // 查
  static async find(req, res, next) {
    try {
      const id = req.query.id;
      const data = await MessageService.find(id);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }
 

  // 查
  static async detail(req, res, next) {
    try {
      const id = req.query.id;
      const data = await MessageService.detail(id);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }
  


  // 搜索
  static async search(req, res, next) {
    try {
      const cur = req.query.cur;
      const key = req.query.keyword;
      const pageSize = req.query.pageSize || 10;
      const data = await MessageService.search(key, cur, pageSize);
      data.list.forEach(ele => {
        ele.createdAt = dayjs(ele.createdAt).format('YYYY-MM-DD HH:MM');
      });
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 列表
  static async list(req, res, next) {
    try {
      const cur = req.query.cur;
      const pageSize = 10;
      const data = await MessageService.list(cur, pageSize);
      data.list.forEach(ele => {
        ele.createdAt = dayjs(ele.createdAt).format('YYYY-MM-DD HH:MM');
      });
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

}

module.exports = MessageController;
