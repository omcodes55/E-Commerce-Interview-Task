import DashboardLayout from "../components/DashboardLayout";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <DashboardLayout>
      <h1 className="text-xl md:text-2xl font-bold mb-6">My Profile</h1>

      <div className="bg-white shadow rounded-xl p-5 md:p-6 w-full max-w-md">
        <p className="mb-3 text-sm md:text-base">
          <span className="font-semibold">Name:</span> {user?.name}
        </p>

        <p className="text-sm md:text-base">
          <span className="font-semibold">Email:</span> {user?.email}
        </p>
      </div>
    </DashboardLayout>
  );
};

export default Profile;