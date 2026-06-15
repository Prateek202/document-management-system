import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateOtp } from "../services/authService";

function Login() {
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleGenerateOtp = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await generateOtp(mobile);

      localStorage.setItem("mobile", mobile);

      alert("OTP Sent Successfully");

      navigate("/verify-otp");
    } catch (error) {
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
