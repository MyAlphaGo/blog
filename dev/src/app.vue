<template>
    <div>

        <transition>
            <router-view></router-view>
        </transition>

        <!-- <div class="home-icon">
            <a href="/">
                <span class="mui-icon mui-icon-home"></span>
            </a>
        </div> -->

        <!-- </div> -->


    </div>
</template>

<script>
    import "./css/animate.css"
    export default {
        data() {
            return {
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss">
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

    .home-icon {
        position: fixed;
        top: 50px;
        left: 50px;
        color: #000;
        span {
            font-size: 40px;
        }
        /* border: 1px solid #fff; */
    }
</style>