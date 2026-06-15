import { Link } from "react-router-dom";

function Navbar() {

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container">

        <Link
          to="/dashboard"
          className="navbar-brand"
        >
          DMS
        </Link>

        <div>

          <Link
            to="/upload"
            className="btn btn-outline-light me-2"
          >
            Upload
          </Link>

          <Link
            to="/search"
            className="btn btn-outline-light me-2"
          >
            Search
          </Link>

          <Link
            to="/admin"
            className="btn btn-outline-light me-2"
          >
            Admin
          </Link>

          <button
            className="btn btn-danger"
            onClick={logout}
          >
            Logout
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;