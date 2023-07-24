import { useEffect, React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { ADD_TO_CART } from "../redux/action/productActions";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./cart.css";
const arrow =
  "https://w7.pngwing.com/pngs/247/15/png-transparent-arrow-arrow-angle-triangle-black-thumbnail.png";
const cart_icon =
  "https://w7.pngwing.com/pngs/247/15/png-transparent-arrow-arrow-angle-triangle-black-thumbnail.png";

const image = '../../src/png-transparent-arrow-illustration-arrow-icon-right-arrow-angle-web-design-internet-thumbnail.png'

// function Localitem(){
// const [setItems] = useState([]);
// useEffect(() => {
//   const items = JSON.parse(localStorage.getItem("LocalCart"));
//   if (items) {
//    setItems(items);
//   }
// }, []);
// }

const Cart = () => {
  const Products = useSelector((state) => state.mycart.products);
  console.log(Products);
  const { Id } = useParams();
  console.log(Id);
  const dispatch = useDispatch();

  const Cartitems = useSelector((state) => state.mycart.addedItems);
  console.log(Cartitems);

  // const{image,title,price,category} = Cartitems;

  //set the items in local storage....
  const cart = useSelector((state) => state.mycart.addedItems);
  console.log(cart);
  var items = [];
  items.push(cart);
  console.log(items);
  // useEffect(()=>{
  // localStorage.setItem("LocalCart",JSON.stringify(items));
  //  },[items]);

  const fetchProducts = async () => {
    const response = await axios
      .get("http://localhost:5001/product")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(ADD_TO_CART(response.data, Id));
    console.log(response.data, Id);
  };
  useEffect(() => {
    if (Id && Id !== "") fetchProducts();
  }, [Id]);
  console.log("Products:", Products);
  //get the items in local storage...
  //  const getLocalcartdata = () =>{
  //   let localCartData = localStorage.getItem("LocalCart");
  //   if(localCartData === []){
  //     return [];
  //   } else {
  //     return JSON.parse(localCartData);
  //   }
  // };

  return (
    <div>
      <div>
        <header>
          <div className="continue-shopping ">
            <img className="arrow-icon" src={arrow} alt="arrow" />
            <h3>continue shopping</h3>
          </div>
          <div className="cart-icon">
            <img src={cart_icon} alt="cart-logo" />
            <p>7</p>
          </div>
        </header>
      </div>
      {/* <div className="Cartdetails">
  <div className="cartproductimage">
  <img className="cartImage" src={image}/>
  </div>
  <div className="cartproductdetails">
    <h1>{title}</h1>
    <h3 className="cat">{category}</h3>
    <h2>{price}</h2>
  </div>
    </div> */}
    </div>
  );
};
export default Cart;
