import React from 'react';
import book1 from '../assets/images/book1.jpeg';
import book2 from '../assets/images/book2.jpeg';

function BookCard({ title, author, price, image }) {
  return (
    <div className="book card">
      <img src={image} alt={title} width="250" height="350" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title"><b>{title}</b></h5>
        <p className="card-text">by {author}</p>
        <p className="card-text"><strong>₹{price}</strong></p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
}

export default BookCard;
