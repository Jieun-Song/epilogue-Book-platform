import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
// import VueAxios from "vue-axios";
import VueRouter from "vue-router";

// Vue.config.globalProperties.axios = axios;
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(VueRouter);
Vue.use(axios);
// Vue.use(VueAxios);
import { MainPage, LoginPage, RegisterPage, DetailPage, DetailPage2, DetailPage3, PostUploadPage, ListPage, UserProfile, FAQPage, AboutPage, ContactPage } from "./pages";

const routes = [{
        path: "/",
        component: MainPage,
    },
    {
        path: "/login",
        component: LoginPage,
    },
    {
        path: "/register",
        component: RegisterPage,
    },
    {
        path: "/detail/:postId",
        component: DetailPage,
    },
    {
        path: "/detail2",
        component: DetailPage2,
    },
    {
        path: "/detail3",
        component: DetailPage3,
    },
    {
        path: "/postUpload/:postId",
        component: PostUploadPage,
    },
    {
        path: "/list",
        component: ListPage,
    },
    {
        path: "/userProfile",
        component: UserProfile,
    },
    {
        path: "/FAQ",
        component: FAQPage,
    },
    {
        path: "/about",
        component: AboutPage,
    },
    {
        path: "/contact",
        component: ContactPage,
    },
];

const router = new VueRouter({
    routes,
});

new Vue({
    render: (h) => h(App),
    router,
}).$mount("#app");