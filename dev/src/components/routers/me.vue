<!-- <template>
        <div class="container">
            <h3>me</h3>
        </div>
    </template>
    
    <script>
    
    </script>
    
    <style scoped lang="scss">
    
    </style> -->

<template>
    <div class="all">
        <!-- <div class="box" @click="changeStyle">
            <transition-group>
                <div class="item" v-for="(item,i) in itemStyle" :style="item" :key="i+'item'"></div>
            </transition-group>
        </div> -->
        <div class="cover">
            <div class="menu">
                <div class="control" v-for="(item,i) in menu" :key="i+'b'" :style="item.position">
                    <div>
                        <router-link :to="item.url">
                            <span :class="item.icon"></span>
                            <p>{{item.content}}</p>
                        </router-link>

                    </div>
                </div>
            </div>
        </div>
        <div>

        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                flag: true,
                n: '150',
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
            beforEnter(el) {

            },
            enter(el, done) {
                el.offsetWidth;
                if (this.flag) {
                    this.itemStyle = this.itemStyleNew;
                } else {
                    this.itemStyle = this.itemStyleOld;
                    el.style.transition = "all 1s ease";
                }
                done();
            },
            afterEnter(el) {
                this.flag = !this.flag;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .all {
        width: 100%;
        height: 100%;
    }

    .box {
        width: 25px;
        height: 25px;
        position: relative;

        .item {
            width: 5px;
            height: 5px;
            position: absolute;
            background-color: skyblue;
        }


    }

    .cover {
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;

    }


    @media only screen and (max-width: 768px) {}

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

                div {
                    margin-top: 30px;
                    color: #fff;
                }

                div:hover {
                    color: #cdc5b4;
                    transition: all 0.6s ease;
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


        }
    }
</style>