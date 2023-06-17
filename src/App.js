import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './style/App.css';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Routing from './routes/Routing';
import Cart from './pages/cart';

function App() {
  const [menuActive, setMenuActive] = useState(true)

  const handleSidebar = () => {
    setMenuActive(!menuActive)
  }
  return (
    <>
      <BrowserRouter>
        <Header menuActive={menuActive} toggleSidebar={handleSidebar} />
        <Sidebar menuActive={menuActive} />
        <div className={`main-wrapper ${menuActive ? "" : "mainActive"}`}>
          <Routing />
        </div>
        <Cart />
      </BrowserRouter>
    </>
  );
}

export default App;
