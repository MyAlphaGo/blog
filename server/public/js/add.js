var app = new Vue({
    el: '#app',
    data: {
        title: '',
        content: '',
        label: [
            { name: 'javascript', flag: false },
            { name: 'Vue', flag: false },
            { name: 'Webpack', flag: false },
            { name: 'css', flag: false },
            { name: 'HTML', flag: false },
            { name: 'Node', flag: false },
        ]
    },
    components: {
        'tinymce-editor': Editor // <- Important part
    },
    methods: {
        add() {
            let tag = [];
            this.label.forEach(element => {
                if (element.flag) {
                    tag.push(element.name);
                }
            });
            this.$http.post('http://127.0.0.1:3000/adddata', {
                title: this.title,
                content: this.content,
                tag: tag
            }, {
                    crossOrigin: true,
                    OK: true
                }).then(response => {
                    if (response.body.err_code === 0) {
                        alert(response.body.message);
                    } else {
                        alert(response.body.message);
                    }
                })
        },
        alert(i) {
            this.label[i].flag = !this.label[i].flag;
        }

    }
})