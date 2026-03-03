import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import ScanDetails from "../pages/ScanDetails";
import Dashboard from "../pages/Dashboard";
import Layout from "../layouts/Layout";
import NotFound from "../pages/NotFound";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/scan-details/:id" element={<ScanDetails />} />
        </Route>

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
