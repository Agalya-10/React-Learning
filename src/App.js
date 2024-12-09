import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './Component/Form';
import Table from "../src/Component/Table"

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/createForm' element={<Form/>}/>
    <Route path='/createTable' element={<Table/>}/>

  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
