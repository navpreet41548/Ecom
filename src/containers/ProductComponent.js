import React from "react";
import {Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const Productcomponent=()=>{
    const products=useSelector((state)=>state.allProducts.products);
    console.log(products);
    const dispatch=useDispatch();
    const renderlist=products.map((product)=>{
        const{ id,title,image,image1,image2,image3,price,category}=product;
        console.log(title + "the id is" + id)
        return(       
             <div className="four column wide" key={id}>
                <Link to={`/product/${id}`}>
               <div className="cards">
                  <div className="card">
                       <div className="image">
                        <img className="Image" src={image} alt={title} />
                        <img className="Image" src={image1} alt={title} />
                        <img className="Image" src={image2} alt={title} />
                        <img className="Image" src={image3} alt={title} />
                       </div>
                <div className="content">
               <div className="header">{title}</div>
               <div className="meta">{category}</div>
               <strong><div className="meta price">{price}</div></strong>
               
           </div>
       </div>
      </div>
      </Link>
    </div>
);
    });
    return <>{renderlist}</>;
};
export default Productcomponent;