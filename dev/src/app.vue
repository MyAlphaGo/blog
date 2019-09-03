<template>
    <div class="container">
        <!-- <div class="container-fluid">
            <div class="container logo">
                <h1>AlphaGo</h1>
                <h3>曹林的个人博客</h3>
            </div>
            <div class="container navdome">
                <ul class="nav nav-tabs">
                    <li role="presentation" class="active">
                        <router-link to="/home">Home</router-link>
                    </li>
                    <li role="presentation">
                        <router-link to="/archiving">Archiving</router-link>
                    </li>
                    <li role="presentation">
                        <router-link to="/example">example</router-link>
                    </li>
                    <li role="presentation">
                        <router-link to="/me">me</router-link>
                    </li>
                    <li role="presentation" class="navbar-right">
                        <router-link to="/me" class="mui-icon mui-icon-search"></router-link>
                    </li>
                </ul>
            </div>
        </div>
        <router-view></router-view> -->
        <!-- <div :class="[in[ent],animated]"> -->

        <transition>
            <router-view></router-view>
        </transition>

        <!-- </div> -->


    </div>
</template>

<script>
    import "./css/animate.css"
    export default {
        data() {
            return {
                ent: 0,
                animated: 'animated',
                all: [],
                out: ["bounceOut", "rotateOut", "zoomOut"],
                in: ["bounceIn", "rotateIn", "zoomIn"]
            }
        },
        methods: {

        },
        watch: {
            "$route.path": function (newval, oldval) {
                this.ent = Math.floor(Math.random() * 3);
            }
        }
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
</style>