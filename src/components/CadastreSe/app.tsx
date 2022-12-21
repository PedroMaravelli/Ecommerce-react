import './index.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import ButtonBuy from '../Buttons/ButtonBuy/ButtonBuy'

function CadastreSeComponent (){
    return(
        <div className='containerDadCadastro'>
            <article className='headerCadastro'>
                <div>
                    <Link to='/'><img src={logo}></img></Link>
                </div>
                <div id='titleMoreInfos'>
                    <p>Para mais informações entre em contato pelo telefone: (XX)- XXXXXXXX Funcionamento: seg à sex das 9h às 18h</p>
                    
                </div>
            </article>
            <article className='containerTitleInsertData'>
                <p>INSIRA SEUS DADOS </p>
            </article>
            <form action='/cadastro' method='post'>
                <article className='containerInputAreaInline'>
                    <div className='inputAreaInsert'>
                        <label id='nome'>NOME</label>
                        <input type="text" name="nome" id="nome" placeholder='Insira seu Nome' />
                    </div>
                    <div className='inputAreaInsert'>
                        <label id='sobrenome'>SOBRENOME</label>
                        <input type="text" name="sobrenome" id="sobrenome" placeholder='Insira seu Sobrenome'/>
                    </div>
                </article>

                <div className='inputAreaInsert'>
                    <label id='email'>E-MAIL</label>
                    <input type="email" name="email" id="email" placeholder='Insira seu E-mail'/>

                </div>

                <article className='containerInputAreaInline'>
                        <div className='inputAreaInsert'>
                            <label id='dataNascimento'>DATA DE NASCIMENTO </label>
                            <input type="date" name="dataNascimento" id="dataNascimento" placeholder='Insira sua Data de nascimento'/>
                        </div>
                        <div className='inputAreaInsert'>
                            <label id='sexo'>SEXO </label>
                            <select id='sexo'>
                                <option selected disabled >Selecione</option>
                                <option value='feminino' >Feminino</option>
                                <option value='masculino' >Masculino</option>

                            </select>
                        </div>
                </article>
                <article className='containerInputAreaInline'>
                    <div className='inputAreaInsert'>
                        <label id='cpf'>CPF</label>
                        <input type="number" name="cpf" id="cpf" placeholder='Insira seu Cpf'/>
                    </div>
                    <div className='inputAreaInsert'>
                        <label id='telefone'>TELEFONE</label>
                        <input type="number" name="telefone" id="telefone" placeholder='Insira seu Telefone'/>
                    </div>
                </article>
                <article className='passwordContainer'>
                    <div className='inputAreaInsert'>
                        <label id='senha'>INSIRA UMA SENHA</label>
                        <input type="password" name="senha" id="senha" placeholder='Insira uma Senha'/>
                    </div>
                    <div className='inputAreaInsert'>
                        <label id='confirmaSenha'>CONFIRME SUA SENHA</label>
                        <input type="password" name="confirmaSenha" id="confirmaSenha" placeholder='Confirme sua Senha' />
                    </div>
                </article>
                <div className='checkBoxNews'>
                    <input type = "checkbox" id = "subscribeNews" name = "subscribe" value = "newsletter"></input>
                    <label htmlFor="subscribeNews">QUERO RECEBER PROMOÇÕES POR E-MAIL.</label>
                </ div>
                <div className="politicaPrivacidadeText">
                    <p>Ao criar uma conta você está de acordo com nossa <Link to='/politicadeprivacidade'>Politica de Privacidade</Link></p>
                    <button type='submit'>CADASTRAR</button>
                </div>
            </form>

        </div>
    )
}

export default CadastreSeComponent