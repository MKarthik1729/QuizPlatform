import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarForm from './components/NavbarForm';
import CreateForm from './components/CreateForm';
import FillForm from './components/FillForm';
import EvaluateForm from './components/EvaluateForm';

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' Component={NavbarForm}>
          <Route path='/create' Component={CreateForm} />
          <Route path='/fill' Component={FillForm} />
          <Route path='/eval' Component={EvaluateForm} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
