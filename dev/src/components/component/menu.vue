<template>
    <div class="clearfix">
        <div class="box-nav" @click="changeStyle">
            <transition-group name="nav-item">
                <div class="item-nav" v-for="(item,i) in itemStyle" :style="item" :key="i+'item'"></div>
            </transition-group>
        </div>
        <div class="cover" @click="changeStyle" v-show="!flag">


            <div class="menu" v-show="!flag">
                <transition-group name="menu">
                    <router-link class="control" v-for="(item,i) in menu" :key="i+'b'" :style="item.position"
                        :to="item.url">
                        <div>
                            <span :class="item.icon"></span>
                            <p>{{item.content}}</p>

                        </div>
                    </router-link>
                </transition-group>
            </div>

        </div>
    </div>


</template>

<script>
    export default {
        data() {
            return {
                flag: true,
                itemStyle: [
                    { "top": "0px", "left": "0px" },
                    { "top": "0px", "left": "10px" },
                    { "top": "0px", "left": "20px" },

                    { "top": "10px", "left": "0px" },
                    { "top": "10px", "left": "10px" },
                    { "top": "10px", "left": "20px" },

                    { "top": "20px", "left": "0px" },
                    { "top": "20px", "left": "10px" },
                    { "top": "20px", "left": "20px" }
                ],
                itemStyleOld: [
                    { "top": "0px", "left": "0px" },
                    { "top": "0px", "left": "10px" },
                    { "top": "0px", "left": "20px" },

                    { "top": "10px", "left": "0px" },
                    { "top": "10px", "left": "10px" },
                    { "top": "10px", "left": "20px" },

                    { "top": "20px", "left": "0px" },
                    { "top": "20px", "left": "10px" },
                    { "top": "20px", "left": "20px" }
                ],
                itemStyleNew: [
                    { "top": "4px", "left": "4px" },
                    { "top": "4px", "left": "10px" },
                    { "top": "4px", "left": "16px" },

                    { "top": "10px", "left": "4px" },
                    { "top": "10px", "left": "10px" },
                    { "top": "10px", "left": "16px" },

                    { "top": "16px", "left": "4px" },
                    { "top": "16px", "left": "10px" },
                    { "top": "16px", "left": "16px" }
                ],
                menu: [
                    {
                        content: 'Home',
                        position: { "top": "0px", "left": "0px" },
                        icon: 'mui-icon mui-icon-home',
                        url: '/'
                    },
                    {
                        content: 'Blog',
                        position: { "top": "0px", "left": "140px" },
                        icon: 'mui-icon mui-icon-compose',
                        url: '/blog'
                    },
                    {
                        content: 'Message',
                        position: { "top": "0px", "left": "280px" },
                        icon: 'mui-icon mui-icon-chat',
                        url: '/message'
                    },
                    {
                        content: 'Archiving',
                        position: { "top": "140px", "left": "0px" },
                        icon: 'mui-icon-extra mui-icon-extra-dictionary',
                        url: '/archiving'
                    },
                    {
                        content: 'Me',
                        position: { "top": "140px", "left": "140px" },
                        icon: 'mui-icon mui-icon-person-filled',
                        url: '/me'
                    },
                    {
                        content: 'Github',
                        position: { "top": "140px", "left": "280px" },
                        icon: 'mui-icon mui-icon-person-filled',
                        url: '/'
                    }
                ]
            }
        },
        methods: {
            changeStyle() {
                if (this.flag) {
                    this.itemStyle = this.itemStyleNew;
                } else {
                    this.itemStyle = this.itemStyleOld;
                }
                this.flag = !this.flag;
            },
        }
    }
</script>

<style lang="scss" scoped>
    /* 组件切换动画 */
    .nav-item-move {
        transition: transform 0.5s;
    }

    .menu-enter-active,
    .menu-leave-active {
        transition: all 0.8s;
    }

    .menu-enter,
    .menu-leave-to {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
        position: absolute
    }





    .all {
        width: 100%;
        height: 100%;

        z-index: 1
    }

    .cover {
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;

    }

    .box-nav {
        width: 25px;
        height: 25px;
        position: fixed;
        top: 10px;
        left: 10px;

        .item-nav {
            width: 5px;
            height: 5px;
            position: absolute;
            background-color: #c1866a;
        }
    }


    @media only screen and (max-width: 768px) {
        .menu {
            position: absolute;

            top: calc(50% - 140px);
            left: calc(50% - 210px);

            .control {
                height: 120px;
                width: 120px;
                border: 1px solid #dbdbdb1a;
                position: absolute;
                text-align: center;
                display: block;
                color: #fff;

                div {
                    margin-top: 30px;
                    color: inherit;
                }

                a {
                    color: inherit;
                    text-decoration: none;
                }

                span {
                    font-size: 40px;
                }

                p {
                    color: inherit;
                }

            }

            .control:hover {
                color: #cdc5b4;
                transition: all 0.6s ease;
            }
        }
    }

    @media only screen and (min-width: 768px) {
        .menu {
            position: absolute;

            top: calc(50% - 140px);
            left: calc(50% - 210px);

            .control {
                height: 120px;
                width: 120px;
                border: 1px solid #dbdbdb1a;
                position: absolute;
                text-align: center;
                display: block;
                color: #fff;

                div {
                    margin-top: 30px;
                    color: inherit;
                }

                a {
                    color: inherit;
                    text-decoration: none;
                }

                span {
                    font-size: 40px;
                }

                p {
                    color: inherit;
                }

            }

            .control:hover {
                color: #cdc5b4;
                transition: all 0.6s ease;
            }
        }
    }
</style>