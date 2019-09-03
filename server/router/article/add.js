const mysql = require("mysql");
const fs = require("fs");

const express = require("express");
const router = express.Router();

router.get("/add", (req,res)=>{
    fs.readFile('./views/add.html','utf8',(err,data)=>{
        if(data){
            res.setHeader('content-Type','text/html; charset=utf-8');
            res.send(data);
        }
        else {
            res.send("404");
        }
    })

    // res.render("add.html");
})

router.get("/login",(req,res)=>{
    res.render("login.html")
})

module.exports = router;