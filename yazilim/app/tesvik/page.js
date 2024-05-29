"use client"
import React from 'react';
import style from "./tesvik.module.css";
import { useEffect, useState } from 'react';
import "./tesvik.css"

const tesvik = () => {
  const [veri, setData] = useState([]);
  const [error, setError] = useState('');
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    fetch('http://localhost/anket/liste.php')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(veri => {
        console.log('Veriler:', veri); // Gelen verileri konsola yazdır
        setData(veri);
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
        setError(error.message);
      });
  }, []);

  const handleCardClick = (id) => {
    setActiveCard(id === activeCard ? null : id);
  };


  return (
    <div className='outer-contnr' >
    <div className='bo'>
    <h1 className='baslik'>Teşvik Listesi</h1>
    </div>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    <ul className='sect'>
      {veri.map(item => (
        <li  
          key={item.id} 
          className={`${style.card} ${activeCard === item.id ? style.active : ''}`}
          onClick={() => handleCardClick(item.id)}
          >
          <h3 className={style.p_name}>{item.isim}</h3>
          <h3 className={style.p_age}>{item.yas}</h3>
          <p className={style.p_desc}>{item.mesaj}</p>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default tesvik;
