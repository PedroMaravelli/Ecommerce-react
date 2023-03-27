import './index.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { ChangeEvent, FormEvent } from 'react'
import { api } from '../../services/api'

import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { REFUSED } from 'dns'


function CadastreSeComponent (){

    const newUserSchemaValidation = zod.object({
        nome: zod.string(),
        sobrenome: zod.string(),
        email: zod.string().email(),
        data_nascimento: zod.number(),
        sexo: zod.string(),
        cpf: zod.number(),
        telefone: zod.number(),
        senha: zod.string().min(4).max(11),
        confirma_senha: zod.string().min(4).max(11),
        promocoes: zod.boolean(),
    })
    
    const { register, handleSubmit,  reset } = useForm<NewUserFormData>({
        resolver: zodResolver(newUserSchemaValidation)
    })
    

    type NewUserFormData = zod.infer<typeof newUserSchemaValidation>

    function getRegistrationData( {nome, sobrenome, email, data_nascimento, sexo, cpf, telefone, senha, confirma_senha, promocoes}: NewUserFormData){
        
        api({
            method: 'post',
            url: '/users/register',
            data:{
                nome,
                sobrenome ,
                email,
                data_nascimento,
                sexo,
                cpf,
                telefone,
                senha,
                confirma_senha,
                promocoes

            }
        })
        
        
        
        
    }

    

    return(
        <div className='containerDadCadastro'>
            <article className='headerCadastro'>
                <div>
                    <Link to='/'><img src={logo} alt='the name camiseteria'></img></Link>
                </div>
                <div id='titleMoreInfos'>
                    <p>Para mais informações entre em contato pelo telefone: (XX)- XXXXXXXX Funcionamento: seg à sex das 9h às 18h</p>
                    
                </div>
            </article>
            <article className='containerTitleInsertData'>
                <p>INSIRA SEUS DADOS </p>
            </article>
            <form 
                onSubmit={handleSubmit(getRegistrationData)} 
                action='/cadastro' 
                method='post'
                >
                <article className='containerInputAreaInline'>
                    <div className='inputAreaInsert'>
                        <label id='nome'>NOME</label>
                        <input 
                            type="text"
                            id="nome" 
                            required
                            placeholder='Insira seu Nome'
                            {...register('nome')} 
                        />
                    </div>
                    <div className='inputAreaInsert'>
                        <label id='sobrenome'>SOBRENOME</label>
                        <input 
                            type="text" 
                            id="sobrenome" 
                            placeholder='Insira seu Sobrenome'
                            required
                            {...register('sobrenome')}
                        />
                    </div>
                </article>

                <div className='inputAreaInsert'>
                    <label id='email'>E-MAIL</label>
                    <input 
                        type="email"
                        required
                        id="email" 
                        placeholder='Insira seu E-mail'
                        {...register('email')}
                    />

                </div>

                <article className='containerInputAreaInline'>
                        <div className='inputAreaInsert'>
                            <label id='dataNascimento'>DATA DE NASCIMENTO </label>
                            <input 
                            type="date" 
                            required
                            id="dataNascimento" 
                            placeholder='Insira sua Data de nascimento'
                            {...register('data_nascimento',{ valueAsNumber: true})}
                            />
                        </div>
                        <div className='inputAreaInsert'>
                            <label id='sexo'>SEXO </label>
                            <select {...register('sexo')} id='sexo' required>
                                <option selected disabled >Selecione</option>
                                <option value='feminino' >Feminino</option>
                                <option value='masculino' >Masculino</option>

                            </select>
                        </div>
                </article>
                <article className='containerInputAreaInline'>
                    <div className='inputAreaInsert'>
                        <label id='cpf'>CPF</label>
                        <input 
                            type="number" 
                            id="cpf" 
                            required
                            placeholder='Insira seu Cpf'
                            {...register('cpf', { valueAsNumber: true})}
                        />
                    </div>
                    <div className='inputAreaInsert'>
                        <label id='telefone'>TELEFONE</label>
                        <input 
                            type="number" 
                            id="telefone"
                            required 
                            placeholder='Insira seu Telefone'
                            {...register('telefone', { valueAsNumber: true})}
                        />
                    </div>
                </article>
                <article className='passwordContainer'>
                    <div className='inputAreaInsert'>
                        <label id='senha'>INSIRA UMA SENHA</label>
                        <input 
                            type="password" 
                            id="senha" 
                            required
                            placeholder='Insira uma Senha'
                            {...register('senha')}
                        />
                    </div>
                    <div className='inputAreaInsert'>
                        <label id='confirmaSenha'>CONFIRME SUA SENHA</label>
                        <input 
                            type="password" 
                            id="confirmaSenha" 
                            required
                            placeholder='Confirme sua Senha'
                            {...register('confirma_senha')} 
                        />
                    </div>
                </article>
                <div className='checkBoxNews'>
                    <input 
                    type = "checkbox" 
                    id = "subscribeNews" 
                    {...register('promocoes')}
                    ></input>
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