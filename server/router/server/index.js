const sql = require("../../api/sql.js");
const file = require("../../api/file.js")

const express = require("express");
const router = express.Router();

// 防止未登录就访问后台管理系统
router.use("*", (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.redirect("/login");
    }
})

// 让 / 重定向
router.get("/", (req, res) => {
    res.redirect("/home/show")
})

// 主页
router.get("/home", (req, res) => {
    res.render("index.html", {
        user: req.session.user
    });
})

// 添加文章
router.get("/home/add", (req, res) => {
    res.render("add.html", {
    })
})

// 获取全部文章
router.get("/home/show", (req, res, next) => {
    sql.link();
    sql.findCols("article", "articleID", "articleTitle", "articleAuthor", "articleClick", "articleContent")
        .then(data => {
            res.render("show.html", {
                article: data
            })
            sql.close();
        })
        .catch(error => {
            // next(error);
        })
})

// 删除文章
router.get("/delete", (req, res, next) => {
    sql.link();
    sql.delete("article", "articleID", req.query.id)
        .then(data => {
            file.delete(req.query.content)
        })
        .then(data => {
            res.redirect("/home/show");
        })
        .catch(error => {
            // next(error);
        })

})



module.exports = router;