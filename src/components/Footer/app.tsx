import './index.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import social from '../../assets/social.png'
import ButtonBuy from '../Buttons/ButtonBuy/ButtonBuy'



function Footer (){
    return(
        <div>
            <section className='containerFooter'>
                <article className='informationFooter'>
                    <h3>QUEM SOMOS</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam culpa cum ratione sed dolorum illum quam, debitis earum natus nemo vel commodi temporibus tenetur aliquam ducimus consectetur voluptates voluptatum minus!</p>
                    <img src={logo} alt='logo '></img>
                </article>
                <article className='informationFooter'>
                    <h3> MAPA DO SITE</h3>
                    <Link className='linkStyle' to='/faq'>FAQ</Link>
                    <Link className='linkStyle' to='/politicaprivacidade'>Política de Privacidade</Link>
                    <Link className='linkStyle' to='/produtos'>Produtos</Link>
                </article>

                <form className='informationFooter' action='/' method='post'>
                    <h3>CONTATO</h3>
                    <label id='nameContact'>Nome</label>
                    <input type="text" name="nameContact" id="nameContact" />

                    <label id='emailContact'>E-mail</label>
                    <input type="email" name="emailContact" id="emailContact" />
                    <label id='mensContact'>Mensagem</label>
                    <input type="text-area" name="mensContact" id="mensContact" />
                    <ButtonBuy title='ENVIAR'></ButtonBuy>
                    
                </form>

                <article>
                    <h3>SOCIAL</h3>
                    <Link to='https://instagram.com'><img src={social}></img></Link>
                </article>


            </section>
            <section className='copyrightText'>
                <p>Copyright © 2022 Grupo 7 - Todos os direitos reservados.</p>

            </section>
        </div>
        

    )
}
export default Footer