import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Markets from "../pages/Markets";
import News from "../pages/News";
import Portfolio from "../pages/Portfolio";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/news" element={<News />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
