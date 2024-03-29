import http from "../utils/http.js";
import API from "../config/index.js";
//文章列表
export let search = (cur, keyword = "", pageSize = 10) => {
  return http({
    url: `${API.BASE_API}/api/appointment/search?cur=${cur}&pageSize=${pageSize}&keyword=${keyword}`,
    method: "get",
  });
};

//文章列表
export let list = (cur) => {
  return http({
    url: `${API.BASE_API}/api/appointment/list?cur=${cur}&pageSize=10`,
    method: "get",
  });
};

export let has = (path) => {
  return http({
    url: `${API.BASE_API}/api/appointment/has?path=${path}`,
    method: "get",
  });
};

//增
export let create = (opt) => {
  return http({
    url: `${API.BASE_API}/api/appointment/create`,
    method: "post",
    data: opt,
  });
};

//删
export let del = (id) => {
  return http({
    url: `${API.BASE_API}/api/appointment/delete?id=${id}`,
    method: "get",
  });
};

//改
export let update = (opt) => {
  return http({
    url: `${API.BASE_API}/api/appointment/update`,
    method: "post",
    data: opt,
  });
};

//文章详情
export let detail = (id) => {
  return http({
    url: `${API.BASE_API}/api/appointment/detail?id=${id}`,
    method: "get",
  });
};
