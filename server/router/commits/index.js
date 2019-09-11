const fs = require("fs");
const path = require("path");

const sql = require("../../api/sql.js");

const express = require("express");
const router = express.Router();
let basicname = "http://120.27.247.42:3000/public/img/pinglun/";
let pathname = [
    "egg.jpeg",
    "fish.jpeg",
    "fuck.jpeg",
    "hat.jpeg",
    "melon.jpeg",
    "pig.jpeg",
    "rabbit.jpeg",
    "sun.jpeg"
]

router.post('/pushComment', (req, res) => {
    const comment = req.body;
    const num = Math.floor(Math.random() * 7);
    sql.link();
    sql.addData("comments", null, comment.id, comment.name, comment.content, pathname[num], new Date().format("yyyy-MM-dd hh:mm:ss"))
        .then(data => {
            sql.close();
            return res.status(200).json({
                err_code: 0,
                message: "评论成功"
            })
        })
        .catch(err => {
            sql.close();
            return res.status(200).json({
                err_code: 500,
                message: "评论失败，未知错误"
            })
        })
})

router.get("/pullComment", (req, res) => {
    sql.link();
    let temp = [];
    sql.finds("comments", req.query.id, "articleID")
        .then(data => {
            if (data.length == 0) {
                return Promise.reject(0);
            } else {

                for (let i = 0; i < data.length; i++) {
                    temp.push({
                        id: data[i].commentID,
                        name: data[i].critics,
                        content: data[i].commentContent,
                        image: basicname + data[i].image,
                        time: data[i].commentTime
                    });
                }
                res.status(200).json({
                    err_code: 0,
                    message: temp
                })
            }
        })
        .catch(error => {
            if (error == 0) {
                res.status(200).json({
                    err_code: 1,
                    message: "no data"
                })
            }
            res.status(200).json({
                err_code: 500,
                message: "server is to buzy"
            })
        })
})




module.exports = router;