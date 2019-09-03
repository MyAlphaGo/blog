<template>
    <tinymce-editor api-key="API_KEY" :init="{plugins: 'wordcount'}" v-model="content"></tinymce-editor>
</template>

<script>
    import Editor from '@tinymce/tinymce-vue';
    export default {
            data(){ /* Your data */ 
                return {
                    content: '',
                }
            },
            components: {
                'tinymce-editor': Editor // <- Important part
            },  
            methods: { /* Your methods */ }
    }
</script>