# 使用说明
- 克隆了以后需要在dev和server下的终端下输入npm install
- 并且分别运行，
  - 使用 npm run dev 运行dev （占用端口5000）
  - 使用 node app.js 或者 nodemon app.js运行server (占用端口3000)
  - 额，很尴尬的是我用的mysql，下载了也没有数据。
    - 数据库连接的操作在server/aqi/sql.js 若要自定义数据库的连接操作，更改link()即可
    
# 数据库格式（这也太多了，不想写了）
