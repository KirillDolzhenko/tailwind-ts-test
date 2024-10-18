import { createContext, useState } from 'react';
import './App.css';
import LandingPage from './components/Pages/LandingPage/LandingPage';
import { faviconNftLogo } from './links/img.links';
import { Helmet } from 'react-helmet';

export interface IContextMenu {
  state: boolean;
  setState?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContextMenu = createContext<IContextMenu>({ state: false });

function App() {
  const [contextMenu, setContextMenu] = useState<boolean>(false);

  return (
    <ContextMenu.Provider
      value={{ state: contextMenu, setState: setContextMenu }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>NFTore</title>
        <link rel="icon" href={faviconNftLogo} />
      </Helmet>
      <LandingPage />
    </ContextMenu.Provider>
  );
}

export default App;
