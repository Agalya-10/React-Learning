import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './Component/Form';
import Table from './Component/Table';
import Login from './Component/login';
import Button from './Component/Button';
import Props from './Component/Props';
import Child from './Component/Child';

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/createForm' element={<Form/>}/>
    <Route path='/createTable' element={<Table/>}/>
    <Route path='/createBox' element={<Login/>}/>
    <Route path='/changeButton' element={<Button/>}/>
    <Route path='/changeProps' element={<Props/>}/>
    <Route path='/changeChild' element={<Child/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
