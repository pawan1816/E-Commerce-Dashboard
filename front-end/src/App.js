import './App.css';
import Nav from './Component/Nav';
import Footer from './Component/Footer';
import SignUp from './Component/SignUp';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element=<h1>Product Listing Component</h1>></Route>
          <Route path="/add" element=<h1>ADD Product Listing Component</h1>></Route>
          <Route path="/update" element=<h1>Update Product Listing Component</h1>></Route>
          <Route path="/profile" element=<h1>Profile Component</h1>></Route>
          <Route path="/logout" element=<h1>logout Component</h1>></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;


// to install router-dom : npm i react-router-dom