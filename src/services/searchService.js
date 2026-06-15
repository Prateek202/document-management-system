import api from "../api/axios";

export const searchDocuments = async (
  searchData
) => {
  const response = await api.post(
    "searchDocumentEntry",
    searchData
  );

  return response.data;
};