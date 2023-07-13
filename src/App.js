import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './templates/home';
import { New } from './components/new';
import { Login } from './account/login';
import Logout from './account/logout';
import { SnackbarProvider, useSnackbar } from 'notistack';
import RegisterForm from './account/register';
import { Profile } from './account/profile';
function App() {
  return (
    <SnackbarProvider maxSnack={3}>
    <BrowserRouter>
      <Routes>
        <Route path='/test' element={<New />}/>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/logout' element={<Logout />}></Route>
        <Route path='/register' element={<RegisterForm/>}></Route>
        <Route path='/profile/:usr' element={<Profile/>}></Route>
        <Route path='/' element={<Home />}/>
      </Routes>
    </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
