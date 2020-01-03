var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});
//注册一个路由用户注册
//回调函数 获取请求参数 处理请求 返回响应
router.post("/register", function(req, res, next) {
  console.log("正在进行注册");
  //1.获取请求参数
  const { username, password } = req.body;
  if (username == "admin") {
    //注册会失败
    res.send({ code: 1, msg: "此用户已存在" });
  } else {
    res.send({ code: 0, data: { id: 123, username, password } });
  }
});
module.exports = router;
