import React, {Component} from "react";
import axios from 'axios';

import home from '../../styles/company/home.module.css';

export default class HomeCompany extends Component {

    constructor(){
        super()
        this.state = {name: '', email: '', cnpj: '', description: '', 
                    game_code: '', amount: '', customer_cpf: '',
                    product_code: '', s_amount: ''}
        this.listOrders = []
        this.listProducts = []
    }

    home = async event => {
        try{
            const response = await axios.get('http://127.0.0.1:8000/company/home', {
                headers: { Authorization: `Bearer ` + localStorage.getItem('token') }
            })
            this.setState({name: response.data.name, email: response.data.email, cnpj: response.data.cnpj, description: response.data.description})
        } catch (e) {
            if(e.message.includes('401')) {
                alert('Logue-se como empresa para acessar... Redirecionando')
                window.location.href = '/company/signin'
            } 
        }
    }

    orders = async event => {
        const response = await axios.get('http://127.0.0.1:8000/company/orders', {
            headers: { Authorization: `Bearer ` + localStorage.getItem('token') }
        })

        if(response.status === 204){
            this.listOrders.push(<p>Você não tem nenhum pedido!</p>)
        } else {
            response.data.forEach(data_item => {
                this.setState({game_code: data_item.game_code, amount: data_item.amount, customer_cpf: data_item.customer_cpf})
                let obj = {game_code: data_item.game_code, amount: data_item.amount, customer_cpf: data_item.customer_cpf}

                this.listOrders.push({obj})
            })
        }
    }

    products = async event => {
        const response = await axios.get('http://127.0.0.1:8000/company/products', {
            headers: { Authorization: `Bearer ` + localStorage.getItem('token') }
        })

        if(response.status === 204){
            this.listProducts.push(<p>Seu stock está vazio!</p>)
        } else {
            response.data.forEach(data_item => {
                this.setState({product_code: data_item.product_code, s_amount: data_item.amount})
                let obj = {product_code: data_item.product_code, s_amount: data_item.amount}

                this.listProducts.push({obj})
            })
        }
    }

    componentDidMount(){
        this.home()
        this.orders()
        this.products()
    }

    logout(){
        localStorage.clear()
        window.location.href = '/'
    }

    render(){
        return (
            <div>
                <div id="full_header" className={home.container}>
                    <header>{this.state.name} - Página Inicial Empresarial</header><br/>
                    <button type="button" onclick={this.logout()} id="botao_logout">🚪</button>
                </div>
            
                <div className={home.container} id="main_container">
                    <div id="dados_empresa" className={home.dados_empresa}>
                        <div id="home_company_profile">
                            <h2>Dados da Empresa:</h2>
                            <p>{this.state.name}</p>
                            <p>{this.state.cnpj}</p>
                            <p>{this.state.email}</p>
                            <p>{this.state.description}</p>
                        </div>
                        <div className={home.container_reverse}>
                            <form action="/company/edit">
                                <input type="submit" value="Editar"/>
                            </form>
                        </div>
                    </div>
            
                    <div id="pedidos" className={home.pedidos}>
                        <div id="home_company_orders">
                            <a href="../company/orders.html"><h2>Pedidos recebidos:</h2></a>
                            <ul>
                                {this.listOrders.map((itens, i) => (<li key={i}>{itens.obj.game_code} x {itens.obj.amount} - Comprados pelo usuário {itens.obj.customer_cpf}</li>))}
                            </ul>
                        </div>
            
                    </div>
            
            
                    <div id="catalogo" className={home.catalogo}>
                        <a href="../company/products.html"><h2>Produtos em catálogo:</h2></a>
                        <div id="home_company_products">
                        <ul>
                            {this.listProducts.map((itens, i) => (<li key={i}>Item: {itens.obj.product_code}, há no estoque {itens.obj.s_amount} unidades disponíveis!</li>))}
                        </ul>
                        </div>
                    </div>
                </div>
                <div className={home.footer2}>
                    <div id="funcoes_admin" className={home.funcoes_admin}>
                        <h4>Funções Administrador</h4>
                    </div>
            
                    <form id="form_new_stock" className={home.form_new_stock}>
                        <h5>Cadastrar produto no Estoque</h5>
                        <input type="number" id="upc_ean" placeholder="Código do Produto" required/>
                        <input type="number" id="amount" placeholder="Quantidade" required/>
                        <button type="button" id="btn_stock">Estocar</button>
                    </form>
            
                    <div id="botoes" className={home.buttons_container}>
                        <h5>Cadastrar produto no Banco de Dados</h5>
                        <form action="products/new.html">
                            <input type="submit" value="Acessar Banco de Dados"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}