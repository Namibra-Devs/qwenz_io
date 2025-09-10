import Threads from "../components/Threads"

export default function Services() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
       <Threads
                color={[1, 1, 1]}
                amplitude={1.2}
                distance={0.8}
                enableMouseInteraction={true}
                className="absolute inset-0 w-full h-full z-0"
              />
    <div className="pt-24 min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-bold">Our Services</h1>
      <p className="mt-4 text-gray-300 max-w-2xl">
        From secure trading to portfolio tracking, Qwenz.io offers modern tools to manage your crypto assets.
      </p>
    </div>
    </div>
  );
}
