import {Component} from 'react'
import index from '../styles/public/index.module.css';

export class Footer extends Component {
    render() {
        return (
            <div className={index.footerG}>
                <h3>Trabalho desenvolvido por Vanderlei de Brito Junior e Vitor Sugaya</h3>
            </div>
        );
    }
}