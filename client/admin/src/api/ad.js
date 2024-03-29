import http from "../utils/http.js";
import API from "../config/index.js";

//文章列表
export let search = (cur, keyword = "") => {
  return http({
    url: `${API.BASE_API}/api/ad/search?cur=${cur}&pageSize=10&keyword=${keyword}`,
    method: "get",
  });
};

//增
export let create = (opt) => {
  return http({
    url: `${API.BASE_API}/api/ad/create`,
    method: "post",
    data: opt,
  });
};

//删
export let del = (id) => {
  return http({
    url: `${API.BASE_API}/api/ad/delete?id=${id}`,
    method: "get",
  });
};

//改
export let update = (opt) => {
  return http({
    url: `${API.BASE_API}/api/ad/update`,
    method: "post",
    data: opt,
  });
};

//文章详情
export let detail = (id) => {
  return http({
    url: `${API.BASE_API}/api/ad/detail?id=${id}`,
    method: "get",
  });
};
