import { Link } from 'react-router-dom'

export function AppHeader() {


    return (
        <section className="app-header" >
            <div className="app-header-container flex row">
                <div className='logo flex align-center'>
                    <img src="imgs/icon/melody.png" alt="" className='img-logo'/>
                </div>


                <div className="header-link-btns flex">
                    <Link to={'/'}>Sign up</Link>|
                    <Link to={'/login'}>Log in</Link>
                </div>
            </div>


        </section>
    )
}