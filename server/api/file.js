const fs = require("fs");
const path = require("path")

let basename = path.join(__dirname, "../article/");


/**
 * @description 读取文件
 * @param {string} pathname  文件路径
 */
exports.readFile = (pathname) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(basename,pathname), 'utf8', (error, data) => {
            if (data) {
                resolve(data);
                
            } else {
                reject(error);
            }
        })
    })
}

/**
 * @description 写入文件
 * @param {string} pathname  文件路径
 * @param {string} data  写入数据
 */
exports.writeFile = (pathname,data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path.join(basename,pathname), data, (error) => {
            if(error) {
                reject(error);
                
            } else {
                resolve("OK");
            }
        })
    })

}