import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
