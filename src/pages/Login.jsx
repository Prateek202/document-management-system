const DEV_MODE = true;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateOtp } from "../services/authService";

function Login() {
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


//   //for dev purpose; till number is not registered in backend
//     if (DEV_MODE) {
//     localStorage.setItem("mobile", mobile);
//     navigate("/verify-otp");
//     return;
//     }
  
  const handleGenerateOtp = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await generateOtp(mobile);

console.log(response);

if (response.status === true) {
  localStorage.setItem("mobile", mobile);

  alert("OTP Sent Successfully");

  navigate("/verify-otp");
} else {
  alert(response.data || "Unable to generate OTP");
}
    } catch (error) {
        console.log("API Error:", error.response?.data);
        console.log(error);

  alert("Failed to generate OTP");
} finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">

        <h2 className="text-center mb-4">
          Login
        </h2>

        <form onSubmit={handleGenerateOtp}>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />

          <button
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Sending..." : "Generate OTP"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default Login;
