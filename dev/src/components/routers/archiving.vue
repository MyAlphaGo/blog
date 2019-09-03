<template>
    <div class="container">
        <ul class="row">

            <li class="col-md-12 col-fx-12" v-for="item in articleList" :key="item.imgaddress">
                <div class="media">
                    <div class="media-left media-middle">
                        <a href="#">
                            <img class="media-object" :src="item.imgaddress" alt="">
                        </a>
                    </div>
                    <div class="media-body">
                        <h3 class="media-heading">{{item.title}}</h3>
                        <span>{{item.content}}</span>
                    </div>
                    <!-- 标签 -->
                    <div>
                        <p class="pull-left">
                            <a class="label label-success">Success</a>
                            <a class="label label-info">Info</a>
                            <a class="label label-warning">Warning</a>
                            <a class="label label-danger">Danger</a>
                        </p>
                        <!-- 时间 浏览 评论 -->
                        <p class="pull-right">
                            <span><i class="glyphicon glyphicon-time"></i> {{item.ctime}}</span>
                            <span><i class="glyphicon glyphicon-eye-open"></i>浏览:{{item.browse}}</span>
                            <span><i class="glyphicon glyphicon-pencil"></i><a href="">评论</a></span>
                        </p>
                    </div>

                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                articleList: [
                    {
                        imgaddress: './src/image/timthumb.png',
                        title: "Middle aligned media",
                        content: "哈哈哈哈哈哈哈哈哈哈哈哈和哈哈和哈哈和和哈哈和和哈哈和和哈哈和和和哈哈哈哈哈哈和哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈和和",
                        ctime: new Date(),
                        browse: 12
                    },
                    {
                        imgaddress: './src/image/timthumb.png',
                        title: "Middle aligned media",
                        content: "哈哈哈哈哈哈哈哈哈哈哈哈和哈哈和哈哈和和哈哈和和哈哈和和哈哈和和和哈哈哈哈哈哈和哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈和和",
                        ctime: new Date(),
                        browse: 12
                    },
                    {
                        imgaddress: './src/image/timthumb.png',
                        title: "Middle aligned media",
                        content: "哈哈哈哈哈哈哈哈哈哈哈哈和哈哈和哈哈和和哈哈和和哈哈和和哈哈和和和哈哈哈哈哈哈和哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈和和",
                        ctime: new Date(),
                        browse: 12
                    },
                    {
                        imgaddress: './src/image/timthumb.png',
                        title: "Middle aligned media",
                        content: "哈哈哈哈哈哈哈哈哈哈哈哈和哈哈和哈哈和和哈哈和和哈哈和和哈哈和和和哈哈哈哈哈哈和哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈和和",
                        ctime: new Date(),
                        browse: 12
                    },
                ],
            }
        },
        methods: {

        },
    }
</script>

<style scoped lang="scss">
    ul {
        padding: 0px 15px;

    }

    li {
        margin-top: 10px;
        list-style: none;
        background-color: #fff;
    }

    .pull-right {
        span {
            margin-left: 20px;
        }
    }
</style>