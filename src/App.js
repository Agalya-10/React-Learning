import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './Component/Error';
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
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import DynamicRoute from './Component/DynamicRoute';
import Memo from './Component/Memo';
import Styles from './Component/Styles';
import Memo1 from './Component/Memo1';
import Memo2 from './Component/Memo2';
import UseForm from './Component/UseForm';
import Errorbou from './Component/Errorbou';
import Useeffect from './Component/Useeffect';
import FormTask from './Component/FormTask';
import Registerform from './Component/Registerform';
import Loginformdata from './Component/Loginformdata';
import Registerformdata from './Component/Registerformdata';
import Usecontext from './Component/Usecontext';
import Useref from './Component/Useref';
import Callback from './Component/Callback';
import Usememo from './Component/Usememo';
import Usereducer from './Component/Usereducer';
import Customhook from './Component/Customhook';



 
function App() {
  return (
  <>
  <BrowserRouter>
 {/* <Routerlink/> */}
  <Routes>
    <Route path='*' element={<Error/>}/> 
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
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/dynamicroute/:Name' element={<DynamicRoute/>}/>
    <Route path='/reactmemo' element={<Memo/>}/>
    <Route path='/memo1' element={<Memo1/>}/>
    <Route path='/memo2' element={<Memo2/>}/>
    <Route path='/styles' element={<Styles/>}/>
    <Route path='/useform' element={<UseForm/>}/>
    <Route path='/errorboundaries' element={<Errorbou/>}/>
    <Route path='/useeffect' element={<Useeffect/>}/>
    <Route path='/formtask' element={<FormTask/>}/>
    <Route path='/registerform' element={<Registerform/>}/>
    <Route path='/loginformdata' element={<Loginformdata/>}/>
    <Route path='/Registerformdata' element={<Registerformdata/>}/>
    <Route path='/usecontext' element={<Usecontext/>}/>
    <Route path='/useref' element={<Useref/>}/>
    <Route path='/callback' element={<Callback/>}/>
    <Route path='/usememo' element={<Usememo/>}/>
    <Route path='/usereducer' element={<Usereducer/>}/>
    <Route path='/customhook' element={<Customhook/>}/>






  

  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
