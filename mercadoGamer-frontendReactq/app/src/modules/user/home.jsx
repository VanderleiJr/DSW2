import React, {Component} from "react";
import axios from 'axios';

import home from '../../styles/user/home.module.css';

export default class HomeUser extends Component {
    
    constructor(){
        super()
        this.state = {name: '', email: '', telephone: '', birth_date: '', 
                    game_code: '', amount: '', market_cnpj: ''}
        this.listOrders = []
    }

    home = async event => {
        try{
            const response = await axios.get('http://127.0.0.1:8000/user/home', {
                headers: { Authorization: `Bearer ` + localStorage.getItem('token') }
            })
            this.setState({name: response.data.name, email: response.data.email, telephone: response.data.telephone, birth_date: response.data.birth_date})
        } catch (e) {
            if(e.message.includes('401')) {
                alert('Logue-se como usuário para acessar... Redirecionando')
                window.location.href = '/user/signin'
            } 
        }
    }

    orders = async event => {
        const response = await axios.get('http://127.0.0.1:8000/user/orders', {
            headers: { Authorization: `Bearer ` + localStorage.getItem('token') }
        })

        if(response.status === 204){
            this.listOrders.push(<p>Você não fez nenhum pedido!</p>)
        } else {
            response.data.forEach(data_item => {
                this.setState({game_code: data_item.game_code, amount: data_item.amount, market_cnpj: data_item.market_cnpj})
                let obj = {game_code: data_item.game_code, amount: data_item.amount, market_cnpj: data_item.market_cnpj}

                this.listOrders.push({obj})
            })
        }
    }

    marketplace(){
        window.location.href = '/market/market'
    }

    logout(){
        localStorage.clear()
        window.location.href = '/'
    }

    componentDidMount(){
        this.home()
        this.orders()
    }

    render(){
        return (
            <div>
                <div className={home.container}>
                    <div className={home.header2}>Home - Perfil</div><br/>
                    <div id={home.botoes}>
                            <button type="button" onClick={this.marketplace}>🛒</button>
                            <button type="button" onClick={this.logout}>🚪</button>
                    </div>
                </div>

                <div className={home.container}>
                    <div id={home.dados_usuario}>
                        <h2>Seus Dados:</h2>
                        <div id={home.home_user_profile}>
                            <p>{this.state.name}</p>
                            <p>{this.state.email}</p>
                            <p>{this.state.telephone}</p>
                            <p>{this.state.birth_date}</p>
                        </div>

                        <div id={home.botao_editar} className={home.container_reverse}>
                            <form action="/user/edit.html">
                                <input type="submit" value="🖉"/>
                            </form>
                        </div>
                    </div>


                    <div id={home.home_user_orders} className={home.home_user_orders}>
                        <a href="/user/orders.html"><h2>Seus Pedidos:</h2></a>
                        <ul>
                            {this.listOrders.map((itens, i) => (<li key={i}>{itens.obj.game_code} x {itens.obj.amount} - Comprados na empresa {itens.obj.market_cnpj}</li>))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}