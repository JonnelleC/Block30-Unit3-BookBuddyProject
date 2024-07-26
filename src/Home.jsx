import {Link} from 'react-router-dom';




const Home = () => {
    return (
        <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to ="/search">Search Books</Link></li>
        </ul>
      </nav>
       

    )
};

export default Home