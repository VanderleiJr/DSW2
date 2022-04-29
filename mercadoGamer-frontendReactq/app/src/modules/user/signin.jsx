import signin from '../../styles/user/signin.module.css';

import React, {Component} from "react";
import axios from 'axios';

export default class SignInUser extends Component {

    constructor(){
        super()
        this.state = {cpf: '', password: ''}
    }

    cpfChange = event => {
        this.setState({
            cpf: event.target.value
        });
    }

    passwordChange = event => {
        this.setState({
            password: event.target.value
        });
    }

    signin_user = async event => {
        event.preventDefault();
        try {
            await axios.post('http://127.0.0.1:8000/user/signin', this.state).then(response => {
                localStorage.setItem('token', response.data.access_token)
            })

            window.location.href = '/user/home'
        } catch(e) {
            if(e.message.includes('404')) {
                window.alert('Usuário Não Encontrado!')
            } if(e.message.includes('400')) {
                window.alert('Senha Incorreta!')
            }
        }
    }

    render(){
        return (
            <div className={signin.pagina}>
                <div className={signin.form}>
                    <div className={signin.login}>
                        <div className={signin.cabecalho}>
                            <h3>Login de Usuário</h3>
                        </div>
                    </div>

                    <form id="form_signin_user" className="formulario_login" onSubmit={this.signin_user}>
                        <input type="number" id="cpf" placeholder="CPF" onChange={this.cpfChange} required /><br /><br />
                        <input type="password" id="password" placeholder="Senha" onChange={this.passwordChange}  required /><br /><br />
                        <input className={signin.btn} type="submit" value="Entrar"/>
                    </form>
                    <br />
                    <form action="/">
                        <input className={signin.btn} type="submit" value="Voltar ao início" />
                    </form>
                </div>
            </div>
        )
    }
}