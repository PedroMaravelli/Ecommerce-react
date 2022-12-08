import './index.css'
import tShirts from '../../assets/t-shirts.png'
import ButtonBuy from '../Buttons/ButtonBuy/ButtonBuy'

function ProductsHomePage (){
    return(
        <div className='containerDadProducts'>
            <section className='containerCard' >
                <article className='sessionBestSellers'>
                    <div className='barDisiving'></div>
                    <h2>MAIS VENDIDOS</h2>
                </article>
                <article className='cardProducts'>
                    <div className="card">
                        <img src={tShirts} alt='imagem Camiseta'></img>
                        <p>Camiseta Lisa Branca</p>
                        <p>R$ 79.90</p>
                        <a href="/"><ButtonBuy title='COMPRAR'></ButtonBuy></a>
                    </div>
                    <div className="card">
                        <img src={tShirts} alt='imagem Camiseta'></img>
                        <p>Camiseta Lisa Branca</p>
                        <p>R$ 79.90</p>
                        <a href="/"><ButtonBuy title='COMPRAR'></ButtonBuy></a>

                    </div>
                    <div className="card">
                        <img src={tShirts} alt='imagem Camiseta'></img>
                        <p>Camiseta Lisa Branca</p>
                        <p>R$ 79.90</p>
                        <a href="/"></a>
                        <a href="/"><ButtonBuy title='COMPRAR'></ButtonBuy></a>

                    </div>
                        

                </article>
            </section>

            <section className='containerCard'>
                <article className='sessionBestSellers'>
                        <div className='barDisiving'></div>
                        <h2>ROUPAS FEMININAS</h2>
                </article>
                <article className='cardProducts'>
                    <div className="card">
                        <img src={tShirts} alt='imagem Camiseta'></img>
                        <p>Camiseta Branca Feminina</p>
                        <p>R$ 79.90</p>
                        <a href="/"><ButtonBuy title='COMPRAR'></ButtonBuy></a>
                    </div>
                    <div className="card">
                        <img src={tShirts} alt='imagem Camiseta'></img>
                        <p>Camiseta Branca Feminina</p>
                        <p>R$ 79.90</p>
                        <a href="/"><ButtonBuy title='COMPRAR'></ButtonBuy></a>

                    </div>
                    <div className="card">
                        <img src={tShirts} alt='imagem Camiseta'></img>
                        <p>Camiseta Branca Feminina</p>
                        <p>R$ 79.90</p>
                        <a href="/"></a>
                        <a href="/"><ButtonBuy title='COMPRAR'></ButtonBuy></a>

                    </div>
                        

                </article>

                </section>

        </div>
    )
}

export default ProductsHomePage