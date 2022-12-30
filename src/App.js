import { BrowserRouter } from 'react-router-dom';
import './App.scss';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Router from './Config/Router';

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
