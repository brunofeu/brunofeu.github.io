import { useState } from 'react';
import PortfolioContext from './PortfolioContext';

function PortfolioProvider({children}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const state = [menuOpen, setMenuOpen]
  return (
    <PortfolioContext.Provider value={state}>
      {children}
    </PortfolioContext.Provider>
  );
}

export default PortfolioProvider;