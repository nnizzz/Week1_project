import React from 'react';
import BookCard from './BookCard';
import book1 from '../assets/images/book1.jpeg';
import book2 from '../assets/images/book2.jpeg';
import book3 from '../assets/images/book3.jpeg';
import book4 from '../assets/images/book4.jpeg';
import book5 from '../assets/images/book5.jpeg';
import book6 from '../assets/images/book6.jpeg';

function BookGrid() {
  return (
    <div className="book-grid">
      <BookCard title="Restore  Me" author="Tahereh Mafi" price="169" image={book1} />
      <BookCard title="A Court Of Mist & Fury" author="Sarah A James" price="279" image={book2} />
      <BookCard title="Divergent" author="Veronica Ruth" price="269" image={book3} />
      <BookCard title="If You Know" author="George Paulson" price="279" image={book4} />
      <BookCard title="Destory Me" author="Tahereh Mafi" price="169" image={book5} />
      <BookCard title="Black Hearts" author="Jenna Woods" price="279" image={book6} />
    </div>
  );
}

export default BookGrid;
