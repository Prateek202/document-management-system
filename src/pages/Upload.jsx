import FileUploadForm from "../components/FileUploadForm";
import Navbar from "../components/Navbar";

function Upload() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <FileUploadForm />
      </div>
    </>
  );
}

export default Upload;