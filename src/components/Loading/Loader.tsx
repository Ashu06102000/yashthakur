import { useState, useEffect } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="w-screen h-screen flex flex-col gap-4 items-center justify-center fixed top-0 left-0 bg-black z-50">
      <h1 className="text-5xl font-miaCulpa font-thin text-white">
        Yash Thakur
      </h1>
      <div className="w-40 h-px bg-gray-600 mt-2 overflow-hidden relative">
        <div className="h-full bg-white animate-loadingBar"></div>
      </div>
    </div>
  );
};

export default Loader;
