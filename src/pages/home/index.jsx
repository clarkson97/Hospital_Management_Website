import React from 'react';
import Navbar from '../../components/navbar';
import './home.css';

function Home() {
  return (
    <div className="App">
      <div className="navbar__hero__wrapper">
        <div className="navbar__hero">
          {/* navbar */}
          <Navbar />
          {/* hero section */}
        </div>
      </div>
      {/* feature section */}
    </div>
  );
}

export default Home;
