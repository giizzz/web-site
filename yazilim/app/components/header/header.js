"use client"
import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import { HiAcademicCap } from "react-icons/hi";
import { HiCode } from "react-icons/hi";
import "./header.css";

const Header = () => {
  const router = useRouter();

  return (
    <header>
      <nav className='head'>

        <div className='icon'>
          <div className='icons'><HiAcademicCap /></div>
          <Link href="/">Sigarasız Yaşam</Link>
        </div>
        <div className='parts'>
            <div className='l'><Link href="/cuzdan">Cüzdan</Link></div>
            <div className='l'><Link href="/zararlar">Zararlar</Link></div>
            <div className='l'><Link href="/tesvik">Teşvik</Link></div>
            <div className='l'><Link href="/ks">Kamu Spotu</Link></div>
            <div className='l'><Link href="/anket">Anket</Link></div>
        
        </div>
        <div className='yonetim'>
        <div className='in-yon'><Link href="http://localhost/iletisim/yonetim_paneli.php"><HiCode /></Link></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

// <div className='search'>
//         <div className='search-area'>
//           <div className='input-area'><input type='text' placeholder='Ara'></input></div>
//           <div className='inner-box'><FaSearch /></div>
//         </div>
//         </div>