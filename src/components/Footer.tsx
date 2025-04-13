import React from "react";
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import bird from '../assets/bird.png'
import linkedin from '../assets/linkedin.png'
import youtube from '../assets/youtube.png'
import card from '../assets/card.png'
import mastercard from '../assets/mastercard.png'
import visa from '../assets/visa.png'
import paypal from '../assets/paypal.png'

const Footer = () => {
  return (
    <footer className="pt-6 mt-10 text-gray-800">
      <div className="w-[1100px] bg-gray-100 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm p-[30px]">

        <div>
          <h3 className="font-bold mb-2 text-[18px]">My Account</h3>
          <ul className="text-[20px]">
            <li className="mt-[20px]"><a href="#" className="hover:text-green-600 mt-[20px]">My Account</a></li>
            <li className="mt-[20px]"><a href="#" className="hover:text-green-600 mt-[20px]">Address</a></li>
            <li className="mt-[20px]"><a href="#" className="hover:text-green-600 mt-[20px]">Wishlist</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold mb-2 text-[18px]">Categories</h3>
          <ul className="text-[20px]">
            <li className="mt-[20px]"><a href="#" className="hover:text-green-600">House Plants</a></li>
            <li className="mt-[20px]"><a href="#" className="hover:text-green-600">Potter Plants</a></li>
            <li className="mt-[20px]"><a href="#" className="hover:text-green-600">Seeds</a></li>
            <li className="mt-[20px]"><a href="#" className="hover:text-green-600">Small Plants</a></li>
            <li className="mt-[20px]"><a href="#" className="hover:text-green-600">Accessories</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2 text-[18px]">Social Media</h3>
          <div className="flex space-x-2 mb-4 mt-[30px]">
            <img src={facebook} alt=""/>
            <img src={instagram} alt="" />
            <img src={bird} alt="" />
            <img src={linkedin} alt="" />
            <img src={youtube} alt="" />
          </div>
          
          <h3 className="font-bold mb-2 text-[18px] mt-[50px]">We accept</h3>
          <div className="flex space-x-2 mt-[30px]">
            <img src={paypal} alt="PayPal" className="h-6" />
            <img src={mastercard} alt="Mastercard" className="h-6" />
            <img src={visa} alt="Visa" className="h-6" />
            <img src={card} alt="card" className="h-6" />
          </div>
        </div>
      </div>
      
      <p className="text-center font-bold text-[18px] my-4">© 2023 GreenShop. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
