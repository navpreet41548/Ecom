import './App.css';
import React from 'react';
import Header from './containers/Header';
import Productdetails from './containers/ProductDetail';
import Productlisting from './containers/ProductListing';
import {BrowserRouter,Routes,Route}from "react-router-dom";
import Cart from './containers/cart';
import Home from './containers/home';
import Contact from './containers/contact';
// import { DarkMode } from './containers/Header';
// import  db from './db.json';
// import Productcomponent from './containers/ProductComponent';
// import { useDispatch, useSelector } from 'react-redux';
// import { decrement, increment, reset } from './redux/action/productActions';
  // const x = useSelector(state => state.counterReducer);
  // const dispatch=useDispatch();
  // console.log(x);
  function App() {
  return (
    <div className="App">
      <Header/>
      {/* <DarkMode/> */}
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
     <Route path="/products" element={<Productlisting/>}/>
     <Route path="/product/:productId" element={<Productdetails/>}/> 
     <Route path="/carts/:Id" element={<Cart/>}/>
     <Route>404 not found</Route>
    </Routes>
    </BrowserRouter>
    </div>
     );
    };
    /* <div className="inner">
    {
      db && db.map(record=>{
        return(
          <div className="box" key={record.id}>
          <img src={record.icon} alt=""/>

          <br/>
          {record.caption}
          </div>

        )
      })
    }
    </div>
   </div> */
  /* /* <button onClick={()=>dispatch(increment())}>Increase</button>
  <button onClick={()=>dispatch(reset())}>Reset</button>
  <button onClick={()=>dispatch(decrement())}>Decrease</button>
  */ 
export default App;