import React from 'react'
import "./Main.scss";
import { data } from "../../helpers/data";
import Card from "./Card"

const Main = () => {
  console.log(data);
  return (
    <div className='card-container'>
      
      {data.map((item,index) => (<Card {...item} key={index}/>))}
      {/* bu kısımda Card ismini verdiğimiz component'den probs ile veri çekiyor. */}

    </div>
  )
}
export default Main;