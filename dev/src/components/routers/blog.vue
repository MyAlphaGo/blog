<template>
    <div class="container">
        <div class="blog">
            <!-- pc导航栏 -->
            <div class="nav-left">
                <ul>
                    <li>
                        <span class="label hover" :style="list_1abel[0].bgc"
                            @click="getdataByTagName(list_1abel[0].text)">{{list_1abel[0].text}}</span>
                        <span class="label hover" :style="list_1abel[1].bgc"
                            @click="getdataByTagName(list_1abel[1].text)">{{list_1abel[1].text}}</span>
                    </li>
                    <li>
                        <span class="label hover" :style="list_1abel[2].bgc"
                            @click="getdataByTagName(list_1abel[2].text)">{{list_1abel[2].text}}</span>
                        <span class="label hover" :style="list_1abel[3].bgc"
                            @click="getdataByTagName(list_1abel[3].text)">{{list_1abel[3].text}}</span>
                    </li>
                    <li>
                        <span class="label hover" :style="list_1abel[4].bgc"
                            @click="getdataByTagName(list_1abel[4].text)">{{list_1abel[4].text}}</span>
                        <span class="label hover" :style="list_1abel[5].bgc"
                            @click="getdataByTagName(list_1abel[5].text)">{{list_1abel[5].text}}</span>
                    </li>
                </ul>
            </div>
            <!-- 手机导航栏 -->
            <div class="nav-left-phone">
                <navmenu></navmenu>
                <span>博客列表</span>
                <div class="tag mui-icon mui-icon-list" @click="changeFlag"></div>
                <!-- 隐藏区域 -->
                <transition name="cover1">
                    <div class="cover" :style="screenHeight" v-show="tag_flag" @click.self="changeFlag">
                        <transition name="tag">
                            <div class="hiddendemo" :style="screenHeight" v-show="tag_flag">
                                <h3>Tags</h3>
                                <div class="line container-fluid"></div>
                                <!-- <span class="triangle"></span> -->
                                <span v-for="(item,i) in list_1abel" class="label hover label-tag" :style="item.bgc"
                                    @click="getdataByTagName(item.text)" :key="i+'c'">{{item.text}}</span>
                            </div>
                        </transition>
                    </div>
                </transition>
            </div>

            <!-- 主体内容 -->
            <!-- <div class="main"> -->

            <div v-if="!list.length" class="main">没有文章</div>
            <div v-else>
                <transition-group appear tag="div" class="main">
                    <section v-for="(item, i) in list" :key="item.id">
                        <div class="box">
                            <h2>
                                <!--  http://127.0.0.1:3000/show?id=1 -->
                                <router-link :to="{path: '/show',query: {id:item.id}}">{{item.title}}
                                </router-link>

                            </h2>
                            <time>{{item.time}}</time>
                            <div class="content">
                                {{item.title}}
                                <small>
                                    <router-link :to="{path: '/show',query: {id:item.id}}">查看更多</router-link>
                                </small>
                            </div>
                            <div class="reply hover">
                                <span class="mui-icon mui-icon-chatbubble">
                                    <div class="text">{{item.reply}}</div>
                                </span>

                            </div>
                            <ul>
                                <li v-for="(label_t,n) in item.tags" :key="n" :style="label_t.bgc">
                                    <span class="label hover"
                                        @click="getdataByTagName(label_t.text)">{{label_t.text}}</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                </transition-group>
            </div>
            <!-- </div> -->
        </div>

    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    import navmenu from '../component/menu.vue';
    export default {
        mounted() {
            this.getHeight();
        },
        created() {
            this.getdata();
        },
        data() {
            return {
                tag_flag: false,
                screenHeight: { height: '' },
                list_1abel: [
                    { bgc: { 'background-color': '#87ceeb' }, text: 'javascript' },
                    { bgc: { 'background-color': '#db5640' }, text: 'Vue' },
                    { bgc: { 'background-color': '#b7eb8f' }, text: 'Webpack' },
                    { bgc: { 'background-color': '#786d5d' }, text: 'Node' },
                    { bgc: { 'background-color': '#e6bc3c' }, text: 'css' },
                    { bgc: { 'background-color': '#5e7ba7' }, text: 'HTML' },
                ],

                list: [

                ]
            }
        },
        components: {
            navmenu
        },
        methods: {
            getdata() {
                this.$http.get(this.GLOBAL.serverSrc + this.GLOBAL.serverPort + "/getArticleTitle")
                    .then(response => {
                        if (response.body.err_code === 0) {
                            this.list = response.body.message;
                            this.setTag();
                        } else if (response.body.err_code === 1) {
                            this.list = response.body.message;
                        } else if (response.body.err_code === 500) {
                            console.log(response);
                            Toast({
                                message: "获取数据失败,服务端异常",
                                position: 'top',
                                duration: 2000
                            })
                        }
                    })
            },
            getdataByTagName(tagname) {
                this.$http.get(this.GLOBAL.serverSrc + this.GLOBAL.serverPort + "/getArticleTitleByTag?tagname=" + tagname)
                    .then(response => {
                        console.log(response);
                        if (response.body.err_code === 0) {
                            this.list = response.body.message;
                            this.setTag();
                        } else if (response.body.err_code === 1) {
                            this.list = response.body.message;
                        } else if (response.body.err_code === 500) {
                            Toast({
                                message: "获取数据失败,服务端异常",
                                position: 'top',
                                duration: 2000
                            })
                        }
                    })
            },
            setTag() {
                let newlabel = [];
                for (let i = 0; i < this.list.length; i++) {
                    for (let j = 0; j < this.list[i].tags.length; j++) {
                        for (let temp = 0; temp < this.list_1abel.length; temp++) {
                            if (this.list_1abel[temp].text.toLowerCase() == this.list[i].tags[j].toLowerCase()) {
                                newlabel.push(this.list_1abel[temp]);
                            }
                            // console.log(this.list.length + ' ' + this.list[i].label.length + ' ' + this.list_1abel.length)
                        }
                    }
                    this.list[i].tags = newlabel;
                    newlabel = [];
                }
            },
            getHeight() {
                // window.onresize = () => {
                this.screenHeight.height = document.body.clientHeight + "px";
                // }
            },
            changeFlag() {
                this.tag_flag = !this.tag_flag;
            }
        }
    }
</script>

<style scoped lang="scss">
    /* 动画过渡 */
    .v-enter,
    .v-leave-to {
        -webkit-transform-origin: center;
        transform-origin: center;
        -webkit-transform: rotate3d(0, 0, 1, -200deg);
        transform: rotate3d(0, 0, 1, -200deg);
        opacity: 0;
    }

    .v-enter-active,
    .v-leave-active {
        transition: all 1.0s ease;
    }

    /* 下面的 .v-move 和 .v-leave-active 配合使用，能够实现列表后续的元素渐渐地漂上来的效果 */
    .v-move {
        transition: all 0.6s ease
    }

    .v-leave-active {
        position: absolute;
    }

    .cover1-enter-active {
        animation: In .5s;
    }

    .cover1-leave-active {
        animation: In .5s reverse;
    }

    .tag-enter-active {
        animation: fadeInRight .5s;
    }

    .tag-leave-active {
        animation: fadeInRight .5s reverse;
    }

    @keyframes fadeInRight {
        from {
            opacity: 0;
            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
        }

        to {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes In {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    /* 列表动画结束 */
    /* 当前页面全局样式 */
    li {
        list-style: none;
    }

    .hover {
        cursor: pointer;
    }

    /* 移动端样式 */
    @media only screen and (max-width: 768px) {
        .container {
            width: 100%;
            padding: 0;
        }

        .blog {
            max-width: 800px;
            min-height: 555px;
            padding: 0 .1rem;

            /* pc导航栏样式 */
            .nav-left {
                display: none;
            }

            /* 手机导航栏样式 */
            .nav-left-phone {
                width: 100%;
                height: 80px;
                background-color: #fff;
                text-align: center;
                position: fixed;
                top: 0;
                /* z-index: 0; */

                .nav-all {
                    line-height: 80px;
                    color: #c1866a;
                    position: absolute;
                    left: 10px;

                    span {
                        font-size: 30px;
                    }
                }

                /* .triangle {
                    border-top: 1px solid #000;
                    border-left: 1px solid #000;

                } */

                span {
                    line-height: 80px;
                    color: #c1866a;
                    font-weight: 700;
                }

                .tag {
                    position: absolute;
                    right: 10px;
                    line-height: 80px;
                    color: #c1866a;
                    font-size: 45px;
                }

                .hiddendemo {
                    width: 70%;
                    background-color: hsla(0, 0%, 100%, .8);
                    float: right;
                    color: #c1866a;
                    /* margin-top: 80px; */
                    z-index: 1;

                    h3 {
                        margin: 20px 0;
                        color: inherit;
                    }

                    .line {
                        width: 90%;
                        color: inherit;
                        margin: 0 auto;
                        border-top: 1px solid #c1866a;
                        margin-bottom: 20px;
                    }
                    .label-tag {
                        margin: 10px;
                        line-height: 15px;
                        display: inline-block;
                        height: 20px;
                        color: #fff
                    }
                }

                .cover {
                    position: absolute;
                    width: 100%;
                    top: 0;
                    background-color: rgba(0, 0, 0, 0.5);
                }


            }
            .main {
                width: 100%;
                min-height: 555px;
                margin-top: 80px;
            }

            section {
                margin: 40px auto;
                width: 95%;
                padding: 10px;
                background-color: #fafbf6;
            }

            .box {
                width: 100%;
                border: 1px dashed #c9c9c9;
                padding: 30px 20px;

                a:hover {
                    text-decoration: none;
                }

                a {
                    color: #f00;
                }

                h2 {
                    margin-top: 33px;
                    text-align: center;
                    color: #f00;
                    font-size: 25px;
                    line-height: 30px;
                    margin-bottom: 10px;
                }

                time {
                    display: block;
                    text-align: center;
                    color: #b2b2ae;
                    font-size: 14px;
                    margin-bottom: 22px;
                    line-height: 19px;
                }

                .content {
                    a {
                        color: #b2b2ae;
                    }
                }

                .reply {
                    margin: 20px 0;
                    text-align: center;

                    span {
                        font-size: 3.0em;
                        color: #999;
                    }

                    .text {
                        margin-top: -30px;
                        font-weight: 700;
                        font-size: 15px;
                    }

                    span:hover {
                        color: #f00;
                    }
                }

                ul {
                    padding: 0px;
                    margin-bottom: 50px;

                    li {
                        margin-right: 10px;

                        float: left;
                    }

                    a:hover {
                        text-decoration: none;
                    }
                }

            }
        }
    }

    /* pc端样式 */
    @media only screen and (min-width: 768px) {

        .blog {
            width: 800px;
            min-height: 650px;
            margin: 0 auto;

            /* 手机导航栏样式 */
            .nav-left-phone {
                display: none;
            }

            /* pc导航栏样式 */
            .nav-left {
                width: 200px;
                min-height: 650px;
                /* background-color: skyblue; */
                position: fixed;
                top: 0px;
                left: calc((100% - 850px) / 2);
                margin-top: 20px;

                ul {
                    span {
                        margin: 10px 10px 5px 10px;
                        font-size: 12px;
                    }

                    li {
                        margin-top: 10px;
                    }
                }
            }

            .main {
                /* margin-bottom: 100px; */
                padding-left: 200px;
                width: 800px;
                min-height: 650px;
            }

            section {
                margin: 40px 0;
                width: 100%;
                padding: 10px;
                background-color: #fafbf6;
            }

            .box {
                width: 100%;
                border: 1px dashed #c9c9c9;
                padding: 30px 20px;

                a:hover {
                    text-decoration: none;
                }

                a {
                    color: #f00;
                }

                h2 {
                    margin-top: 33px;
                    text-align: center;
                    color: #f00;
                    font-size: 25px;
                    line-height: 30px;
                    margin-bottom: 10px;
                }

                time {
                    display: block;
                    text-align: center;
                    color: #b2b2ae;
                    font-size: 14px;
                    margin-bottom: 22px;
                    line-height: 19px;
                }

                .content {
                    a {
                        color: #b2b2ae;
                    }
                }

                .reply {
                    margin: 20px 0;
                    text-align: center;

                    span {
                        font-size: 3.0em;
                        color: #999;
                    }

                    .text {
                        margin-top: -30px;
                        font-weight: 700;
                        font-size: 15px;
                    }

                    span:hover {
                        color: #f00;
                    }
                }

                ul {
                    padding: 0px;
                    margin-bottom: 50px;

                    li {
                        margin-right: 10px;

                        float: left;
                    }

                    a:hover {
                        text-decoration: none;
                    }
                }

            }
        }
    }
</style>