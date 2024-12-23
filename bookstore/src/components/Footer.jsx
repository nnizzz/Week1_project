import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-center py-3">
      <div className="container">
        <p>&copy; 2024 Bookie's Mart. All rights reserved.</p>
        <div>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
        <div className="mt-3">
          <h5>Contact Us</h5>
          <p><i className="fas fa-envelope"></i> Email: info@bookiesmart.com</p>
          <p><i className="fas fa-phone"></i> Phone: +912233445566</p>
          <p><i className="fas fa-map-marker-alt"></i> Address: 123 Book Street, EKM City</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
