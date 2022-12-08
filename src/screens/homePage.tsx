import Header from "../components/Header/app";
import React from "react";
import Carrosel from "../components/Carrosel/app";
import ProductsHomePage from "../components/ProductsHomePage/app";

function HomePage (){
    return(
    <>
        <Header></Header>
        <Carrosel></Carrosel>
        <ProductsHomePage></ProductsHomePage>
    </>
    )
}
export default HomePage