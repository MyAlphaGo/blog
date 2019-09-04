<template>
    <form class="reply-box posTop" action="/pinglun" method="POST">
        <h3>发表评论</h3>
        <div class="msg">
            <span class="item-tip">说点什么吧</span>
            <textarea placeholder="Say something ..." maxlength="200" class="input-clear item-input"
                v-model="content" required></textarea>
            <div class="item name">
                <span class="item-tip">昵称:</span>
                <input type="text" placeholder="昵称会被公开显示" maxlength="20" class="input-clear item-input" v-model="name" required
            </div>
        </div>
        <input type="submit" class="btn-clear submit" value="发表评论" v-on:click.prevent="submitCommit">
    </form>
</template>

<script>
    export default {
        name: 'comment',
        data() {
            return {
                name: '',
                content: ''
            }
        },
        methods: {
            submitCommit(){
                this.$http.post("http://127.0.0.1:3000/pushComment",{
                    id: this.$route.query.id,
                    name: this.name,
                    content: this.content,
                    ctime: new Date().toString()
                })
                .then(response=>{
                    if(response.body.err_code === 0){
                        this.$router.go(0);
                    }else {
                        alert(response.body.message)
                    }
                })
                .catch(error=>{

                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .reply-box {
        width: 100%;
        text-align: center;

        h3 {
            font-size: 1.17em;
            font-weight: 700;
            text-align: center;
            padding: 15px 0;
            color: #c1866a;
        }

        .msg {
            text-align-last: left;

            .item-tip {
                font-size: 12px;
                margin-bottom: 4px;
                display: block;
                color: #bba477;
                margin-top: 10px;
            }

            .item-input {
                width: 100%;
                background: hsla(40, 33%, 60%, .4);
                border: 1px solid #bba477;
                min-height: 35px;
                text-indent: 1em;
                color: #c1866a;
                margin: 0;
                padding: 0;
            }

            textarea {
                line-height: 24px;
                padding: 8px 0;
                height: 80px;
                resize: none;
            }

        }

        .submit {
            margin-top: 15px;
            width: 120px;
            height: 40px;
            background: -webkit-linear-gradient(left, hsla(40, 33%, 60%, .99), #c1866a 100%);
            color: #fff;
            border: 1px solid #bba477;
            border-radius: 20px;
        }
    }
</style>