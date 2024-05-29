"use client"
import React from 'react'
import "./cuzdan.css"
import Image from 'next/image'
import "../../public/img/wallet.png"

function hesapla(num1, num2) {
  return num1.value * num2.value * 365 *2.5;
}


const uzmanlardan = () => {
  
  return (
      <div className='outer-box'>
      <div className='inner-box input-area'>
    
      <label>Kaç yıldır sigara kullanıyorsunuz?</label>
      <input 
        id='num1'
        type="number"
        className='yas'
        max={100}
        min={0}
      />
     
      <label>Günde kaç tane sigara içiyorsunuz?</label>
      <input
        id='num2'
        type="number"
        className='yıl'
        max={100}
        min={0}
      />
      </div>
      <div className='inner-box'>

        <Image
          src="/img/wallet.png"
          alt='cüzdan'
          width={340}
          height={340} 
          priority={true}/>

          <button onClick={() => {
            const num1 = document.getElementById('num1');
            console.log(num1);
            const num2 = document.getElementById('num2');
            const sonuc = hesapla(num1, num2);
            // Hesaplanan sonucu ekrana yazdırın
            document.getElementById('sonuc').innerText= `Şimdiye kadar sigaraya harcadığınız miktar: ${sonuc} TL`;
          }}>HESAPLA</button>
          <div id="sonuc"></div>      
       
      </div>
    </div>
  );
 
};
export default uzmanlardan;




// const result = () => {
//   const res = prompt("Kaç yıldır sigara içiyorsunuz",'');
// };

// const hesapla=(params1,params2) =>{
//   let res= params1*params2*365*(2.5);
//   return res;
// };

  // var myInput=document.createElement("input");
  // myInput.setAttribute("id", "myInput");
  // myInput.setAttribute("type","text");
  // myInput.setAttribute("value","Buraya Yazın");
  // var myDiv = document.createElement("div");
  // myDiv.appendChild(myInput);
  // var inputDeger = document.getElementById("myInput").;
  // window.alert(inputDeger) 


// <p>`{document.writeln(hesapla(document.getElementById('num1'),document.getElementById('num2')))}` tl niz cebinizde kalacaktı</p>
      

// <button onClick={()=>(hesapla(document.getElementById('num1'),document.getElementById('num2')))}>HESAPLA</button>