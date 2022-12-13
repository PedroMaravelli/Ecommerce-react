import Header from "../components/Header/app";
import React from "react";
import api from "../services/api";
import Carrosel from "../components/Carrosel/app";
import ProductsHomePage from "../components/ProductsHomePage/app";
import ContactsNews from "../components/ContactsNews/app";
import Footer from "../components/Footer/app";
import { useState } from "react";


function HomePage (){


let [products, setProducts] = useState<any[]>([])

fetch('http://localhost:3000/')
.then(response => response.json)
.then(data => console.log(data))





    return(
    <>
        <Header></Header>
        <Carrosel></Carrosel>
        {products.map((p)=>{
            <ProductsHomePage nome={p.nome} preco={p.preco} imagem={p.imagem}/>

        })}
        
      
        <ContactsNews></ContactsNews>
        <Footer></Footer>

    </>
    )
}
export default HomePage