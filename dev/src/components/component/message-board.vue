<template>
    <div>
        <div class="total">
            <span>留言总数: {{message.all}}</span>
        </div>
        <ul>
            <li v-for="item in message.comment" :key="item.id">
                <div>
                    <div class="img fl"><img :src="item.image" alt=""></div>
                    <div class="message fr">
                        <div class="top">
                            <span class="name">{{item.name}}</span>
                            <span class="time">{{item.time}}</span>
                            <span class="replay">回复</span>
                        </div>
                        <p>{{item.content}}</p>
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
                message: {
                    all: 0,
                    comment: []
                }
            }
        },
        created(){
            this.getdata();
        },
        methods: {
            getdata(){
                this.$http.get("http://127.0.0.1:3000/pullComment?id=" + this.$route.query.id)
                .then(res=>{
                    let data = res.body;
                    if(data.err_code === 0){
                        this.message.all = data.message.length;
                        this.message.comment = data.message;
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .total {
        line-height: 40px;

        span {
            color: #bba477;
            vertical-align: middle;
        }
    }

    ul {
        padding: 0;
        border-bottom: 1px dashed #bba477;

        li {
            width: 100%;
            padding: 40px 0;
            border-top: 1px dashed #bba477;
            font-size: 12px;
            color: #bba477;

            .img {
                width: 30px;
                height: 30px;
                border-radius: 50%;

                img {
                    width: 100%;
                    border-radius: 50%;
                }
            }

            .message {
                font-size: 12px;
                line-height: 16px;
                padding-left: 10px;
                width: calc(100% - 30px);

                .top span {
                    margin-left: 10px;

                }

                .time {
                    color: #bab2b2;
                }

                p {
                    color: #bba477;
                }
            }


        }
    }
</style>