import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-lg text-gray-600">
        Oops! The page you're looking for doesn't exist.
      </p>

      <div className="mt-6">
 <button
  onClick={() => navigate("/")}
  className="rounded-2xl px-6 py-2 bg-gray-600 text-white font-medium 
             hover:bg-gray-700 transition-colors duration-200"
>
  Go Home
</button>
      </div>
    </div>
  );
};

export default NotFoundPage;
