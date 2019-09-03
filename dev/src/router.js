import VueRouter from "vue-router";

import blog from './components/routers/blog.vue';
import home from './components/routers/home.vue';
import example from './components/routers/example.vue';
import me from './components/routers/me.vue';
import archiving from './components/routers/archiving.vue';
import text from './components/routers/text.vue';
import show from './components/routers/show.vue';

import comment from './components/component/comments.vue';
import messageB from './components/component/message-board.vue';

let router = new VueRouter({
    routes: [
        { path: '/', component: home },
        { path: '/blog', component: blog },
        { path: '/example', component: example },
        { path: '/me', component: me },
        { path: '/archiving', component: archiving },
        { path: '/text', component: text },
        
        {
            path: '/show',
            component: show,
        },


    ],
    // linkActiveClass:
})
export default router