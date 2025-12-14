import { Navigate } from "react-router-dom";
import Dashboardd from "../components/data_dash";
import Footer from "../layouts/Footer";

export default function Dashboard() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }
  return (
    <>
      <div className="pt-2">
        <Dashboardd />
      </div>

      {/* Footer */}
      <div className="pt-8.5">
        <Footer />
      </div>
    </>
  );
}
