import api from "../api/axios";

export const fetchTags = async (term = "") => {
  const response = await api.post(
    "documentTags",
    {
      term,
    }
  );

  return response.data;
};

export const uploadDocument = async (
  formData
) => {
  const response = await api.post(
    "saveDocumentEntry",
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );

  return response.data;
};