import React, { useEffect,useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import {removeSelectedProduct, selectedProduct} from'../redux/action/productActions';
import { Link } from "react-router-dom";
const Productdetails=()=>{
    const product=useSelector((state) =>state.product);
    console.log(product)
           function Localitem(){
           const [setItems] = useState([]);
           useEffect(() => {
              const items = JSON.parse(localStorage.getItem("LocalCart"));
              if (items) {
               setItems(items);
              }
            }, []);
            }

    const{image,title,price,image1,image2,image3,category,description,id}=product;
  const {productId }=useParams();
    console.log(productId)  
    const dispatch=useDispatch();
    console.log(title);
    const fetchProductDetail= async()=>{
    const response= await axios
    .get(`http://localhost:5001/product/${productId}`)
    .catch((err)=>{
  console.log("Err",err);
    });
    dispatch( selectedProduct(response.data));
    console.log(response.data)
 };
 useEffect(()=>{
    if(productId && productId !=="")fetchProductDetail();
 return()=>{
dispatch(removeSelectedProduct());
 }
},[productId])

// const Holdcart = (event) =>{
//   event.preventDefault();
//   alert("hold cart");
// }
    return(
        <div className="Details">
             <div className="Imagediv">
                <img className="Img" src={image}/>
                <img className="Img" src={image1}/>
                <img className="Img" src={image2}/>
                <img className="Img" src={image3}/>
                </div>
                <div className="column">
                    <h1>{title}</h1>
                    <h3 className="ui brown black header">{category}</h3>
                    <h2>
                        <a className="ui teal tag label">{price}</a>
                        <p>{id}</p>
                    </h2>
                    <h4>Product Details</h4>
                    <p className="desp">{description}</p>
                    </div>
                    <div className="visible content"><Link to={`/carts/${id}`}><button>ADD TO CART</button></Link> </div>               
                </div>  
     );
}
export default Productdetails;