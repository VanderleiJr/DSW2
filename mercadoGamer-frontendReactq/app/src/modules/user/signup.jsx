import signup from '../../styles/user/signup.module.css';

export default function SignUpUser() {
    return (
        <div className={signup.pagina}>
            <div className={signup.form}>
                <div className={signup.cadastro}>
                    <div className={signup.cabecalho}>
                        <h3>Cadastro de Usuário</h3>
                    </div>
                </div>

                <form id="form_signup_user">
                    <label>CPF</label><br/>
                    <input type="number" id="cpf" placeholder="12345678900" required/><br/><br/>
                    <label>Nome Completo</label><br/>
                    <input type="text" id="name" placeholder="Insira seu nome..." required/><br/><br/>
                    <label>Sexo</label><br/>
                    <input type="text" id="sex" placeholder="Insira seu sexo..." required/><br/><br/>
                    <label>Email</label><br/>
                    <input type="email" id="email" placeholder="email@email.com" required/><br/><br/>
                    <label>Telefone</label><br/>
                    <input type="tel" id="telephone" placeholder="(12)34567-8900" pattern="\([0-9]{2}\)[0-9]{5}-[0-9]{4}" required/><br/><br/>
                    <label>Data de Nascimento</label><br/>
                    <input type="date" id="birth_date" required/><br/><br/>
                    <label>Senha</label><br/>
                    <input type="password" id="password" placeholder="Insira sua senha..." required/><br/><br/>
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