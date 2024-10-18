import { createContext, useState } from "react";
import "./App.css";
import LandingPage from "./components/Pages/LandingPage/LandingPage";
import { imgNFTLand } from "./links/img.links";

export interface IContextMenu {
  state: boolean,
  setState?: React.Dispatch<React.SetStateAction<boolean>>
}

export const ContextMenu = createContext<IContextMenu>({state: false});

function App() {
  let [contextMenu, setContextMenu] = useState<boolean>(false);

  return (
    <ContextMenu.Provider value={{state: contextMenu, setState: setContextMenu}}>
      <LandingPage />
    </ContextMenu.Provider>
  );
}

export default App;
