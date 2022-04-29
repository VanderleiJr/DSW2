import signup from '../../styles/company/signup.module.css';

export default function SignUpCompany() {
    return (
        <div className={signup.pagina}>
            <div className={signup.form}>
                <div className={signup.login}>
                    <div className={signup.cabecalho}>
                        <h3>Cadastro de Empresa</h3>
                    </div>
                </div>

                <form id="form_signup_company">
                    <label>CNPJ da Empresa</label><br/>
                    <input type="number" id="cnpj" placeholder="12345678000109" required/><br/><br/>
                    <label>Nome da Empresa</label><br/>
                    <input type="text" id="name" placeholder="Nome da empresa" required/><br/><br/>
                    <label>Email</label><br/>
                    <input type="email" id="email" placeholder="email@email.com" required/><br/><br/>
                    <label>Senha</label><br/>
                    <input type="password" id="password" placeholder="Senha" required/><br/><br/>
                    <label>Breve descrição da Empresa</label><br/>
                    <textarea id="description" rows="10" cols="34" placeholder="Insira uma descrição para sua empresa"></textarea><br/><br/>
                    <input id={signup.btn} type="submit" value="Cadastrar"/>
                </form>
                <br/>
                <form action="/">
                    <input id={signup.btn} type="submit" value="Voltar ao início"/>
                </form>
            </div>
        </div>
    )
}