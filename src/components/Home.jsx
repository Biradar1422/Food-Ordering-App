import React from "react";
import Navbar from "../Comp/Navbar";
import CategoryMenu from "../Comp/CategoryMenu";
import FoodItems from "../Comp/FoodItems";
import Cart from "../Comp/Cart";


const Home = () =>{
    return(
        <>
        <Navbar/>
        <CategoryMenu/>
        <FoodItems/>
        <Cart/>
        </>
    )
}

export default Home;