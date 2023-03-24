import Header from "../components/Header/app";
import React, { useEffect } from "react";

import Carrosel from "../components/Carrosel/app";
import {ProductsHomePage} from "../components/ProductsHomePage/app";
import ContactsNews from "../components/ContactsNews/app";
import Footer from "../components/Footer/app";
import { useState } from "react";
import { api } from "../services/api";



export interface ProductsHomeApi {
    id: number;
    SKU: string;
    nome: string;
    descricao: string;
    preco: string;
    cor: string;
    tamanho: string;
    genero: string;
    quantidade: number;
    imagem: string;
}



function HomePage (){

    const [listProducts, setListProducts] = useState<[]>([])
    const [listProductsWoman, setListProductsWoman] = useState<[]>([])


    useEffect(() => {
        fetch(api + '/')
        .then((response) => response.json())
        .then((data) => {
            setListProducts(data)})

    }, [])
    useEffect(() => {
        fetch(api + '/womanproducts')
        .then((response) => response.json())
        .then((data) => {
            setListProductsWoman(data)})
    },[])
    console.log(listProducts);
    

    return(
    <>
        <Header></Header>
        <Carrosel></Carrosel>

        <ProductsHomePage contentProducts={listProducts} contentProductsWoman={listProductsWoman}></ProductsHomePage>


        <ContactsNews></ContactsNews>
        <Footer></Footer>

    </>
    )
}
export default HomePage