
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import About from './Components/About';
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      
      {/* page Not Found always use in bottom */}
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    </>
  );
}

export default App;
