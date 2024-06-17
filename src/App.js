import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import ProdukList from "./components/ProdukList";
import AddProduk from "./components/AddProduk";
import EditProduk from "./components/EditProduk";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/produks" element={<ProdukList />} />
        <Route path="add" element={<AddUser />} />
        <Route path="/addProduk" element={<AddProduk />} />
        <Route path="/editproduk/:id" element={<EditProduk />} />
        <Route path="edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
