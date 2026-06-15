import api from "../api/axios";

export const generateOtp = async (mobileNumber) => {
  const response = await api.post("generateOTP", {
    mobile_number: mobileNumber,
  });

  return response.data;
};

export const validateOtp = async (mobileNumber, otp) => {
  const response = await api.post("validateOTP", {
    mobile_number: mobileNumber,
    otp,
  });

  return response.data;
};