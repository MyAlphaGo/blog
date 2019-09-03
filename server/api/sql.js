const mysql = require("mysql");


let connection;

Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,                 //月份 
        "d+": this.getDate(),                    //日 
        "h+": this.getHours(),                   //小时 
        "m+": this.getMinutes(),                 //分 
        "s+": this.getSeconds(),                 //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds()             //毫秒 
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}


/**
 * @description 连接数据库
 */
exports.link = function () {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "123456",
        database: "blog"
    })
    connection.connect();
}

/**
 * @description 关闭数据库连接
 */
exports.close = function () {
    connection.end();
}

/**
 * @description 插入一条数据
 * @param {string} tablename 表名
 * @param {...} content   数据
 */
exports.addData = (tablename, ...content) => {
    return new Promise((resolve, reject) => {
        let value = `${content[0]}`;
        for (let i = 1; i < content.length; i++) {
            value += `,"${content[i]}"`
        }
        connection.query(`insert into ${tablename} values(${value})`, (error, results, fidlds) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    })
}


/**
 * @description         插入多条标签
 * @param {string} tag       标签名
 * @param {date} time      插入时间
 * @param {string} tagdome   主键(时间的毫秒值标识)
 */
exports.addLabel = (tag, time, tagdome) => {
    return new Promise((resolve, reject) => {
        let values = [];
        let value = "insert into tag values";
        for (let i = 0; i < tag.length; i++) {
            if (i < tag.length - 1) {
                value += `("${i}","${tag[i]}","${time}","${tagdome}"),`;
            }
            else {
                value += `("${i}","${tag[i]}","${time}","${tagdome}")`;
            }
        }
        connection.query(value, (error, results, fidlds) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })
    })
}


/**
 * @description 通过字段值查找
 * @param {string} tablename 表名
 * @param {string} filed     字段名
 * @param {string} filedvaue 字段值
 */
exports.findByFiled = (tablename, filed, filedvaue) => {
    return new Promise((resolve, reject) => {
        connection.query(`select * from ${tablename} where ${filed}="${filedvaue}"`, (error, results, fidlds) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })
    })
}

/**
 * @description 查询特定的列
 * @param {string} tablename 表名
 * @param {...} cols 列名
 */
exports.findCols = (tablename, ...cols) => {
    return new Promise((resolve, reject) => {
        let col = `${cols[0]}`;
        for (let i = 1; i < cols.length; i++) {
            col += `,${cols[i]}`
        }
        connection.query(`select ${col} from ${tablename}`, (error, results, fidlds) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })
    })
}


/**
 * @description 通过某个字段的多个值查询所有列
 * @param {string} tablename 表名
 * @param {string} filed 字段名
 * @param {...} values 字段值(若要查询所有列，则输入*)
 */
exports.finds = (tablename, filed, ...values) => {
    return new Promise((resolve, reject) => {
        let statements = `select * from ${tablename} where ${filed} in(${values[0]}`;
        for (let i = 1; i < values.length; i++) {
            if (!values[i])
                statements += `,${values[i]} `
        }
        statements += ")";
        connection.query(statements, (error, results, fidlds) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })
    })
}