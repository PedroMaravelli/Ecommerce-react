import './index.css'
import tShirts from '../../assets/t-shirts.png'
import ButtonBuy from '../Buttons/ButtonBuy/ButtonBuy'
import { ProductsHomeApi } from '../../screens/homePage'






interface homeProps{
    contentProducts:ProductsHomeApi[],
    contentProductsWoman: ProductsHomeApi[]
   
}


export function ProductsHomePage ({contentProducts, contentProductsWoman}:homeProps ){
   

    return(
        <div className='containerDadProducts'>
            <section className='containerCard' >
                <article className='sessionBestSellers'>
                    <div className='barDisiving'></div>
                    <h2>MAIS VENDIDOS</h2>
                </article>
                
               
                        <article className='cardProducts'>
                    
                        {
                            contentProducts.map((product: ProductsHomeApi)=> {
                                return(
                                    <div  key={product.id} className="card">
                                        <img src={tShirts} alt='imagem Camiseta'></img>
                                        <p>{product.nome}</p>
                                        <p>R${product.preco},00</p>
                                        <a href="/"><ButtonBuy title='COMPRAR'></ButtonBuy></a>
                                    </div>


                                )
                            })
                        }
                            
                </article>
            </section>

            <section className='containerCard'>
                <article className='sessionBestSellers'>
                        <div className='barDisiving'></div>
                        <h2>ROUPAS FEMININAS</h2>
                </article>
                <article className='cardProducts'>

                    {
                        contentProductsWoman.map((productWoman) => {
                            return(
                                <div className="card">
                                    <img src={tShirts} alt='imagem Camiseta'></img>
                                    <p>{productWoman.nome}</p>
                                    <p>R$ {productWoman.preco}.00</p>
                                    <a href="/"><ButtonBuy title='COMPRAR'></ButtonBuy></a>
                                </div>
                            )

                        })
                    }


                </article>

                </section>

        </div>
    )
}

