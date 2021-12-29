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
  <body className=" w-11/12 xl:w-2/3 m-auto">
    <Header/>
    <Main/>
    <Footer/>
  </body>
  );
}

export default App;
