<template>
    <div class="container">
        <div class="home" style="width: 740px">
            <div class="col-left fl">
                <div class="home-main-box" v-for='(item, i) in listLeft' :key="i" :style="item.bgcolor">
                    <router-link :to="item.url">
                        <!-- 图片 -->
                        <div class="top-img bg-cover">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="post-icon hover">
                            <!-- 图标 -->
                            <span :class="item.icon">
                            </span>
                        </div>
                        <!-- 文字 -->
                        <div class="intro">
                            <h2>{{item.text}}</h2>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="col-right fr">
                <div class="home-main-box" v-for='(item, i) in listRighht' :key="i" :style="item.bgcolor">
                    <router-link :to="item.url">
                        <!-- 图片 -->
                        <div class="top-img bg-cover">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="post-icon hover">
                            <!-- 图标 -->
                            <span :class="item.icon">
                            </span>
                        </div>
                        <!-- 文字 -->
                        <div class="intro">
                            <h2>{{item.text}}</h2>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                listLeft: [
                    {
                        img: './src/image/blog.4b8a8c6.jpeg',
                        icon: 'mui-icon mui-icon-compose',
                        text: 'Blog',
                        bgcolor: { "background-color": 'rgb(217,135,25)' },
                        url: '/blog'
                    },
                    {
                        img: './src/image/blog.4b8a8c6.jpeg',
                        icon: 'mui-icon mui-icon-chat',
                        text: 'Message',
                        bgcolor: { "background-color": 'rgb(64, 158, 255)' },
                        url: '/message'
                    },

                ],
                listRighht: [
                    {
                        img: './src/image/blog.4b8a8c6.jpeg',
                        icon: 'mui-icon-extra mui-icon-extra-dictionary',
                        text: 'Arichiving',
                        bgcolor: { "background-color": 'rgb(255, 127, 0)' },
                        url: '/arichiving'
                    },
                    {
                        img: './src/image/blog.4b8a8c6.jpeg',
                        icon: 'mui-icon mui-icon-person-filled',
                        text: 'Me',
                        bgcolor: { "background-color": 'rgb(120, 109, 93)' },
                        url: '/me'
                    },
                ]
            }
        },
        methods: {

        },
    }
</script>

<style scoped lang="scss">
    .home {
        margin: 0 auto;
    }

    .fl {
        float: left;
    }

    .fr {
        float: right;
    }

    .col-left {
        width: 350px;
    }

    .col-right {
        width: 350px;
        padding-top: 200px;
    }

    .home-main-box {
        /* background-color: rgb(217, 135, 25); */
        width: 100%;
        height: 450px;
        box-shadow: 0 8px 16px hsla(40, 33%, 60%, .99);
        position: relative;
        margin-top: 30px;
        -webkit-transition: box-shadow .5s linear;
        transition: box-shadow .5s linear;

        img {
            width: 100%;
        }

        .top-img {
            width: 100%;
            height: 50%;
            background-size: cover;
        }

        .post-icon {
            z-index: 1;
            width: 140px;
            height: 140px;
            background: #fff;
            position: absolute;
            left: 50%;
            top: 50%;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            padding: 20px;
            border-radius: 50%;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            -ms-flex-pack: center;
            justify-content: center;

            span {
                font-size: 85px;
                color: hsla(40, 33%, 60%, .99);
            }
            
        }

        .intro {
            width: 80%;
            position: absolute;
            left: 50%;
            bottom: 13%;
            -webkit-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            transform: translateX(-50%);
            text-align: center;
            color: #fff;
            font-family: lucida grande, lucida sans unicode, lucida, helvetica, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
        }
    }
    .home-main-box:hover {
        .post-icon span {
            font-size: 95px;
            transition: all 0.2s;
        }
    }

    .hover {
        cursor: pointer;
    }
</style>