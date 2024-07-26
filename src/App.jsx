
import { Routes, Route } from 'react-dom';
import NavBar from "./Home.jsx";
import Authorization from "./Authorization.jsx";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/books" element={<BookList />} />
        <Route path="/login" element={<Authorization />} />
        <Route path="/home" element={<h1>Ellenor's Book Club</h1>} />
      </Routes>
    </>
  );


};

export default App;
