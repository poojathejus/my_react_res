import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Restdetails from './components/Restdetails';

function App() {
  return (
    <>
   <BrowserRouter>
   <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/restaurant/:id' element={<Restdetails/>}/>
        </Routes>
    <Footer/>
   </BrowserRouter>
    </>
  );
}

export default App;
