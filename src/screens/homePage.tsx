import Header from "../components/Header/app";
import React, { useEffect } from "react";
import api from "../services/api";
import Carrosel from "../components/Carrosel/app";
import ProductsHomePage from "../components/ProductsHomePage/app";
import ContactsNews from "../components/ContactsNews/app";
import Footer from "../components/Footer/app";
import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { ProductsHome } from "../interfaces";


function HomePage (){
    const [products, setProducts] = useState<ProductsHome[]>([])
   api.get('/')
   .then(res => setProducts(res.data))




    return(
    <>
        <Header></Header>
        <Carrosel></Carrosel>
        {
            products.map((p)=>{
                <ProductsHomePage nome={p.nome} preco={p.preco} imagem={p.imagem} />

            })
        }
       
        

        
       
            

  
        
      
        <ContactsNews></ContactsNews>
        <Footer></Footer>

    </>
    )
}
export default HomePage