'use strict';
const BaseController = require('./base');
const dayjs = require('dayjs');

const path = require('path');
const { success, fail, } = require('../../extend/api.js');
const { filterBody } = require('../../extend/helper.js');

const SiteService = require('../../service/api/site.js');
const PageService = require('../../service/api/page.js');


class PageController extends BaseController {

  constructor(props) {
    super(props);
    this.model = 'page';
  }

  // 增
  async create(req, res, next) {
    try {
      const body = req.body;
      body.createdAt = dayjs(body.createdAt).format('YYYY-MM-DD HH:mm:ss');
      body.updatedAt = dayjs(body.createdAt).format('YYYY-MM-DD HH:mm:ss');
      body.content = filterBody(body.content);
      const data = await PageService.create(body);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 删除
  async delete(req, res, next) {
    try {
      const id = req.query.id;
      const data = await PageService.delete(id);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 改
  async update(req, res, next) {
    try {
      const body = req.body;
      body.createdAt = dayjs(body.createdAt).format('YYYY-MM-DD HH:mm:ss');
      body.updatedAt = dayjs(body.createdAt).format('YYYY-MM-DD HH:mm:ss');
      body.content = filterBody(body.content);
      const data = await PageService.update(body);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 查
  async find(req, res, next) {
    try {
      const data = await PageService.find();
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 查
  async detail(req, res, next) {
    try {
      const id = req.query.id;
      const data = await PageService.detail(id);
      res.json({ ...success, data: data[0] });
    } catch (error) {
      next(error);
    }
  }

  // 查子栏目
  async findSubId(req, res, next) {
    try {
      const id = req.query.id;
      const data = await PageService.findSubId(id);
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 搜索
  async search(req, res, next) {
    try {
      const cur = req.query.cur;
      const key = req.query.keyword;
      const pageSize = 10;
      const data = await PageService.search(key, cur, pageSize);
      data.list.forEach(ele => {
        ele.createdAt = dayjs(ele.createdAt).format('YYYY-MM-DD HH:MM');
      });
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

  // 列表
  async list() {
    try {
      const cur = ctx.query.cur;
      const pageSize = 10;
      const data = await PageService.list(cur, pageSize);
      data.list.forEach(ele => {
        ele.createdAt = dayjs(ele.createdAt).format('YYYY-MM-DD HH:MM');
      });
      res.json({ ...success, data: data });
    } catch (error) {
      next(error);
    }
  }

}

module.exports = new PageController();
