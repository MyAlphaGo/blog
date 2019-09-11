<template>
    <div class="container" :style="heightObj">
        <div id="back">
            <router-link to="/blog">
                <div class="box">
                    <span class="glyphicon glyphicon-menu-left hover">&nbsp;Back</span>
                </div>
            </router-link>

        </div>
        <div class="main">
            <div class="article-nums">
                <span>文章阅读量: 45</span>
            </div>
            <div class="content">
                <div class="title">
                    <h1>{{message.title}}</h1>
                </div>
                <section class="main-content" v-html="message.content"></section>
            </div>
        </div>
        <div class="com">
            <messageboard></messageboard>
            <comment></comment>
        </div>
        <div class="floor">
            <p class="visters">访问数: 80</p>
            <p class="slogen">study hard and make progress every day</p>
        </div>
    </div>
</template>

<script>
    import comment from '../component/comments.vue';
    import messageboard from '../component/message-board.vue';
    export default {
        data() {
            return {
                // 获取可视屏幕高度
                heightObj: {
                    height: ''
                },
                message: {}

            }
        },
        components: {
            comment,
            messageboard
        },
        created() {
            // 获取可视屏幕高度
            window.addEventListener('resize', this.getHeight);
            this.getHeight()
            this.getAllMessage()
        },
        methods: {
            // 获取可视屏幕高度
            getHeight() {
                this.heightObj.height = document.documentElement.clientHeight - 1 + 'px';
            },
            getAllMessage() {
                let urlname = this.GLOBAL.serverSrc + this.GLOBAL.serverPort + "/getAllMessage?id=" + this.$route.query.id;
                this.$http.get(urlname)
                    .then(response => {
                        console.log(response)
                        if (response.body.err_code === 0) {
                            this.message = response.body.message;
                        } else {
                            return Promise.reject(500);
                        }
                    })
                    .catch(error => {

                    })
            }
        },
        // 获取可视屏幕高度
        destroyed() {
            window.removeEventListener('resize', this.getHeight)
        }
    }
</script>

<style scoped lang="scss">
    /* 移动端样式 */
    @media only screen and (max-width: 768px) {
        .container {
            width: 100%;
            min-height: 550px;
        }

        .main {
            /* width: 100%; */
            max-width: 1000px;
            margin: 0 auto;
            padding: 10px;
            background-color: #fafbf6;
        }

        /* 子组件控制区域样式 */
        .com {
            margin: 0 auto;
            margin-top: 60px;
            max-width: 600px;
        }

        /* 底部样式 */
        .floor {
            padding: 20px 0;
            text-align: center;

            .visters {
                font-size: 14px;
                color: #c1866a;
            }

            .slogen {
                font-size: 20px;
                color: #c1866a;
                font-family: Georgia;
                font-style: italic;
            }
        }

        .main {
            .article-nums {
                line-height: 40px;
                font-size: 14px;
                color: #555;
            }

            .content {
                padding: 30px 1px;
                border: 1px dashed #c9c9c7;

                .title {
                    text-align: center;
                    font-size: 2em;
                    font-weight: 700;
                }

                h1 {
                    margin-bottom: 50px;
                }
            }
        }
    }

    @media only screen and (min-width: 768px) {
        .container {
            margin: 0 auto;
            padding: 0;
            margin-top: 80px;
            width: 100%;
        }

        .main {
            /* width: 100%; */
            max-width: 1000px;
            margin: 0 auto;
            padding: 10px;
            background-color: #fafbf6;
        }

        /* 子组件控制区域样式 */
        .com {
            margin: 0 auto;
            margin-top: 60px;
            max-width: 600px;
        }

        /* 底部样式 */
        .floor {
            padding: 20px 0;
            text-align: center;

            .visters {
                font-size: 14px;
                color: #c1866a;
            }

            .slogen {
                font-size: 20px;
                color: #c1866a;
                font-family: Georgia;
                font-style: italic;
            }
        }

        .main {
            .article-nums {
                line-height: 40px;
                font-size: 14px;
                color: #555;
            }

            .content {
                padding: 30px 60px;
                border: 1px dashed #c9c9c7;

                .title {
                    text-align: center;
                    font-size: 2em;
                    font-weight: 700;
                }

                h1 {
                    margin-bottom: 50px;
                }
            }
        }
    }

    #back {
        margin: 0 auto;
        max-width: 1000px;
        padding: 20px 0;
        color: #bba477;

        a {
            color: #bba477;
        }

        .box {
            display: inline-block;
            width: 26px;
            height: 26px;
            border-radius: 50%;
            border: 2px solid #bba477;

            span {
                margin-left: 3px;
                margin-top: 3px;
                font-size: 15px;

            }
        }
    }
</style>