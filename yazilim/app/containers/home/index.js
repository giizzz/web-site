"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import"./home.css";
import style from "./tesvik-part.module.css"


const HomeContainer=()=>{
  const[data,setData]=useState([]);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(()=>{
    const fetchData =async()=>{
      const resp=await fetch('/data/tesvik.json');
      const result= await resp.json();
      setData(result); 
    };
    fetchData();
  },[]);
  
  const handleCardClick = (id) => {
    setActiveCard(id === activeCard ? null : id);
  };

  return (
  <div class="home-container">

    <div className='innr-cntnr anket-cntnr'>
      <Link className='links anket-link' href="/anket">Ankete katıl</Link>
      <p className='docs'>Hikayenizi herkese duyurun...</p>
    </div>

    <div className='innr-cntnr cuzdan-cntnr'>
      <p className='cuzdan-p docs'>Sigarayı bırakırsanız paranız cebinizde kalacak. Sigaraya günde 10 lira veren bir kişi yılda yaklaşık 4 bin lira harcamaktadır. Bu parayla 10 yılda güzel bir araba, 30 yılda ise lüks bir daire alabilirsiniz.</p>
      <p className='cuzdan-p docs'>Boşa giden paranızın miktarını öğrenmek için resime tıklayın:</p>
      <Link href="/cuzdan">
        <Image
        href="/cuzdan"
        src="/img/wallet.png"
        alt='cüzdan'
        width={200}
        height={200} 
        priority={true}/>
      </Link>     
    </div>

    <div className='innr-cntnr zarar-cntnr'>
      <Link className='links zarar-link' href="/zararlar">Yazılarımıza göz atın</Link>
      <p className='docs'>Dünyada tek başına en önemli ölüm nedeni olan sigara; tüketicisine nakit, düzenli olarak ödenen maddi bir bedel karşılığında yaşamsal zararlar veren ve merkezi sinir sistemi üzerinde uyarıcı etkiye sahip yegâne yasal, doğal bağımlılık yapıcı maddedir. İçeriğinde barındırdığı 4000’den fazla değişik zararlı madde ile başta; akciğer kanseri, kalp hastalıkları ve diğer nedenlere bağlı olarak dünyada her yıl 5,4 milyon kişinin ölümüne neden olmaktadır.</p>
      <p className='docs'>Sigara geçmişten günümüze kadar olan tüm toplumlarda; sağlık, ekonomik, sosyal alanda bir çok yıkıcı tahribatlara yol açmaktadır. Kullanma yaşının her geçen gün düştüğü sigaraya karşı mücadelede ulusal devletlerce; bir takım yasal düzenlemelere gidilmesine karşın hükümetlerin sigaraya karşı alınan kısıtlayıcı tedbirlere ekonomik gerekçelerle geri adım attıkları görülmektedir. Salt yasal düzenlemeler ve idari yaptırımların yeterli olmadığı mücadelede; devletin tüm organları, kurum ve kuruluşları, sivil toplum örgütleri ve en önemlisi toplum tarafından ortak bir bilinç oluşturularak, toplumsal bir duyarlılık, direnç, tepki gösterilmelidir.</p>
      <p className='docs'>Sigara bağımlılığı ve sigara dumanına maruz kalma genç bir nüfuza sahip ülkemiz açısından son derece büyük bir halk sağlığı sorunudur. Hedeflenen toplumsal faydanın sağlanabilmesi için toplumun bir bütün olarak yasal mevzuatın sıfır toleransla uygulanmasında şeffaf ve etkin rol alması gerekir. Hatta toplum, bizzat denetleyici görevini üstlenerek, yasaların uygulayıcılarca etkin bir biçimde uygulanabilirliğini sağlamalıdır. Bu bağlamda; bilinçli toplum ve toplumsal bilinç oluşturmada; başta çocuğun kişisel-duygusal gelişiminde ilk rol model alındığı aile ile ortalama altı yaşından on sekiz yaşını bitirinceye kadar içinde yer aldığı eğitim sistemi ile eğitim ve öğretim kurumları sigara bağımlılığı ile mücadelede toplumsal bilinç oluşturmada en önemli basamağı oluşturmaktadır. Bu bilinçle yetişecek olan genç nesiller, sağlıklı ve bilinçli toplumları oluşturabileceklerdir.</p>
    </div>

    <div className='innr-cntnr tesvik-cntnr'>
    <Link className='links tesvik-link' href="/tesvik">Sizden gelenler</Link>
    <ul className='list'>
    {data.map(item=>(
      <li
        key={item.person_id}
        className={`${style.element} ${activeCard === item.person_id ? style.active : ''}`}
        onClick={() => handleCardClick(item.person_id)}
      >
        <h3 className={style.p_name}>{item.person_name}</h3>
        <h5 className={style.p_age}>{item.person_age} yaşındayım</h5>
        <p className={style.p_desc}>{item.person_desc}</p>

      </li>
    ))}
    </ul>
    </div>

    <div className='innr-cntnr ks-cntnr'>
    <Link className='links ks-link' href="/ks">Kamu spotu kısmımızı ziyaret edin</Link>
    <div className='vid_part'>
    <iframe width="960" height="520" className='vid' allowFullScreen="allowFullScreen" 
      src='https://www.youtube.com/embed/zus7DG9gboc' >
    </iframe>
    </div>
    </div>
  </div>
  );
};

export default HomeContainer;
