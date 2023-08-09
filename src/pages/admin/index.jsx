import DashboardLayout from "../../../components/Layouts/DashboardLayout";

const AdminDashboard = () => {
  return <div></div>;
};

export default AdminDashboard;

AdminDashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
