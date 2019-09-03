
/**
 * @description 给数据排序
 * @param {Array} arr
 */
exports.sortByClick = (arr) => {

}

/**
 * @description 把评论数据量添加到文章数据中
 * @param {Array} article   文章数据
 * @param {Array} comment   评论数据
 */
exports.addReply = (article, comment) => {
    for (let i = 0; i < article.length; i++) {
        article[i].reply = 0;
        for (let j = 0; j < comment.length; j++) {
            if (article[i].articleID == comment[j].articleID) {
                article[i].reply++;
            }
        }
    }
    return article;
}


/**
 * @description 添加标签
 * @param {Array} data  评论数据
 * @param {Array} label 标签数据
 */
exports.addLabel = (data, label) => {
    for (let i = 0; i < data.length; i++) {
        data[i].tags = [];
        for (let j = 0; j < label.length; j++) {
            if (data[i].tag === label[j].article_tag) {
                data[i].tags.push(label[j].tag_name)
            }
        }
    }
    return data;
}


/**
 * @description     处理文章数据
 * @param {Array} data  文章数据
 */
exports.newArr = (data) => {
    let arr = [];
    for(let i = 0;i<data.length;i++){
        arr.push(({
            id: data[i].articleID,
            title: data[i].articleTitle,
            author: data[i].articleAuthor,
            content: data[i].articleContent,
            time: data[i].articleTime,
            click:data[i].articleClick,
            reply: data[i].reply,
            tags: data[i].tags
        }))
    }
    return arr;
    
}