import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8 text-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* About Us Box */}
        <div className="footer-box bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold text-orange-400 mb-2">About Us</h2>
          <p className="text-sm">Humari website ka chhota sa introduction yahan likho.</p>
        </div>

        {/* Quick Links Box */}
        <div className="footer-box bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold text-orange-400 mb-2">Quick Links</h2>
          <ul className="text-sm">
            <li><a href="#" className="hover:text-orange-400">Home</a></li>
            <li><a href="#" className="hover:text-orange-400">Services</a></li>
            <li><a href="#" className="hover:text-orange-400">Contact</a></li>
            <li><a href="#" className="hover:text-orange-400">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Us Box */}
        <div className="footer-box bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold text-orange-400 mb-2">Contact Us</h2>
          <p className="text-sm">Email: info@example.com</p>
          <p className="text-sm">Phone: +92 300 1234567</p>
        </div>

        {/* Social Media Box */}
        <div className="footer-box bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold text-orange-400 mb-2">Follow Us</h2>
          <div className="flex justify-center space-x-4 text-xl">
            <a href="#" className="hover:text-orange-400"><FaFacebook /></a>
            <a href="#" className="hover:text-orange-400"><FaTwitter /></a>
            <a href="#" className="hover:text-orange-400"><FaInstagram /></a>
          </div>
        </div>

      </div>

      <p className="mt-6 text-sm opacity-75">© 2025 All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
