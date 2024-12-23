import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BookGrid from './components/BookGrid';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main className="container my-5">
        <h2 className="text-center mb-4"><strong>Available Books</strong></h2>
        <BookGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
