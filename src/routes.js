import Signup from './components/Signup.vue';
import Home from './components/Home.vue';

export const routes = [
    {path: '/', name:'Home', component: Home },
    {path: '/home', redirect: '/'},
    {path: '/signup', name:'Signup', component: Signup},
];