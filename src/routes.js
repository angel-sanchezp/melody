import { HomePage } from './pages/HomePage.jsx'
import { AudiofyApp } from './pages/AudiofyApp';
import { Search } from './pages/Search.jsx';
import { AudioList } from './cmps/AudioList.jsx';
import {Login} from './cmps/Login'

// something
const routes = [
    {
        path: '/login',
        component:Login,
    },
    {
        path: '/audiolist',
        component:  AudioList,
    },
    {
        path: '/search',
        component: Search,
    },
    {
        path: '/audiofyapp',
        component: AudiofyApp,
    },
    {
        path: '/',
        component: HomePage,
    },

]

export default routes;