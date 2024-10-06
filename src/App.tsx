import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootPage from "./page/Root/RootPage";
import Grainer from "./components/Grainer/Grainer";

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
