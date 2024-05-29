import React from 'react'
import "./styles/reset.css"
import "./styles/global.css"
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
  

const RootLayout = ({children}) => {
  return (
    <html lang="tr">
            <body className="container">
                <Header/>
                <main>{children}</main>
                <Footer/>
            </body>
       </html>
  );
};

export default RootLayout;
