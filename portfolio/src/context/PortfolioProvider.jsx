import PortfolioContext from './PortfolioContext';

function PortfolioProvider({children}) {
  return (
    <PortfolioContext.Provider value={'value'}>
      {children}
    </PortfolioContext.Provider>
  );
}

export default PortfolioProvider;