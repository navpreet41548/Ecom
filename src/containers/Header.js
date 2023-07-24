import React from "react";
// import { useState,useEffect } from "react";
// export const DarkMode =()=>{
//     const[theme, setTheme]= useState("light-theme");
//     const toggleTheme =() =>{
//        if(theme === "dark-theme"){
//            setTheme("light-theme");
//        }  else{
//            setTheme("dark-theme");
//        }
//    }
//    useEffect(()=>{
//        document.body.className=theme;
//    },[theme]);
// }
// Using require()
const Header=()=>{
    return(
<div className="menu">
    <header className="nav">
<div className=" container_center">
    <h2 className="company_name">THE REP STORE</h2>
    </div>
    </header>
</div>

)
}
export default Header;