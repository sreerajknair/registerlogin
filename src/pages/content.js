
import React from "react";
import {useState,useEffect} from "react";
function Datas(){
    const [details,setDetails]=useState([{
        Name:'',
        email:"",
        phone:"",

    }])
    useEffect(()=>{
        fetch("/data").then(res=>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes=>setDetails(jsonRes));
    })

    return(
     <div>
       <h1>content pages</h1>
       {
           details.map(content=>
           <div>
              <p >{content.Name}</p>,
              <p>{content.email}</p>,
              <p>{content.phone}</p>
           </div>
           )
       }
     </div>

)}
export default Datas;
