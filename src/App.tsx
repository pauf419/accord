import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import RootPage from "./pages/Root/RootPage";
import Grainer from "./components/Header/Grainer/Grainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Grainer/>
        <Header/>
        <Routes>
          <Route path="*" element={
            <RootPage/>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
