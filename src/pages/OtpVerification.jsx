import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateOtp } from "../services/authService";
import { useDispatch } from "react-redux";
import { setToken } from "../store/authSlice";

function OtpVerification() {
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const mobile = localStorage.getItem("mobile");

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    try {
      const response = await validateOtp(
        mobile,
        otp
      );

      console.log("OTP Response:", response);

      const token =
        response.token ||
        response.data?.token;

      dispatch(setToken(token));

      navigate("/dashboard");
    } catch (error) {
      console.log(error);

      alert("Invalid OTP");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2 className="text-center mb-4">
          Verify OTP
        </h2>

        <form onSubmit={handleVerifyOtp}>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />

          <button className="btn btn-success w-100">
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
}

export default OtpVerification;