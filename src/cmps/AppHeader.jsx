import { useDispatch ,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {logout } from '../store/user.action'


export function AppHeader() {
    const { user } = useSelector(state => state.userModule)
    const dispatch = useDispatch()

    const onLogOut = () => {
        console.log('logout');
        dispatch(logout())
    }


    return (
        <section className="app-header" >
            <div className="app-header-container flex row">
                <div className='logo flex align-center'>
                    <img src="imgs/icon/melody.png" alt="" className='img-logo' />
                </div>

                {user ? <div className="user-login flex">
                    <h3>Hi! {user.userName}</h3> |
                    <button className="log-out" onClick={onLogOut}>Log Out</button>
                </div> :
                    <div className="header-link-btns flex">
                        <Link to={'/'}>Sign up</Link>|
                        <Link to={'/login'}>Log in</Link>
                    </div>}
            </div>


        </section>
    )
}