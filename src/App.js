import { BrowserRouter } from 'react-router-dom';
import './App.scss';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Router from './Config/Router';

export const URL = process.env.REACT_APP_BACKEND_URL;

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <div>
        <Router />
      </div>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
