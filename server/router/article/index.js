const fs = require("fs");
const path = require("path");

const sql = require("../../api/sql.js");
const file = require("../../api/file.js");
const tool = require("../../api/dealwith.js");

const express = require("express");
const router = express.Router();


// 添加文章的操作
router.post("/adddata", (req, res) => {
    const datetime = new Date().format("yyyy-MM-dd hh:mm:ss");
    const tagdemo = new Date().getTime()
    let data = req.body;
    //写入文件操作
    let pathname = data.title + ".txt";
    sql.link();
    sql.addData("article", null, data.title, 'zuozhe', pathname, 0, datetime, tagdemo)
        .then(success => {
            return sql.addLabel(data.tag, datetime, tagdemo)
        })
        .then(success => {
            return file.writeFile(pathname, data.content)
        })
        .then(success => {
            sql.close();
            return res.status(200).json({
                err_code: 0,
                message: 'successful'
            })
        })
        .catch(fail => {
            sql.close();
            console.log(fail)
            return res.status(200).json({
                err_code: 500,
                message: 'failure'
            })
        })
})

// 返回客户端文章标题的操作
router.get("/getArticleTitle", (req, res) => {
    let tempdata;
    sql.link();
    sql.findCols("article", "*") // 读取文章
        .then(data => {
            tempdata = data;
            return sql.findCols("comments", "articleID") // 读取评论
        })
        .then(data => {
            tempdata = tool.addReply(tempdata, data);
            return sql.findCols("tag", "tag_name", "article_tag")    // 读取标签
        })
        .then(data => {
            tempdata = tool.addLabel(tempdata, data);
            tempdata = tool.newArr(tempdata);
            res.status(200).json({
                err_code: 0,
                message: tempdata
            })
            sql.close();
        })
        .catch(error => {
            res.status(200).json({
                err_code: 500,
                message: error
            })
            sql.close();
        })
})

// 
router.get("/getArticleTitleByTag", (req, res) => {
    let tempdata;
    sql.link();
    // 根据标签查找文章
    sql.findByFiled("tag", "tag_name",req.query.tagname)
        .then(data => {
            if (data.length == 0) {
                return Promise.reject(0);
            }
            else {
                let time = [];
                for (let i = 0; i < data.length; i++) {
                    time.push(data[i].article_tag)
                }
                return sql.finds("article", "tag", time)
            }
        })
        .then(data => {
            tempdata = data;
            return sql.findCols("comments", "articleID") // 读取评论
        })
        .then(data => {
            tempdata = tool.addReply(tempdata, data);
            return sql.findCols("tag", "tag_name", "article_tag")    // 读取标签
        })
        .then(data => {
            tempdata = tool.addLabel(tempdata, data);
            tempdata = tool.newArr(tempdata);
            res.status(200).json({
                err_code: 0,
                message: tempdata
            })
            sql.close();
        })
        .catch(error => {
            if (error == 0) {
                res.status(200).json({
                    err_code: 1,
                    message: error
                })
            } else {
                console.log(error)
                res.status(200).json({
                    err_code: 500,
                    message: error
                })
            }

            sql.close();
        })

})

// 返回客户端文章所有信息的 操作
router.get("/getAllMessage", (req, res) => {
    sql.link();
    let message = {};
    sql.finds("article", parseInt(req.query.id), "articleID")
        .then(data => {
            message = { title: data[0].articleTitle, id: data[0].articleID };
            return file.readFile(data[0].articleContent)
        })
        .then(data => {
            message.content = data;
            res.status(200).json({
                err_code: 0,
                message: message
            })
        })
        .catch(error => {
            res.status(200).json({
                err_code: 500,
                message: 'server is to buzy'
            })
        })
})



module.exports = router;