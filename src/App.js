import { BrowserRouter } from 'react-router-dom';
import './App.scss';
//// react-toastify
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Router from './Config/Router';
import ScrollToTop from './scroll'


export const URL = process.env.REACT_APP_BACKEND_URL;

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
      <ToastContainer />
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
