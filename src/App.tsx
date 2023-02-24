import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { LayoutAdmin } from "./component/admin/Layout/LayoutAdmin";
import { ListProduct } from "./component/admin/product/ListProduct";
import { ListUser } from "./component/admin/user/ListUser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route path="/admin/user" element={<ListUser />} />
          <Route path="/admin/product" element={<ListProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
