

import React,{useEffect, useState} from "react";
import Carous from "./Carousel";
import CardElement from "./Card"
import img1 from "./images/Game-1.png"
import img2 from "./images/Game-2.png"
import img3 from "./images/Game-3.png"
import img4 from "./images/game_s-1.png"
import img5 from "./images/game_s-2.png"
import img6 from "./images/game_s-3.png"
import jwt_decode from "jwt-decode";
import getProfile from "./info";

function Home(){


   const [info,setinfo]=useState({
id:"",
email:"",
username:"",
// ActiveStatus:"",
// RealCoins:"",
// BonusCoins:""


   })
 
 useEffect(()=>{


 
try{
const token = localStorage.usertoken
const decode=jwt_decode(token)
    getProfile(decode).then(res=>{
       console.log(res)
setinfo({
   id:res._id,
   email:res.email,
   username:res.username
 
})
    })
   }
   catch(err){
      console.log(err)
   }
 },[])


  // ActiveStatus:decoded.ActiveStatus,
   // RealCoins:decoded.RealCoins,
   // BonusCoins:decoded.BonusCoins
 
 

 return(
<div >

<Carous source1={img1}  source2={img2}  source3={img3} />
<div ><CardElement source={img4} /></div>
<div><CardElement source={img5} /></div>
<div><CardElement source={img6} /></div>

</div>


)
}

export default Home