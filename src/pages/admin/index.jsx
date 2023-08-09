import DashboardLayout from "@components/Layouts/DashboardLayout";

const AdminDashboard = () => {
  return <div>yahoo admin</div>;
};

export default AdminDashboard;

AdminDashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
