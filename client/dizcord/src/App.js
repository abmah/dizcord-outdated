import { AppContextProvider } from "./components/context/AppContext";
import Dizcord from "./components/Dizcord";
function App() {
  return (
    <div className="components-body">
      <AppContextProvider>
        <Dizcord />
      </AppContextProvider>
    </div>
  );
}

export default App;
