import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './Component/Form';
import Table from './Component/Table';
import Login from './Component/login';
import Button from './Component/Button';
import Props from './Component/Props';
import Child from './Component/Child';
import Events from './Component/Events';
import Conditionals from './Component/Conditionals';
import List from './Component/List';
import Form1 from './Component/Form1';
import Routerlink from './Component/Routerlink';

function App() {
  return (
  <>
  <BrowserRouter>
  <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
  <Routes>
    <Route path='/createForm' element={<Form/>}/>
    <Route path='/createTable' element={<Table/>}/>
    <Route path='/createBox' element={<Login/>}/>
    <Route path='/changeButton' element={<Button/>}/>
    <Route path='/changeProps' element={<Props/>}/>
    <Route path='/changeChild' element={<Child/>}/>
    <Route path='/changeEvent' element={<Events/>}/>
    <Route path='/changeConditionals' element={<Conditionals/>}/>
    <Route path='/changeList' element={<List/>}/>
    <Route path='/changeform1' element={<Form1/>}/>
    <Route path='/changerouter' element={<Routerlink/>}/>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />

    




  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
