import Threads from "../components/common/Threads";

const Home = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden bg-black">
      {/* Threads Fullscreen Background */}
      <div className="absolute inset-0 w-full h-full">
        <Threads amplitude={4} distance={0} enableMouseInteraction={true} />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
          Welcome to CryptoSite 🚀
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Track cryptocurrency markets, stay updated with news, and manage your
          portfolio.
        </p>
        <div className="mt-6">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-blue-500/50 transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
