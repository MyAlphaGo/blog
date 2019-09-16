<template>
    <div>
        <navmenu></navmenu>
        
        <transition>
            <router-view></router-view>
        </transition>





    </div>
</template>

<script>
    import "./css/animate.css";
    import navmenu from './components/component/menu.vue';
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            changeStyle() {
                // if (this.GLOBAL.flag) {
                //     this.itemStyle = this.itemStyleNew;
                // } else {
                //     this.itemStyle = this.itemStyleOld;
                // }
                this.GLOBAL.flag = !this.GLOBAL.flag;
            },
            cahngeflag(){
                this.flag = ! this.flag;
            }
        },
        components: {
            navmenu
        }
    }
</script>

<style lang="scss">
    

    .clearfix:after {
        /*伪元素是行内元素 正常浏览器清除浮动方法*/
        content: "";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }

    .clearfix {
        *zoom: 1;
        /*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
    }

    /* 组件切换动画 */
    .v-enter {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
        position: absolute
    }

    .v-leave-to {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
        position: absolute
    }

    .v-enter-active,
    .v-leave-active {
        transition: all 1s ease;
    }

    navmenu {
        z-index: 1;
    }

    /* 全局样式 */
    * {
        margin: 0;
        padding: 0;
    }

    .fl {
        float: left;
    }

    .fr {
        float: right;
    }

    .hover {
        cursor: pointer;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none !important;
    }
</style>