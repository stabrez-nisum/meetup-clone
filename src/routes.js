import Signup from './components/Signup.vue';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Event from './components/Event.vue';
import UserProfile from './components/UserProfile.vue';
import CreateEvent from './components/CreateEvent.vue';

export const routes = [
    {path: '/', name:'Home', component: Home },
    {path: '/home', redirect: '/'},
    {path: '/signup', name:'Signup', component: Signup},
    {path: '/create/event', name:'CreateEvent', component: CreateEvent},
    {path: '/login', name:'Login', component: Login},
    {path: '/event/:type/:id', component: Event },
    {path: '/profile', name:'Profile', component: UserProfile }
];