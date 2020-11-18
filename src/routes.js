import Signup from './components/Signup.vue';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Event from './components/Event.vue'

export const routes = [
    {path: '/', name:'Home', component: Home },
    {path: '/home', redirect: '/'},
    {path: '/signup', name:'Signup', component: Signup},
    {path: '/login', name:'Login', component: Login},
    { path: '/event/:id', component: Event }
];