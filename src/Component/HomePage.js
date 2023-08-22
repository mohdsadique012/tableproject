import React, { useEffect, useState} from 'react'

import "./Homepage.css"

function HomePage() {
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(data=>{
         setData(data)
         setFilter(data)
         
        })
         
     },[])  
    const [data,setData]=useState([])
    const [filter,setFilter]=useState([])
    const allProduct= filter
    console.log(allProduct,"kkk")
    const key = "category"
    const category = [... new Map(data.map(item=> [item[key], item])).values()];
     console.log(category,"jjj")





const handleClick=(e)=>{
   const filterProduct=data.filter((item)=>{
        return item.category === e
    })
    setFilter(filterProduct)
}
const handleclickitem=()=>{
    setFilter(data)
}
  return (
<>
 <div className='main_container'>


 
<div className='category-container' > 
<button className='button' onClick={()=>handleclickitem()}>allProduct</button>
{category.map((category)=>{
    return <button  onClick={()=>handleClick(category.category)} className='button'>{category.category}</button>
})}
</div>

 { allProduct.map((item)=>(
    <div className='Content_box'>
    <img src={item.image} className='image'/>
    <div>
      <p>{item.category}</p>
      <h6>{item.title} </h6>
      <span> <h>price:{item.price} </h><h>Rating:{item.rating.rate}</h></span>
      <p></p>
    </div>
    
  </div>
 )
  

 )}
    
 </div>
</>
  )
}

export default HomePage