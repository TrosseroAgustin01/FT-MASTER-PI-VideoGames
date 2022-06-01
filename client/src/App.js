import './App.css';
import { Route, BrowserRouter,Routes } from 'react-router-dom';
import Landing from './components/Components/landing/landing';
import Home from './components/Components/Home/home';

function App() {
  return (<>
  <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
    {/* <Nav/> */}
    {/* <Route path='/videogames' element={<Videogames/>}/> */}
  </BrowserRouter>
</>);
}

export default App;

    // <div className="App">
      
    //   <h1>Henry Videogames</h1>
    // </div>