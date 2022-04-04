import { httpService } from './http.service';
import { storageLocal } from './storage-service'

const STORAGE_KEY_LOGGEDIN = 'loggedinUser';
const KEY_UDB = 'UsersDB'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    getGuestUser,
    getUsers,
    _getUsers,
    googleLogin


};

var users = [
    {
        _id: "u101",
        userName: "Angelica Serebnitski",
        email:"angelsa9292@gmail.com",
        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1643705658/gobnb/angel1_cegsqk.jpg",
        password: 'Angel123'
    },
    {
        _id: "u102",
        userName: "Dana Garcia",
        email:"dana@gmail.com",
        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1643705658/gobnb/angel1_cegsqk.jpg",
        password: 'dana123'
    }
]

function _getUsers() {
    return users
}

async function login(credentials) {
    console.log(credentials)
    const users = await storageLocal.loadFromStorage(KEY_UDB) || _getUsers()
    const user = users.find(user => user.email === credentials.email &&
        user.password === credentials.password)
        // const user = await httpService.post('auth/login', credentials)
        if (user) {
            _setLoggedinUser(user)
            console.log(user)
            return user
            
        }
    }
    
    async function googleLogin(tokenId) {
        
        try {
            const user = await httpService.post('auth/googlelogin', { tokenId })
        if (user) {
            _setLoggedinUser(user);
            return user
        }
    } catch (err) {
        throw err
    }
}

async function signup(newUser) {
    const user = await httpService.post('auth/signup', newUser);
    _setLoggedinUser(user);
    return user;
}

async function logout() {
    // await httpService.post('auth/logout');
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, null);
    return;
}


function getGuestUser() {
    return { username: 'Guest', password: 'guest' }
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN));
}


function _setLoggedinUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user));
}

async function getUsers() {
    const users = _getUsers()
    // const users = await httpService.get(`user`)
    return users
}
