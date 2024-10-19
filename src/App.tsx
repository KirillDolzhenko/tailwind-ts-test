import { createContext, useState } from 'react';
import './App.css';
import LandingPage from './components/Pages/LandingPage/LandingPage';
import { faviconNft3Logo } from './links/img.links';
import { Helmet } from 'react-helmet';
import { IContextMenu } from './types/props.types';

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
        <link rel="icon" href={faviconNft3Logo} />
      </Helmet>
      <LandingPage />
    </ContextMenu.Provider>
  );
}

export default App;
