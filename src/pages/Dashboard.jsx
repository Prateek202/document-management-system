import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <div className="card p-4 shadow">

          <h2>
            Document Management System
          </h2>

          <p>
            Welcome to Dashboard
          </p>

        </div>

      </div>
    </>
  );
}

export default Dashboard;