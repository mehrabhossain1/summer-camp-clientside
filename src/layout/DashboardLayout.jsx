// Sample data for enrolled classes

import EnrolledClasses from "../pages/Dashboard/Student/EnrolledClasses";
import SelectedClasses from "../pages/Dashboard/Student/MySelectedClasses";

const DashboardLayout = () => {
  return (
    <div className='container mx-auto'>
      <h2 className='text-2xl font-semibold mb-4'>Student Dashboard</h2>
      <SelectedClasses />
      <EnrolledClasses />
    </div>
  );
};

export default DashboardLayout;
