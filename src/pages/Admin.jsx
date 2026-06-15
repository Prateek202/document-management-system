import { useState } from "react";
import Navbar from "../components/Navbar";

function Admin() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("User Created Successfully");
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <div className="card p-4 shadow">

          <h3>Create User</h3>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Username"
              className="form-control mb-3"
              value={formData.username}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  username: e.target.value,
                })
              }
            />

            <input
              type="password"
              placeholder="Password"
              className="form-control mb-3"
              value={formData.password}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password: e.target.value,
                })
              }
            />

            <button className="btn btn-primary">
              Create User
            </button>

          </form>

        </div>

      </div>
    </>
  );
}

export default Admin;