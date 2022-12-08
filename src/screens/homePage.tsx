import Header from "../components/Header/app";
import React from "react";
import Carrosel from "../components/Carrosel/app";
import ProductsHomePage from "../components/ProductsHomePage/app";
import ContactsNews from "../components/ContactsNews/app";
import Footer from "../components/Footer/app";

function HomePage (){
    return(
    <>
        <Header></Header>
        <Carrosel></Carrosel>
        <ProductsHomePage></ProductsHomePage>
        <ContactsNews></ContactsNews>
        <Footer></Footer>

    </>
    )
}
export default HomePage