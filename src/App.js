import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './templates/home';
import { New } from './components/new';
import { Login } from './templates/login';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/test' element={<New />}/>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
