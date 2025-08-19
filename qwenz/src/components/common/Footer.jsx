const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} CryptoSite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
