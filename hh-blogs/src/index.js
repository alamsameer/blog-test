import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Main from "../src/views/Main"

const Index = ()=>{
    return(
        <>
         <Navbar/>
         <section id="blogs-section">
             <Main/>
         </section>
         <Footer/>
        </>
    )
}

ReactDOM.render(<Index/>,document.getElementById("root"))