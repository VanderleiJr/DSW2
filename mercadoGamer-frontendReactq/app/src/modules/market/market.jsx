import React, {Component} from "react";
import axios from 'axios';

import market from '../../styles/market/market.module.css';

export default class Market extends Component {

    constructor(){
        super()
        this.state = {company_cnpj: '', amount: '', product_code: ''}

        this.listProducts = []
    }

    market = async event => {
        const response = await axios.get('http://127.0.0.1:8000/market', {
            headers: { Authorization: `Bearer ` + localStorage.getItem('token') }
        })
        if(response.status === 204){
            this.listProducts.push(<p>Você não fez nenhum pedido!</p>)
        } else {
            response.data.forEach(data_item => {
                this.setState({company_cnpj: data_item.company_cnpj, amount: data_item.amount, product_code: data_item.product_code})
                let obj = {company_cnpj: data_item.company_cnpj, amount: data_item.amount, product_code: data_item.product_code}

                this.listProducts.push({obj})
            })
        }
    }

    componentDidMount(){
        this.market()
    }

    userHome(){
        window.location.href = '/user/home'
    }

    render(){
        return (
        <div>
            <div className={market.container}>
                <div className={market.header2}>Mercado Gamer - Marketplace</div>
                <div id="botao_voltar" className={market.botao_voltar}>
                    <button type="button" onClick={this.userHome}>🚪</button>
                </div>
            </div>
        
            <div className={market.container}>
                <div id="market" className={market.market}>
                    <h2>Lista de Jogos em estoque neste momento:</h2>
                    {this.listProducts.map((itens, i) => (<li key={i}>O jogo: {itens.obj.product_code} possui {itens.obj.amount} cópias na empresa {itens.obj.company_cnpj}</li>))}
                </div>
            </div>
        </div>
        )
    }
}