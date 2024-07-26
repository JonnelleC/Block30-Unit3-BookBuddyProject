import {Link} from 'react-router-dom';
import React from 'react';

const Home = () => {
    return (
        <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
       

    )
};

export default Home