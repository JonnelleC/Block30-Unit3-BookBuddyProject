import { Routes, Route } from 'react-router-dom';
import Home from './Home'; 
import Authorization from './Authorization';
import BookList from './BookList'; 
import SearchBook from './SearchBooks';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  return (
    <>
      <Home/>
      <Routes>
        <Route path="/books" element={<ProtectedRoute><BookList /></ProtectedRoute>} />
        <Route path="/login" element={<Authorization />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/search" element={<SearchBook />} />
        
      </Routes>
    </>
  );
};

export default App;