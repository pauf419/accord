import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import RootPage from "./pages/Root/RootPage";
import Grainer from "./components/Header/Grainer/Grainer";
import AboutPage from "./pages/About/AboutPage";
import CatalogPage from "./pages/Catalog/CatalogPage";
import PricePage from "./pages/Price/PricePage";
import DeliveryPage from "./pages/Delivery/DeliveryPage";
import DilersPage from "./pages/Dilers/DilersPage";
import ContactsPage from "./pages/Contacts/ContactsPage";
import MangalZonePage from "./pages/MangalZone/MangalZone";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Grainer/>
        <Header/>
        <Routes>
          <Route path="/" element={
            <RootPage/>
          }/>
          <Route path="/about" element={
            <AboutPage/>
          }/>
          <Route path="/catalog" element={
            <CatalogPage/>
          }/>
          <Route path="/catalog/mangal-zone" element={
            <MangalZonePage/>
          }/>
          <Route path="/price" element={<PricePage/>}/>
          <Route path="/delivery" element={<DeliveryPage/>}/>
          <Route path="/dilers" element={<DilersPage/>}/>
          <Route path="/contacts" element={<ContactsPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
