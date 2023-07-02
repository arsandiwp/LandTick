import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home";
import Tiketsaya from "./components/tiketSaya";
import { Route, Routes } from "react-router-dom";
// import { createContext, useState } from 'react';
import Header from "./components/header";
import Invoice from "./components/invoice";
// import ListTiket from './components/listTiket';
import TambahTiket from "./components/tambahTiket";
import ListTransaksi from "./pages/listTransaksi";
import PrivatRoute from "./privateroute/privatroute";

// export const AppContext = createContext(null);
function App() {
  // const [pengguna, setPengguna] = useState();
  return (
    <>
      {/* <AppContext.Provider value={{pengguna, setPengguna}}> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tiketsaya" element={<Tiketsaya />}></Route>
        <Route path="/invoice" element={<Invoice />}></Route>
        <Route exact path="/" element={<PrivatRoute />}>
          <Route path="/listtransaksi" element={<ListTransaksi />}></Route>
          <Route path="/tambahtiket" element={<TambahTiket />}></Route>
        </Route>
      </Routes>
      {/* </AppContext.Provider> */}
    </>
  );
}

export default App;
