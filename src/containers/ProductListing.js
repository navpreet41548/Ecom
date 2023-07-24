import {React,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {setProducts} from '../redux/action/productActions';
import Productcomponent from './ProductComponent';
import axios from "axios";
const Productlisting=()=>{
    const products=useSelector((state)=>state);
    const dispatch=useDispatch();
    const fetchProducts= async()=>{
        const response = await axios
        .get("http://localhost:5001/product")
        .catch((err)=>{    
         console.log("Err",err);
        });
       dispatch(setProducts(response.data));
    };
    useEffect(()=>{ 
        fetchProducts();
    },[]);
    console.log("Products:",products);
    return(
        <div className="ui grid container">
            <Productcomponent/>
        </div>
    );
};
export default Productlisting;
