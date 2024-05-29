"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import styles from "./zararlar.css"

const zararlar= ()=>{
  const[data,setData]=useState([]);
  useEffect(()=>{
    const fetchData =async()=>{
      const resp=await fetch('/data/zararlar.json');
      const result= await resp.json();
      setData(result); 
    };
    fetchData();
  },[]);

  return (
  <div className='outer-box'>
  <div className='inner-box'><h1 className='title'> Onlar Kazanırken Biz Kaybediyoruz </h1></div>
    <ul type="square">
      {data.map(item=>(
      <li key={item.id}>
        <h2 className='title'>{item.title}</h2>
        {item.description.split(/[\n]+/).map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </li>
      ))}
    </ul>
  </div>

    
  )
}

export default zararlar;
