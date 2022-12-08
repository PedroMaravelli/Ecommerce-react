import  './index.css'
import logo from '../../assets/logo.png'
import searchImg from '../../assets/searchImg.png'
import carHeader from '../../assets/carHeader.png'



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
                    <a href='/singin'>Cadastre-se</a>
                    <div className='dividingBar'>|</div>
                    <a href='/login'>Login</a>
                </article>
            </section>
            <section className='containerStatusBar'>
                <article className='statusBarLeft'>
                    <img src={logo} alt='logo Camiseteria'></img>
                    <a href='/'>INÍCIO</a>
                    <a href='/'>PRODUTOS</a>
                    <a href='/'>CONTATO</a>
                    <a href='/'>FAQ</a>

                </article>
                <article className='searchProducts'>
                    <form action='/' method='get'>
                        <button type='submit'><img src={searchImg}></img></button>
                        <input type='text' name='search' placeholder='Buscar'></input>

                    </form>
                    <a href='/carrinho'><img src={carHeader} alt='imagem do carrinho'></img></a>
                    

                </article>
            </section>
        </header>

    )
}

export default Header