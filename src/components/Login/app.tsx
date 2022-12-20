import ButtonBuy from '../Buttons/ButtonBuy/ButtonBuy'
import './index.css'
import { Link } from 'react-router-dom'

function LoginComponent(){
    return(
        <div className='containerLoginDad'>
            <section className='sessionTitleLogin'>
                <p>LOGIN</p>
            </section>
            <form action='/login' method='post'>
                <article className='containerFormsInput'>
                    <label>E-mail</label>
                    <input type="email" name="email" id="email" placeholder='Insira seu e-mail'/>
                    <label id='senha'>Senha</label>
                    <input type="password" name="senha"  placeholder='Insira sua senha'/>
                </article>
                <article className='containerButtonLogin'>
                    <ButtonBuy title='Login'></ButtonBuy>
                    <Link to='/cadastro'>Não possui uma conta ? <strong>Cadastre-se</strong></Link>
                </article>
            </form>
        </div>
    )
}

export default LoginComponent