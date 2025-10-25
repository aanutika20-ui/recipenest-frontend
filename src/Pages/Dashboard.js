import Navbar from '../components/Navbar';

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1 className="h3 mb-3">Chef Dashboard</h1>
        <p>Here you&apos;ll manage your recipes and profile.</p>
      </div>
    </>
  );
};

export default Dashboard;


