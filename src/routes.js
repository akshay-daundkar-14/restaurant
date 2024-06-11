
import {createRouter,createWebHistory} from 'vue-router';
import SignUp  from "./components/SignUp.vue";
import HomeComp  from "./components/Home.vue";
import LoginComp  from "./components/Login.vue";
import AddResto  from "./components/Add.vue";
import EditResto  from "./components/Edit.vue";
import PageNotFound  from "./components/PageNotFound.vue";


const routes = [
    
    {
        name:'Home',
        component:HomeComp,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'Login',
        component:LoginComp,
        path:'/login'
    },    
    {
        name:'AddResto',
        component:AddResto,
        path:'/add'
    },
    {
        name:'EditResto',
        component:EditResto,
        path:'/edit/:id'
    },





    {
        name:'PageNotFound',
        component:PageNotFound,
        path:'/:PathMatch(.*)*'
    },
];


const routers = createRouter({
    history: createWebHistory(),
    routes
});

export default routers;