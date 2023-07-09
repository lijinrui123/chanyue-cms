"use strict";
const BaseService = require("./base");
const knex = require("../../config/config.knex.js");
class CategoryService extends BaseService {
  static model = "category";
  constructor(props) {
    super(props);
  }

  // 增
  static async create(body) {
    const { app } = this;
    try {
      const result = await BaseService.insert(CategoryService.model, body);
      return result ? "success" : "fail";
    } catch (error) {
      console.error(error);
    }
  }

  // 删
  static async delete(id) {
    try {
      const result = await knex(CategoryService.model)
        .where("id", "=", id)
        .del();
      return result ? "success" : "fail";
    } catch (error) {
      console.error(error);
    }
  }

  // 改
  static async update(body) {
    const { id } = body;
    delete body.id;
    try {
      const result = await knex(CategoryService.model)
        .where("id", "=", id)
        .update(body);
      return result ? "success" : "fail";
    } catch (error) {
      console.error(error);
    }
  }

  // 查全部栏目
  static async find() {
    try {
      const result = await BaseService.all(CategoryService.model);
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  // 查栏目
  static async findId(id) {
    try {
      const data = await knex(CategoryService.model)
        .where("id", "=", id)
        .select();
      return data[0];
    } catch (error) {
      console.error(error);
    }
  }

  // 查子栏目
  static async findSubId(id) {
    try {
      const result = await knex(CategoryService.model)
        .where("pid", "=", id)
        .select();
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  // 搜索栏目
  static async search(key) {
    try {
      const result = key
        ? await knex(CategoryService.model)
        .whereRaw("name COLLATE utf8mb4_general_ci LIKE ?", [`%${key}%`])
        .orderBy("id", "desc", "sort")
        : await knex(CategoryService.model).orderBy("id", "asc", "sort");
      return result;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = CategoryService;
