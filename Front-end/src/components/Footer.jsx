import React from "react";
import  facebook from"../assets/facebook.png"
import  instagram from"../assets/instagram.png"
import  whatapp from  "../assets/whatsapp.png"
import  youtube from"../assets/youtube.png"
function Footer (){
 return(
    <footer className="flex justify-around bg-slate-400 py-2">
        <div>
            <p>&copy;Techno-learn</p>
            <p>technolearn@gmail.com</p>
        </div>
        <h1>logo</h1>
        <div className="flex justify-around w-30 py-3">
           <img src={facebook} className="w-7 h-7 "/>
           <img src={instagram} className="w-7 h-7"/>
           <img src={whatapp} className="w-7 h-7"/>
           <img src={youtube} className="w-7 h-7"/>
         
        </div>
    </footer>
 )
}
export {Footer}