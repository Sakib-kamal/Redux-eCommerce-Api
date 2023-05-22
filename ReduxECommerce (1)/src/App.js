import './App.css';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import Home from './Components/Home'
import AddedProduct from './Components/AddedProduct';
import Googletranslate from './Googletranslate';

function App() {
  return (
    // <BrowserRouter>
    // <Routes>
    //   <Route index element =   {<Home/>} />
    //   <Route path='/added' element =   {<AddedProduct/>} />
    // </Routes>
   
    // </BrowserRouter>
 <div>
  <Googletranslate/>
 </div>
  
 

  );
}

export default App;
