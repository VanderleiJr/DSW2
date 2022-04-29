import {Link} from 'react-router-dom';

import index from '../../styles/public/index.module.css';

export function Header() {
    return (
        <header>
            <h1>Mercado Gamer</h1>
        </header>
    )
}

export function UserArea(props) {
    return (
        <div className={index.container_left}>
            <Link to="/user/signup"><h2>SignUp Usuário</h2></Link>
            <Link to="/user/signin"><h2>SignIn Usuário</h2></Link>
        </div>
    )
}

export function CompArea(props) {
    return (
        <div className={index.container_right}>
            <Link to="/company/signup"><h2>SignUp Empresa</h2></Link>
            <Link to="/company/signin"><h2>SignIn Empresa</h2></Link>
        </div>
    )
}