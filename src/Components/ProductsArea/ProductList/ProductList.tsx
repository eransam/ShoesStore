import axios from "axios";
import  {useEffect} from "react";

//import { useEffect, useState } from "react";
//import ProductModel from "../../../Models/ProductModel";
//import config from "../../../Utils/Config";
//import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

function ProductList(): JSX.Element {

    // Create products state: 
   // const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {

        // IIFE for using async-await:
        //אי אפשר לשים פונקציית
        //async
        //על
        //useEffect
        //ישירות אז כאשר אנו רוצים להשתמש בפונקציית אסינק אנו שמים אותה בתוך סוגריים
        //IIFE
        (async function () {
            // AJAX Request:
            const response = await axios.get("http://localhost:3030/api/products");
            const Products = response.data;
            console.log(Products);
            

            // Extract the data from the response:
            //setProducts(response.data);

        })();

    }, []);

    return (
       <div className="ProductList">
            <p>products...</p>
       </div>
   );
}

export default ProductList;
