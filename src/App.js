import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import ProdukList from "./components/ProdukList";
import AddProduk from "./components/AddProduk";
import EditProduk from "./components/EditProduk";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/index" element={<Dashboard />} />
          <Route path="/" element={<UserList />} />
          <Route path="/produks" element={<ProdukList />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/addProduk" element={<AddProduk />} />
          <Route path="/editproduk/:id" element={<EditProduk />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
