const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");


const article = require("./router/article/index.js")
const add = require("./router/article/add.js")
const commit = require("./router/commits/index.js")

const app = express();

app.use("/public/", express.static(path.join(__dirname, "./public/")))
app.use("/node_modules/", express.static(path.join(__dirname, "./node_modules/")))


app.engine('html', require("express-art-template"));
app.set("views", path.join(__dirname, "./views/"));
//配置body-parser 中间件（插件，专门用来解析表单post请求体）
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('*', function (req, res, next) {
    
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

app.get("/",(req,res)=>{
    res.render("index.html");
})
app.use(add);
app.use(article);
app.use(commit);



app.listen(3000, () => {
    console.log("server is running");
})