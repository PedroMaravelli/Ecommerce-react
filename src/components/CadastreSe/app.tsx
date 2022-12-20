import './index.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

function CadastreSeComponent (){
    return(
        <div>
            <article>
                <div>
                    <Link to='/'><img src={logo}></img></Link>
                </div>
                <div>
                    <p>Para mais informações entre em contato pelo telefone: (XX)- XXXXXXXX</p>
                    <p>Funcionamento: seg à sex das 9h às 18h</p>
                </div>
            </article>
            <article>
                <p>INSIRA SEUS DADOS </p>
            </article>
            <form action='/cadastro' method='post'>
                <article>
                    <div>
                        <label id='nome'>NOME</label>
                        <input type="text" name="nome" id="nome" placeholder='Insira seu Nome' />
                    </div>
                    <div>
                        <label id='sobrenome'>Sobrenome</label>
                        <input type="text" name="sobrenome" id="sobrenome" placeholder='Insira seu Sobrenome'/>
                    </div>
                </article>
                    <label id='email'>E-MAIL</label>
                    <input type="email" name="email" id="email" placeholder='Insira seu E-mail'/>
                <article>
                        <div>
                            <label id='dataNascimento'>DATA DE NASCIMENTO </label>
                            <input type="date" name="dataNascimento" id="dataNascimento" placeholder='Insira sua Data de nascimento'/>
                        </div>
                        <div>
                            <label id='sexo'>SEXO </label>
                            <select id='sexo'>
                                <option selected disabled >Selecione</option>
                                <option value='feminino' >Feminino</option>
                                <option value='masculino' >Masculino</option>

                            </select>
                        </div>
                </article>
            </form>

        </div>
    )
}

export default CadastreSeComponent