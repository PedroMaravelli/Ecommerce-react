import  './index.css'
import logo from '../../assets/logo.png'
import searchImg from '../../assets/searchImg.png'
import carHeader from '../../assets/carHeader.png'
import { Link } from 'react-router-dom'



function Header (){
    return(
        <header>
            <section className='containerInfoContact'>
                <article className='contactInfo'>
                    <p>(11) 96598-8899</p>
                    <div className='dividingBar'>|</div>
                    <p>lojagrupo7@gmail.com</p>
                </article>
                <article className='contactInfo'>
                    <Link to='/cadastro'>Cadastre-se</Link>
                    <div className='dividingBar'>|</div>
                    <Link to='/login'>Login</Link>
                </article>
            </section>
            <section className='containerStatusBar'>
                <article className='statusBarLeft'>
                    <img src={logo} alt='logo Camiseteria'></img>
                    <Link to='/'>INÍCIO</Link>
                    <Link to='/'>PRODUTOS</Link>
                    <Link to='/'>CONTATO</Link>
                    <Link to='/'>FAQ</Link>

                </article>
                <article className='searchProducts'>
                    <form action='/' method='get'>
                        <button type='submit'><img src={searchImg}></img></button>
                        <input type='text' name='search' placeholder='Buscar'></input>

                    </form>
                    <Link to='/carrinho'><img src={carHeader} alt='imagem do carrinho'></img></Link>
                    

                </article>
            </section>
        </header>

    )
}

export default Header