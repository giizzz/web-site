"use client"
import React from 'react'
import "./anket.css";
import { useState } from 'react';

const anket = () => {
  const [formData, setFormData] = useState({
    isim: '',
    yas: '',
    mesaj: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost/anket/liste.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (response.ok) {
        setMessage('Mesajınız iletildi!');
        setFormData({ isim: '', yas: '', mesaj: '' }); // Formu sıfırla
      } else {
        setMessage('Mesajınız iletilirken bir hata oluştu: ' + result.error);
      }
    } catch (error) {
      setMessage('Mesajınız iletilirken bir hata oluştu: ' + error.message);
    }
  };

  return (
    <div className='contaainer'>
      <div className='inner-cont'>
        <p>Bizimle teşvik mesajınızı paylaşmak ister misiniz?</p>
        <form onSubmit={handleSubmit}>

          <div className="form-area">
              <input 
                  type="text"
                  className="form-part"
                  name="isim"
                  value={formData.isim}
                  onChange={handleChange}
                  placeholder="İsminiz"
              />
          </div>

          <div className="form-area">
              <input
                  type="number"
                  className="form-part"
                  name="yas"
                  value={formData.yas}
                  onChange={handleChange}
                  placeholder="Yaşınız"
                  min={0}
              />
          </div>

          <div className="form-area">
              <textarea
                  className="form-part" 
                  name="mesaj"
                  rows="7"
                  value={formData.mesaj}
                  onChange={handleChange}
                  placeholder="Mesajınız">
              </textarea>
          </div>
          <input
                  type="submit"
                  className="form-btn"
              />
      </form>
      {message && <p>{message}</p>}
     </div>
    </div>
  )
}

export default anket;