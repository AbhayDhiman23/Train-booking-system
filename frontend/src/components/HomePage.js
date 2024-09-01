import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from '../assets/images.png'; // Adjust the path if needed

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/main");
    }
  }, [navigate]);

  return (
    <div
      className="container mx-auto mt-5 flex flex-col items-center text-center relative min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        opacity: "0.8",
      }}
    >
      <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold">Welcome to the Train Trek</h1>
        <p className="mt-2 text-lg">Please log in to book your seats.</p>
        <div className="mt-5">
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="bg-green-500 text-white px-4 py-2 rounded ml-4"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
