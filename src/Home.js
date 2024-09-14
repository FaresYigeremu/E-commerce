{/* eslint-disable */}
import React from "react";
import "./Home.css";
import Product from "./Product";
import hero from "./Hero.jpg";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__hero">
          <img src={hero} alt="Cover Image" style={{width: '100%', height: '500px', objectFit: 'cover'}} />
          <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
            <h1 style={{fontSize: '6rem', fontWeight: 'bold', color: 'white'}}>E-commerce</h1>
            <p style={{fontSize: '2rem', color: 'white', textAlign: 'center'}}>Seamless shopping, delivered</p>
          </div>
        </div>
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product 
           id="34593487"
           title="SKIL Rechargeable 4V Cordless Screwdriver with Circuit Sensor Technology Includes 45pcs Bit Set"
           price={33.17}
           rating={4}
           image="https://m.media-amazon.com/images/I/61F95Jc4EgL._AC_SL1000_.jpg"
          />
          <Product 
           id="3475487"
           title="3 in 1 Charging Station for Apple Multiple Devices, Foldable Travel Wireless Charger 18W for iPhone 15"
           price={109.99}
           rating={4}
           image="https://m.media-amazon.com/images/I/81UnaTCSLrL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
        <Product 
           id="34555687"
           title="Rii RK100+ Multiple Color Rainbow LED Backlit Large Size USB Wired Mechanical Feeling Multimedia PC Gaming Keyboard,"
           price={14.99}
           rating={4}
           image="https://m.media-amazon.com/images/I/61jhVTLFAEL._AC_SL1423_.jpg"
          />
          <Product 
           id="34987447"
           title="Dell Inspiron 15 3000 3520 Business Laptop Computer[Windows 11 Pro], 15.6'' FHD Touchscreen, 11th Gen Intel Quad-Core i5-1135G7"
           price={495.89}
           rating={4}
           image="https://m.media-amazon.com/images/I/71gbrvRJI-L._AC_SL1500_.jpg"
          />
            <Product 
           id="34564247"
           title="Nikon D7500 20.9MP DSLR Camera with AF-S DX NIKKOR 18-140mm f/3.5-5.6G ED VR Lens, Black"
           price={934.01}
           rating={4}
           image="https://m.media-amazon.com/images/I/71iKNJ6rVIL._AC_SL1000_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
