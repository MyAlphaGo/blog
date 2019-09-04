const express = require("express");

const sql = require("../../api/sql.js");

const router = express.Router();

router.get("/login", (req, res, next) => {
    res.render("login.html")
})

router.post("/login", (req, res, next) => {
    sql.link();
    let user = req.body;
    sql.findUser(user.email, user.password)
        .then(data => {
            if (data.length === 0) {
                res.status(200).json({
                    err_code: 1,
                    message: "email or password is invalid"
                })
            } else {
                req.session.user = user;
                res.status(200).json({
                    err_code: 0,
                    message: "OK"
                })
            }
        })
        .catch(error=>{
            next(error);
        })
})



module.exports = router;