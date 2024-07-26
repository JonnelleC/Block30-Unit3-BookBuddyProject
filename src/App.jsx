import { Routes, Route } from 'react-router-dom';
import Home from './Home'; 
import Authorization from './Authorization';
import BookList from './BookList'; 

const App = () => {
  return (
    <>
      <Home/>
      <Routes>
        <Route path="/books" element={<BookList />} />
        <Route path="/login" element={<Authorization />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </>
  );
};

export default App;