import { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) {
      localStorage.setItem("token", token);
      window.location.href = "/dashboard";
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Todo App</h2>
        <p className="text-gray-500 mb-6">Stay organized with your daily tasks</p>
        <button
          onClick={() =>
            window.location.href = `${process.env.REACT_APP_API_URL}/auth/google`
          }
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow transition"
        >
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
            className="inline-block w-5 mr-3 align-middle"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;

