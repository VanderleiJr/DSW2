import signin from '../../styles/company/signin.module.css';

import React, {Component} from "react";
import axios from 'axios';

export default class SignInCompany extends Component {

    constructor(){
        super()
        this.state = {cnpj: '', password: ''}
    }

    cnpjChange = event => {
        this.setState({
            cnpj: event.target.value
        });
    }

    passwordChange = event => {
        this.setState({
            password: event.target.value
        });
    }

    signin_company = async event => {
        event.preventDefault();
        try {
            await axios.post('http://127.0.0.1:8000/company/signin', this.state).then(response => {
                localStorage.setItem('token', response.data.access_token)
            })

            window.location.href = '/company/home'
        } catch(e) {
            if(e.message.includes('404')) {
                window.alert('Empresa Não Encontrado!')
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
                            <h3>Login de Empresa</h3>
                        </div>
                    </div>

                    <form id="form_signin_company" className="formulario-login" onSubmit={this.signin_company}>
                        <input type="number" id="cnpj" placeholder="CNPJ" onChange={this.cnpjChange} required/><br/><br/>
                        <input type="password" id="password" placeholder="Senha" onChange={this.passwordChange} required/><br/><br/>
                        <input id={signin.btn} type="submit" value="Entrar"/>
                    </form>
                    <br/>
                    <form action="/">
                        <input id={signin.btn} type="submit" value="Voltar ao início"/>
                    </form>
                </div>
            </div>
        )
    }
}