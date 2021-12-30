import { useContext, useEffect } from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import PortfolioContext from './context/PortfolioContext';


function App() {
  const [menuOpen] = useContext(PortfolioContext);

  useEffect(() => {
    document.body.classList.toggle('blockSiteScrolling', menuOpen);
  },[menuOpen])
  
  return (
  <div>
    <Header/>
    <Main/>
    <Footer/>
  </div>
  );
}

export default App;
