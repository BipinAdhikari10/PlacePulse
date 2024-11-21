import VueRouter from "vue-router";
import Vue from "vue";
// import { component } from "vue/types/umd";
import MyHome from "./components/MyHome.vue";
import RegisterUser from "./components/RegisterUser.vue";
import LoginUser from "./components/LoginUser.vue";
import AddPlace from "./components/AddPlace.vue";
// import MyNavigation from "./components/MyNavigation.vue";
// import MyHome from "./components/MyHome.vue";
// import { component } from "vue/types/umd";
Vue.use(VueRouter)
const routes=[
    {
        path:"/",       
        component:MyHome,
    },
    {
        path:"/register",
        component:RegisterUser
    },
    {
        path:"/login",
        component:LoginUser
    },
    {
        path:"/addplace",
        component:AddPlace
    }
]

const router=new VueRouter({
mode:'history',
    routes

})
export default router