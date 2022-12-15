import { ProductsHome } from "../interfaces";
import { useState, useCallback, } from "react";
import api from "../services/api";
import axios from "axios";

export const useProducts = () => {
   const [products, setProducts] = useState<ProductsHome[]>([])

   const getProducts = useCallback(async () => {
      const { status, data } = await api.get('/')

      if (status !== 200) throw new Error
      
      
      setProducts(data)
   }, [])
   return {
      products,
      getProducts,
   }
}
